import { useState } from 'react';
import { Form, InputNumber, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export default function SleepinessForm() {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const situations = [
    { key: 'reading', text: 'Sitting and reading' },
    { key: 'tv', text: 'Watching TV' },
    { key: 'sitting_inactive', text: 'Sitting inactive in a public place (e.g., a theater or a meeting)' },
    { key: 'car_passenger', text: 'As a passenger in a car for an hour without a break' },
    { key: 'lying_down', text: 'Lying down to rest in the afternoon when circumstances permit' },
    { key: 'talking', text: 'Sitting and talking to someone' },
    { key: 'lunch', text: 'Sitting quietly after a lunch without alcohol' },
    { key: 'car_traffic', text: 'In a car, while stopped for a few minutes in traffic' }
  ];

  const onFinish = (values) => {
    const score = Object.values(values).reduce((acc, value) => acc + value, 0);
    setTotalScore(score);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const getSleepStatus = (score) => {
    if (score < 8) return "It is unlikely that you are abnormally sleepy.";
    if (score < 10) return "You have an average amount of daytime sleepiness.";
    if (score < 16) return "You may be excessively sleepy depending on the situation. You may want to consider seeking medical attention.";
    return "You are excessively sleepy and should consider seeking medical attention.";
  };

  return (
    <div className="p-5 py-40">
      <h1 className="text-2xl font-bold mb-4">How Sleepy Are You?</h1>
      <p className="mb-8">
        How likely are you to doze off or fall asleep in the following situations? You should rate your chances
        of dozing off, not just feeling tired. Even if you have not done some of these things recently try to
        determine how they would have affected you. For each situation, decide whether or not you would
        have:<br/>
        · No chance of dozing =0<br/>
        · Slight chance of dozing =1<br/>
        · Moderate chance of dozing =2<br/>
        · High chance of dozing =3
      </p>
      <Form form={form} onFinish={onFinish} layout="vertical">
        {situations.map(situation => (
          <Form.Item key={situation.key} label={situation.text} name={situation.key} rules={[{ required: true, message: 'Please input your score!' }]}>
            <InputNumber min={0} max={3} />
          </Form.Item>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Modal title="Your Total Score" visible={isModalVisible} onOk={closeModal} onCancel={closeModal} icon={<ExclamationCircleOutlined />}>
        <p>Your total score is: {totalScore}</p>
        <p>{getSleepStatus(totalScore)}</p>
      </Modal>
    </div>
  );
}
