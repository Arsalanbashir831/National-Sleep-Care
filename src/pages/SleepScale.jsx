import React, { useState } from 'react';

function SleepScale() {
    const questionsSleepScale = [
        "Rate your sleep quality from 0 (poor) to 4 (excellent).",
        "How often do you feel rested upon waking? Rate from 0 (never) to 4 (always).",
        "Rate your ability to fall asleep within 30 mins: 0 (never) to 4 (always).",
        "How often do you sleep through the night without waking up? Rate 0 (never) to 4 (always)."
    ];

    const [sleepScaleAnswers, setSleepScaleAnswers] = useState({});
    const [submissionCount, setSubmissionCount] = useState(0);

    const handleInputChange = (answers, setAnswers, index, value) => {
        if (value >= 0 && value <= 4 && value !== "") {
            setAnswers({ ...answers, [index]: parseInt(value) });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.keys(sleepScaleAnswers).length === questionsSleepScale.length &&
            Object.values(sleepScaleAnswers).every(value => value !== undefined)) {
            setSubmissionCount(prevCount => prevCount + 1);
            alert(`Thank you for completing the Sleep Scale! Total submissions: ${submissionCount + 1}`);
            console.log('Sleep Scale Answers:', sleepScaleAnswers);
            let sum = 0
            Object.values(sleepScaleAnswers).forEach((answers, index)=>{
                sum += answers;
            })
            console.log("Sleep Answers = ", sum);
        } else {
            alert('Please answer all questions with a number from 0 to 4.');
        }
    };

    return (
        <div className="flex flex-wrap justify-center items-start gap-10 mt-20 mx-20 p-5 mt-40">
            <form onSubmit={handleSubmit}
                  className="flex-1 min-w-[300px] max-w-md space-y-6 bg-white p-6 shadow-lg rounded-lg transition duration-300 ease-in-out">
                <h1 className="text-2xl font-bold text-center text-gray-800">Sleep Scale</h1>
                {questionsSleepScale.map((question, index) => (
                    <div key={index} className="flex flex-col">
                        <label className="font-semibold text-gray-700">{question}</label>
                        <input
                            type="number"
                            min="0"
                            max="4"
                            value={sleepScaleAnswers[index] || ''}
                            onChange={(e) => handleInputChange(sleepScaleAnswers, setSleepScaleAnswers, index, e.target.value)}
                            required
                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                        />
                    </div>
                ))}
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SleepScale;
