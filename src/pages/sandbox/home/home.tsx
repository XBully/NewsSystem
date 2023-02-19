import { Card, Col, Row, List, Avatar, Drawer } from 'antd';
import { useEffect, useRef, useState } from 'react';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import * as echarts from 'echarts';
import _ from 'lodash';

const { Meta } = Card;

export default function home() {
  const [viewList, setViewList] = useState([]);
  const [starList, setStarList] = useState([]);
  const [ownList, setOwnList] = useState([]);
  const [open, setOpen] = useState(false);
  const barRef: any = useRef();
  const pieRef: any = useRef();
  const {
    role: { roleName },
    region,
    username,
  } = JSON.parse(localStorage.getItem('token') || '');
  const [pieChart, setPieChart] = useState(null);
  useEffect(() => {
    axios
      .get(
        'news?publishState=2&_expand=category&_sort=view&_order=desc&_limit=10',
      )
      .then((res) => {
        setViewList(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        'news?publishState=2&_expand=category&_sort=star&_order=desc&_limit=10',
      )
      .then((res) => {
        setStarList(res.data);
      });
  }, []);
  useEffect(() => {
    axios.get(`/news?publishState=2&_expand=category`).then((res) => {
      renderBarView(_.groupBy(res.data, (item: any) => item.category.title));
    });
    return () => {
      window.onresize = null;
    };
  }, []);
  useEffect(() => {
    axios.get(`/news?publishState=2&_expand=category`).then((res) => {
      renderBarView(_.groupBy(res.data, (item: any) => item.category.title));
      setOwnList(res.data);
    });
    return () => {
      window.onresize = null;
    };
  }, []);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const renderBarView = (data: any) => {
    var myChart = echarts.init(barRef.current);

    var option = {
      title: {
        text: '新闻分类图示',
      },
      tooltip: {},
      legend: {
        data: ['数量'],
      },
      xAxis: {
        data: Object.keys(data),
        axisLabel: {
          rotate: '45',
          interval: 0,
        },
      },
      yAxis: {
        minInterval: 1,
      },
      series: [
        {
          name: '数量',
          type: 'bar',
          data: Object.values(data).map((item: any) => item.length),
        },
      ],
    };
    myChart.setOption(option);
    window.onresize = () => {
      myChart.resize();
    };
  };
  const renderPieView = () => {
    var currentList = ownList.filter((item: any) => item.author === username);
    var groupObj = _.groupBy(currentList, (item: any) => item.category.title);
    var list = [];
    for (var i in groupObj) {
      list.push({
        name: i,
        value: groupObj[i].length,
      });
    }

    var myChart: any;
    if (!pieChart) {
      myChart = echarts.init(pieRef.current);
      setPieChart(myChart);
    } else {
      myChart = pieChart;
    }

    var option = {
      title: {
        text: '当前用户新闻分类图示',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '发布数量',
          type: 'pie',
          radius: '50%',
          data: list,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    myChart.setOption(option);
    window.onresize = () => {
      myChart.resize();
    };
  };
  return (
    <div className="site-card-wrapper" style={{ overflow: 'auto' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="用户最常浏览" bordered={true}>
            <List
              size="small"
              dataSource={viewList}
              renderItem={(item: any) => (
                <List.Item>
                  <a href={`#/news-manage/preview/${item.id}`}>{item.title}</a>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="用户点赞最多" bordered={true}>
            <List
              size="small"
              dataSource={starList}
              renderItem={(item: any) => (
                <List.Item>
                  <a href={`#/news-manage/preview/${item.id}`}>{item.title}</a>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined
                key="setting"
                onClick={() => {
                  setTimeout(() => {
                    showDrawer();
                    renderPieView();
                  }, 0);
                }}
              />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={username}
              description={
                <div>
                  <b style={{ marginRight: '20px' }}>
                    {region ? region : '全球'}
                  </b>
                  {roleName}
                </div>
              }
            />
          </Card>
        </Col>
      </Row>
      <div
        ref={barRef}
        style={{ height: '400px', marginTop: '20px', width: '100%' }}
      ></div>
      <Drawer
        title="个人新闻分类"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div
          ref={pieRef}
          style={{ height: '100%', marginTop: '20px', width: '400px'}}
        ></div>
      </Drawer>
    </div>
  );
}
