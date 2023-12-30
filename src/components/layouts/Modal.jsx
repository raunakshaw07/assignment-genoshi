import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-50 bg-white p-8 rounded shadow-md min-w-96">
            <div className='min-h-16 flex justify-between items-center'>
                <h2 className="text-2xl font-bold">{title}</h2>
                <button onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} size='2xl' />
                </button>
            </div>

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;