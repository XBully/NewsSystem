import Publish from '@/components/publish-manage/Publish';
import usePublish from '@/components/publish-manage/usePublish';
import { Button } from 'antd';

export default function unpublished() {
  const { dataSource, handlePublish } = usePublish(1);
  return (
    <div>
      <Publish
        dataSource={dataSource}
        button={(id: number) => (
          <Button type="primary" onClick={() => handlePublish(id)}>
            发布
          </Button>
        )}
      />
    </div>
  );
}
