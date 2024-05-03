import React, { useEffect, useState } from 'react';
import { Form, Button, Modal, Radio } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const SleepinessForm = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
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
    <div className="p-6 bg-white rounded-lg shadow-md w-[90%] mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">How Sleepy Are You?</h1>
      <p className="mb-8 text-gray-700 text-center">
        How likely are you to doze off or fall asleep in the following situations? Rate your chances of dozing off, not just feeling tired.
      </p>
      <Form form={form} onFinish={onFinish} layout="vertical">
        {situations.map(situation => (
          <Form.Item key={situation.key} label={situation.text} name={situation.key} rules={[{ required: true, message: 'Please select your response!' }]}>
            <Radio.Group className="flex justify-between">
              <Radio className="w-1/4 text-center" value={0}>No chance</Radio>
              <Radio className="w-1/4 text-center" value={1}>Slight chance</Radio>
              <Radio className="w-1/4 text-center" value={2}>Moderate chance</Radio>
              <Radio className="w-1/4 text-center" value={3}>High chance</Radio>
            </Radio.Group>
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
        <p className="text-xl font-bold mb-4">Your total score is:</p>
        <p className="text-3xl font-bold text-blue-600 mb-6">{totalScore}</p>
        <p className="text-lg text-gray-800">{getSleepStatus(totalScore)}</p>
      </Modal>
    </div>
  );
};

export default SleepinessForm;
