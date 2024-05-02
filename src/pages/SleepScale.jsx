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
    <div className="p-5 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">How Sleepy Are You?</h1>
      <p className="mb-8 text-gray-700 text-center">
        How likely are you to doze off or fall asleep in the following situations? Rate your chances of dozing off, not just feeling tired.
      </p>
      <p className="mb-8 text-gray-700 text-center">
        Use the scaling system below to rate each situation:
      </p>
      <div className="grid grid-cols-4 gap-4 text-center mb-4">
        <div className="col-span-1">No chance</div>
        <div className="col-span-1">Slight chance</div>
        <div className="col-span-1">Moderate chance</div>
        <div className="col-span-1">High chance</div>
        <div className="col-span-1">0</div>
        <div className="col-span-1">1</div>
        <div className="col-span-1">2</div>
        <div className="col-span-1">3</div>
      </div>
      <Form form={form} onFinish={onFinish} layout="vertical">
        {situations.map(situation => (
          <Form.Item key={situation.key} label={situation.text} name={situation.key} rules={[{ required: true, message: 'Please input your score!' }]}>
            <InputNumber min={0} max={3} className="w-full" />
          </Form.Item>
        ))}
        <Form.Item className="text-center">
          <Button type="primary" htmlType="submit" className="w-40">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Modal
        title="Your Total Score"
        visible={isModalVisible}
        onOk={closeModal}
        onCancel={closeModal}
        icon={<ExclamationCircleOutlined />}
        className="text-center"
      >
        <p className="text-2xl font-bold">Your total score is:</p>
        <p className="text-3xl font-bold text-blue-600">{totalScore}</p>
        <p className="text-lg text-gray-800 mt-4">{getSleepStatus(totalScore)}</p>
      </Modal>
    </div>
  );
}
