
'use client'

import { useState } from 'react';


interface ViewAppointmentFormProps {
  id: string;
  email: string;
  role: string;
  name: string;
  business_name: string;
  location: string;
  business_type:string;
  contact_number:string;


}

export const TenantClassificationView: React.FC<ViewAppointmentFormProps> = ({
  id,
  email,
  role,
  name,
  business_name,
  business_type,
  location,
  contact_number,
}) => {
  const [isClicked, setIsClicked] = useState(false);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          
          <tbody onClick={toggleModal} className={isClicked ? "cursor-pointer bg-gray-200" : "cursor-pointer"}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {name}
              </th>
              <td className="px-6 py-4" style={{ width: "200px", height: "100px" }}>{email}</td>
              <td className="px-6 py-4" style={{ width: "200px", height: "100px" }}>{business_name}</td>
              <td className="px-6 py-4" style={{ width: "200px", height: "100px" }}>{business_type}</td>
              <td className="px-6 py-4" style={{ width: "200px", height: "100px" }}>{location}</td>
              <td className="px-6 py-4" style={{ width: "200px", height: "100px" }}>{contact_number}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div
          id="staticModal"
          data-modal-backdrop="static"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center"
        >
          <div className="relative bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Details</h3>
            <h3 className="text-l font-semibold mb-4">Name: {name}</h3>
            <h3 className="text-l font-semibold mb-4">Email: {email}</h3>
            <h3 className="text-l font-semibold mb-4">Business Name: {business_name}</h3>
            <h3 className="text-l font-semibold mb-4">Business Type: {business_type}</h3>
            <h3 className="text-l font-semibold mb-4">Location: {location}</h3>
            <h3 className="text-l font-semibold mb-4">contact_number: {contact_number} </h3>
            <div className="flex justify-end">
              <button
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>)}
    </>
  );
};
