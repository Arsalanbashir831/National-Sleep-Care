import React, { useState } from 'react';

function DSO() {
    // Arrays to store questions for each form
    const questionsFormOne = [
        "How many dental doctors are you working with?",
        "How many dental clinics do you work with?",
        "How many new dental patients per month on average per clinic?",
        "What is your email address?",
        "What percentage of dental offices provide services for oral appliances and/or DME?"
    ];

    const questionsFormTwo = [

        'How many dental patients do you see per week?',
        'How many dental clinics do you have?',
        'Do you provide sleep care and services? If yes, which type?',
        'Have you seen patients with sleep issues?',
        'What kind of Oral Appliance(s) do you use, If Any?',
        'Do you use medical insurance for dental sleep care?',
        'Do you provide services for oral appliances and/or DME?',
        'What type of Dental Implants do you perform, if any?'

    ];

    // State to store answers for both forms. Keys will match question indices.
    const [formOneAnswers, setFormOneAnswers] = useState({});
    const [formTwoAnswers, setFormTwoAnswers] = useState({});

    // State to track the active form
    const [activeForm, setActiveForm] = useState(null);

    // Handler for input changes
    const handleInputChange = (answers, setAnswers, index, value) => {
        setAnswers({ ...answers, [index]: value });
    };

    // Handler for form submission
    const handleSubmit = (event, answers, formName) => {
        event.preventDefault();
        console.log(`${formName} Answers:`, answers);
        alert(`Thank you for completing ${formName}!`);
    };

    return (
        <div className="flex flex-wrap justify-center items-start gap-10 mt-20 mx-20 p-5 mt-40">
            {[{ questions: questionsFormOne, answers: formOneAnswers, setAnswers: setFormOneAnswers, formName: 'DSO' },
            { questions: questionsFormTwo, answers: formTwoAnswers, setAnswers: setFormTwoAnswers, formName: 'Dental Clinics' }]
                .map((form, i) => (
                    <form key={i}
                        onSubmit={(e) => handleSubmit(e, form.answers, form.formName)}
                        className={`flex-1 min-w-[300px] max-w-md space-y-6 bg-white p-6 shadow-lg rounded-lg transition duration-300 ease-in-out
                            ${activeForm === form.formName ? 'ring-4 ring-blue-500 scale-105' : 'hover:shadow-xl'}
                            `}
                        onFocus={() => setActiveForm(form.formName)}
                        onBlur={() => setActiveForm(null)}
                    >
                        <h1 className="text-2xl font-bold text-center text-gray-800">{form.formName}</h1>
                        {form.questions.map((question, index) => (
                            <div key={index} className="flex flex-col">
                                <label className="font-semibold text-gray-700">{question}</label>
                                <input
                                    type="text"
                                    value={form.answers[index] || ''}
                                    onChange={(e) => handleInputChange(form.answers, form.setAnswers, index, e.target.value)}
                                    required
                                    className="mt-2 p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                                />
                            </div>
                        ))}
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                            Submit
                        </button>
                    </form>
                ))}
        </div>
    );
}

export default DSO;
