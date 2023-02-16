import { useEffect, useState } from 'react';
import axios from 'axios';
import { notification } from 'antd';

function usePublish(type: number) {
  const [dataSource, setdataSource]: any = useState([]);
  const { username } = JSON.parse(localStorage.getItem('token') || '');
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/news?${username}&publishState=${type}&_expand=category`,
      )
      .then((res) => {
        setdataSource(res.data);
      });
  }, [username]);
  const handlePublish = (id: number) => {
    setdataSource(dataSource.filter((item: any) => item.id !== id));
    axios
      .patch(`http://localhost:5000/news/${id}`, {
        publishState: 2,
        publishTime: Date.now(),
      })
      .then((res) => {
        notification.info({
          message: '发布成功',
          description: `您可以在【发布管理/已发布】中查看您的新闻`,
          placement: 'bottomRight',
        });
      });
  };
  const handleSunset = (id: number) => {
    setdataSource(dataSource.filter((item: any) => item.id !== id));
    axios
      .patch(`http://localhost:5000/news/${id}`, {
        publishState: 3,
      })
      .then((res) => {
        notification.info({
          message: '下线成功',
          description: `您可以在【发布管理/已下线】中查看您的新闻`,
          placement: 'bottomRight',
        });
      });
  };
  const handleDelet = (id: number) => {
    setdataSource(dataSource.filter((item: any) => item.id !== id));
    axios.delete(`http://localhost:5000/news/${id}`).then((res) => {
      notification.info({
        message: '删除成功',
        description: `您已经删除了已下线的新闻`,
        placement: 'bottomRight',
      });
    });
  };
  return { dataSource, handlePublish, handleSunset, handleDelet};
}

export default usePublish;
