import {
  Button,
  PageHeader,
  Steps,
  Form,
  Input,
  Select,
  message,
  notification,
} from 'antd';
import { useEffect, useRef, useState } from 'react';
import style from '@/pages/sandbox/news-manage/news.module.css';
import axios from 'axios';
import NewsEditor from '@/components/news-manage/NewsEditor';
import { history } from 'umi';
const { Option } = Select;

export default function newsadd(props: any) {
  const [current, setcurrent] = useState(0);
  const [categoryList, setcategoryList] = useState([]);
  const NewsForm: any = useRef(null);
  const [formInfo, setFormInfo] = useState({});
  const [content, setContent] = useState('');
  const handleNext = () => {
    if (current === 0) {
      NewsForm.current
        .validateFields()
        .then((res: any) => {
          setFormInfo(res);
          setcurrent(current + 1);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      if (content === '' || content.trim() === '<p></p>') {
        message.error('新闻内容不能为空！');
      } else {
        setcurrent(current + 1);
      }
    }
  };
  const handlePrevious = () => {
    setcurrent(current - 1);
  };
  useEffect(() => {
    axios('/categories').then((res) => {
      setcategoryList(res.data);
    });
  }, []);
  useEffect(() => {
    axios
      .get(
        `/news/${props.match.params.id}?_expand=category&_expand=role`,
      )
      .then((res: any) => {
        let {title,categoryId,content} =res.data;
        NewsForm.current.setFieldsValue({
          title,
          categoryId
        });
        setContent(content)
      });
  });
  const handleSave = (auditState: number) => {
    axios
      .patch(`/news/${props.match.params.id}`, {
        ...formInfo,
        content: content,
        auditState: auditState,
      })
      .then((res) => {
        history.push(
          auditState === 0 ? '/news-manage/draft' : '/audit-manage/list',
        );

        notification.info({
          message: `通知`,
          description: `您可以到${
            auditState === 0 ? '草稿箱' : '审核列表'
          }中查看你的新闻`,
          placement: 'bottomRight',
        });
      });
  };
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="更新新闻"
        onBack={() => window.history.back()}
      />
      <Steps
        current={current}
        items={[
          {
            title: '基本信息',
            description: '新闻标题，新闻分类',
          },
          {
            title: '新闻类容',
            description: '新闻具体类容',
          },
          {
            title: '新闻提交',
            description: '保存新闻或则提交审核',
          },
        ]}
      />
      <div style={{ marginTop: '50px' }}>
        <div className={current === 0 ? '' : style.hidden}>
          <Form
            name="wrap"
            labelCol={{ flex: '100px' }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            colon={false}
            ref={NewsForm}
          >
            <Form.Item
              label="新闻标题"
              name="title"
              rules={[{ required: true, message: '请填写标题！' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="新闻分类"
              name="categoryId"
              rules={[{ required: true, message: '请选择新闻分类！' }]}
            >
              <Select>
                {categoryList.map((item: any) => (
                  <Option value={item.id} key={item.id}>
                    {item.title}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </div>
        <div className={current === 1 ? '' : style.hidden}>
          <NewsEditor
            getContent={(value: any) => {
              setContent(value);
            }}
            content={content}
          />
        </div>
        <div className={current === 2 ? '' : style.hidden}></div>
      </div>
      <div style={{ marginTop: '50px' }}>
        {current === 2 && (
          <span>
            <Button type="primary" onClick={() => handleSave(0)}>
              保存到草稿箱
            </Button>
            <Button danger onClick={() => handleSave(1)}>
              提交审核
            </Button>
          </span>
        )}
        {current < 2 && (
          <Button type="primary" onClick={handleNext}>
            下一步
          </Button>
        )}
        {current > 0 && <Button onClick={handlePrevious}>上一步</Button>}
      </div>
    </div>
  );
}
