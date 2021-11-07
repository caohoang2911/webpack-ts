import { DatePicker, Space } from 'antd';
import { Switch } from 'antd';
import { Button, Radio } from 'antd';
const { RangePicker } = DatePicker;
const Example = () => {
    return (
        <>
            <Space direction="vertical" size={12}>
                <Button type="primary" >Primary</Button>
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
            </Space><Switch defaultChecked />
        </>
    )
}

export default Example
