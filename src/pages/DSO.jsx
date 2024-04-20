import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebase'; // Make sure your Firebase config is correct and imported

function DSO() {
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

    const [formOneAnswers, setFormOneAnswers] = useState({});
    const [formTwoAnswers, setFormTwoAnswers] = useState({});
    const [activeForm, setActiveForm] = useState(null);

    const db = getFirestore(app); // Get Firestore instance

    const handleInputChange = (answers, setAnswers, index, value) => {
        setAnswers({ ...answers, [index]: value });
    };

    const handleSubmit = async (event, answers, formName) => {
        event.preventDefault();

        const collectionName = formName === 'DSO' ? 'DSOFormData' : 'DentalClinicsFormData';

        try {
            await addDoc(collection(db, collectionName), {
                ...answers,
                submittedAt: new Date() // Include a timestamp if needed
            });
            alert(`Thank you for completing ${formName}!`);
            if (formName === 'DSO') {
                setFormOneAnswers({}); // Reset form one answers after submission
            } else {
                setFormTwoAnswers({}); // Reset form two answers after submission
            }
        } catch (error) {
            console.error("Error adding document: ", error);
            alert('Failed to submit form. Please try again.');
        }
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
