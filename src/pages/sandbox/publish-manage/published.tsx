import Publish from '@/components/publish-manage/Publish';
import usePublish from '@/components/publish-manage/usePublish';
import { Button } from 'antd';

export default function published() {
  const { dataSource, handleSunset } = usePublish(2);
  return (
    <div>
      <Publish
        dataSource={dataSource}
        button={(id: number) => (
          <Button danger onClick={() => handleSunset(id)}>
            下线
          </Button>
        )}
      />
    </div>
  );
}
