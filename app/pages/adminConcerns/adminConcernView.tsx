"use client"

import { useState } from 'react';

interface AdminConcernProps {
  id: string;
  concern: string;
  title: string;
  type: string;
  urgency: string;
  createdAt: string;
}

export const AdminConcernView: React.FC<AdminConcernProps> = ({
  id,
  concern,
  title,
  createdAt,
  type,
  urgency,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <table>
        
        <tbody onClick={toggleModal} className={isClicked ? "cursor-pointer bg-gray-200" : "cursor-pointer"}>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="pl-5 w-1/4 font-medium text-gray-900 whitespace-nowrap dark:text-white" style={{ width: "200px", height: "100px" }}>
              {title} 
            </td>
            <td className="px-6 py-3" style={{ width: "200px", height: "100px" }}>{concern}</td>
            <td className="px-6 py-3" style={{ width: "200px", height: "100px" }}>{createdAt}</td>
            <td className="px-6 py-3"style={{ width: "200px", height: "100px" }}>{type}</td>
            <td className="px-6 py-3" style={{ width: "200px", height: "100px" }}>{urgency}</td>
          </tr>
        </tbody>
      </table>

      {isModalOpen && (
        <div
          id="staticModal"
          data-modal-backdrop="static"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center"
        >
          <div className="relative bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Details</h3>
            <h3 className="text-l font-semibold mb-4">Date: {createdAt}</h3>
            <h3 className="text-l font-semibold mb-4">Title: {title}</h3>
            <h3 className="text-l font-semibold mb-4">Concern: {concern}</h3>
            <h3 className="text-l font-semibold mb-4">Urgency: {urgency}</h3>
            <h3 className="text-l font-semibold mb-4">Type: {type}</h3>
            <h3 className="text-l font-semibold mb-4">Status: </h3>
            <h3 className="text-l font-semibold mb-4">Comment/Remarks: </h3>
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
        </div>
      )}
    </>
  );
};
