import { DatePicker, Space } from 'antd';
import { Button, Radio } from 'antd';
const { RangePicker } = DatePicker;
import { useRouteMatch } from 'react-router-dom';
import './style.scoped.scss';
const Example = () => {
  const match = useRouteMatch();
  return (
    <>
      <Space direction="vertical" size={12}>
        <Button type="primary">Primary</Button>
        <Radio.Group>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <RangePicker />
        <RangePicker showTime />
        <RangePicker picker="week" />
        <RangePicker picker="month" />
        <RangePicker picker="year" />
      </Space>
    </>
  );
};

export default Example;
