import { Table } from 'antd';

export default function Publish(props: any) {
  const columns = [
    {
      title: '新闻标题',
      dataIndex: 'title',
      render: (title: string, item: any) => {
        return <a href={`#/news-manage/preview/${item.id}`}>{title}</a>;
      },
    },
    {
      title: '作者',
      dataIndex: 'author',
    },
    {
      title: '新闻分类',
      dataIndex: 'category',
      render: (category: any) => {
        return category.title;
      },
    },
    {
      title: '操作',
      render: (item:any) => {
        return (
          <div>
            {props.button(item.id)}
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Table
        dataSource={props.dataSource}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
        rowKey={(item: any) => item.id}
      />
    </div>
  );
}
