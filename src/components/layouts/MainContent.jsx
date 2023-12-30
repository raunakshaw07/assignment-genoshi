import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MainContent = ({ children, pageTitle, toggleSidebar, component }) => {
  return(
    <div className={`${component ? 'lg:ml-80' : 'lg:ml-0'} ml-0 py-8 px-16 w-full min-h-screen transition-all duration-300`}>

      {
        component ? (
          <div className='flex'>
            <button
              className="block px-3 py-2 lg:hidden mr-8"
              onClick={toggleSidebar}
            >
              <FontAwesomeIcon icon={faBars} size='2xl' />
            </button>

            <p className='text-6xl'>{pageTitle}</p>
            <div className="border-t border-gray-700 mt-8" />
          </div>
        ) : null
      }

      {children}
    </div>
  )
};

export default MainContent;