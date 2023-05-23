'use client'

import { useState } from "react";

import { PostAppliance } from "./applianceForm";
import { PostWall } from "./wallForm";

interface WallModalProps {
  id: string;
  email: string;
}

const WallModal = ({ id, email }: WallModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    <div>
         
    </div>
      <button
        data-modal-target="staticModal"
        data-modal-toggle="staticModal"
        className="block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        type="button"
        onClick={toggleModal}
      >
        Add Appliance
      </button>

      {isModalOpen && (
        <div
          id="staticModal"
          data-modal-backdrop="static"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center"
        >
          <div className="relative bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Wall Form</h3>
            <PostWall id={id} email={email} /> {/* Pass id and email as props */}
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

export default WallModal;
