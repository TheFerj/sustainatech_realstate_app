
'use client'

import { useState } from 'react';


interface EnergyTrackingViewProps {
  id: string;
  electricBill: string;
  energyUsage: string;
  billDate: string;
}

export const EnergyTrackingView: React.FC<EnergyTrackingViewProps> = ({
  id,
  electricBill,
  energyUsage,
  billDate,
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
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              Electric Bill
              </th>
              <th scope="col" className="px-6 py-3">
              Energy Usage
              </th>
              <th scope="col" className="px-6 py-3">
                Billing Period
              </th>

            </tr>
          </thead>
          <tbody onClick={toggleModal} className={isClicked ? "cursor-pointer bg-gray-200" : "cursor-pointer"}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              
              <td className="px-6 py-4">{electricBill}</td>
              <td className="px-6 py-4">{energyUsage}</td>
              <td className="px-6 py-4">{billDate}</td>

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
            <h3 className="text-l font-semibold mb-4">Date: {electricBill}</h3>
            <h3 className="text-l font-semibold mb-4">Title: {energyUsage}</h3>
            <h3 className="text-l font-semibold mb-4">Concern: {billDate}</h3>
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
        </div>)}
    </>
  );
};
