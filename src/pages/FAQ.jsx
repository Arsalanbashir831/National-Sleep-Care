import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

// Single accordion item component
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: 'auto', marginTop: '1rem' },
    collapsed: { opacity: 0, height: 0, marginTop: '0rem' },
  };

  return (
    <div className="border-b-2 ">
      <button
        className="flex justify-between items-center w-full py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        {isOpen ? (
          <MinusCircleOutlined className="text-xl" />
        ) : (
          <PlusCircleOutlined className="text-xl" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={variants}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            transition={{ duration: 0.5 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main FAQ section component
const FAQSection = () => {
  const faqData = [
    {
      question: "What Services does National Sleep Care Offer?",
      answer: "National Sleep Care offers oral devices, implants, Durable Medical Equipment (DME), home sleep tests, and the necessary transportation of any and all inventory",
    },
    {
      question: "What benefits does this bring to my patients/practice?",
      answer: "Patients will now be able to receive treatment for their cases of sleep apnea with their existing doctor Patients are eligible to receive added benefits through our medical billing system.",
    },
    {
      question: "Why would I not just refer my patients out to a sleep lab?",
      answer: "At-home sleep tests are more than sufficient, and much more convenient to patients as the wait for sleep labs can be up to a year",
    },
    
    {
      question: "Do you provide training?",
      answer: "-Yes. Our Goal is to keep you in compliance with all guidelines or statutes that may impact you and your practice. Our comprehensive training programs are custom designed with that goal in mind. As you add or change staff, our training supports your transitions and fills any gaps that may come up",
    },
    {
      question: "How do the patients get the at-home sleep tests?",
      answer: "We can either ship the tests directly to the patient’s address or the dental office where they can pick it up.",
    },
    {
      question: "How do the Dental Clinics and National Sleep Care keep track of patients?",
      answer: "Using our Electronic Medical Records System used for inter-office communication with templated notes for procedures and visits",
    },
    {
      question: "Does your company cover medical insurance?",
      answer: "We are in direct communication with the insurance companies and keep the status of the insurance within our database so you can always be up to date with the patient insurance status. We have contracts with national health insurance companies.",
    },
    // ... Add more FAQs as needed
  ];

  return (
    <div className="bg-white  px-6 py-7">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
