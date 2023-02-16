import Publish from '@/components/publish-manage/Publish';
import usePublish from '@/components/publish-manage/usePublish';
import { Button } from 'antd';

export default function sunset() {
  const { dataSource, handleDelet } = usePublish(3);
  return (
    <div>
      <Publish
        dataSource={dataSource}
        button={(id: number) => (
          <Button danger onClick={() => handleDelet(id)}>
            删除
          </Button>
        )}
      />
    </div>
  );
}
