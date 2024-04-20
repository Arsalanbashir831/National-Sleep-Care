import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Make sure the path is correctly pointing to your Firebase config
import * as XLSX from 'xlsx';

const columnNames = [
    "How many dental doctors are you working with?",
    "How many dental clinics do you work with?",
    "How many new dental patients per month on average per clinic?",
    "What is your email address?",
    "What percentage of dental offices provide services for oral appliances and/or DME?"
];

const DSOResponse = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchDSOData = async () => {
      const querySnapshot = await getDocs(collection(db, "DSOFormData"));
      const data = querySnapshot.docs.map(doc => {
        const indexedData = doc.data();
        let obj = { id: doc.id };
        columnNames.forEach((name, index) => {
          obj[name] = indexedData[index];
        });
        return obj;
      });
      setResponses(data);
    };

    fetchDSOData();
  }, []);

  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(responses);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "DSO Responses");
    XLSX.writeFile(wb, "DSOResponses.xlsx");
  };

  return (
    <div className="container mx-auto mt-5 px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl font-semibold text-gray-900 mb-4">DSO Responses</h1>
      <button 
        onClick={downloadExcel} 
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Excel
      </button>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columnNames.map((name, index) => (
                <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {responses.map((response) => (
              <tr key={response.id} className="hover:bg-gray-100">
                {columnNames.map((name) => (
                  <td key={name} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {response[name]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DSOResponse;
