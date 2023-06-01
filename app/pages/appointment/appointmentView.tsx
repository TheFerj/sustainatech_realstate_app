
'use client'

import { useState } from 'react';
import { formatDate } from '../adminAppointments/dateToString';


interface ViewAppointmentFormProps {
  id: string;
  issue: string;
  description: string;
  prefferedDate: string;
  ActualDate: string;
  location: string;
  contact:string;
  status:string;


}

export const ViewAppointment: React.FC<ViewAppointmentFormProps> = ({
  id,
  issue,
  description,
  prefferedDate,
  ActualDate,
  location,
  contact,
  status,
}) => {
  const [isClicked, setIsClicked] = useState(false);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const formattedDate = formatDate(prefferedDate)
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
                {issue}
              </th>
              <td className="px-6 py-4" style={{ width: "200px", height: "100px" }}>{description}</td>
              <td className="px-6 py-4"style={{ width: "200px", height: "100px" }}>{formattedDate}</td>
              <td className="px-6 py-4"style={{ width: "200px", height: "100px" }}>{ActualDate}</td>
              <td className="px-6 py-4"style={{ width: "200px", height: "100px" }}>{location}</td>
              <td className="px-6 py-4"style={{ width: "200px", height: "100px" }}>{contact}</td>
              <td className="px-6 py-4"style={{ width: "200px", height: "100px" }}>{status}</td>
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
          <div className="relative bg-white rounded-lg shadow p-6" >
            <h3 className="text-xl font-semibold mb-4">Details</h3>
            <h3 className="text-l font-semibold mb-4">Issue: {issue}</h3>
            <h3 className="text-l font-semibold mb-4">Description: {description}</h3>
            <h3 className="text-l font-semibold mb-4">Preffered Date & Time: {formattedDate}</h3>
            <h3 className="text-l font-semibold mb-4">Actual Date & Time: {ActualDate}</h3>
            <h3 className="text-l font-semibold mb-4">Status: {status}</h3>
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
        </div>)}
    </>
  );
};
