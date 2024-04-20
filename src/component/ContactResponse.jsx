import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const ContactResponse = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const contactCollectionRef = collection(db, "contacts");
      const data = await getDocs(contactCollectionRef);
      setContacts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchContacts();
  }, []);

  return (
    <div className="container mx-auto mt-5 px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl font-semibold text-gray-900 mb-4">Contact Responses</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactResponse;
