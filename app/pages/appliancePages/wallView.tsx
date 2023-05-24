
'use client'

import { useState } from 'react';


interface WallViewProps {
  id: string;
  type: string;
  details:string;
}

export const WallView: React.FC<WallViewProps> = ({
  id,
  type,
  details,

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
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>


            </tr>
          </thead>
          <tbody onClick={toggleModal} className={isClicked ? "cursor-pointer bg-gray-200" : "cursor-pointer"}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {type}
              </th>
              <td className="px-6 py-4">{details}</td>
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
            <h3 className="text-xl font-semibold mb-4">Type{type}</h3>
            <h3 className="text-l font-semibold mb-4">Details: {details}</h3>
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
