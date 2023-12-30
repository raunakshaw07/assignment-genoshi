import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChartColumn, faChartPie, faScroll } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const [bg, setBg] = useState({ home: '', graphs: '', papers: '' })
  const [disp, setDisp] = useState(false)

  useEffect(() => {
    console.log(location)
    if (location.pathname === '/dashboard') setBg({ home: 'bg-teal-600 text-white', graphs: '', papers: '' })
    if (location.pathname === '/graphs') setBg({ home: '', graphs: 'bg-teal-600 text-white', papers: '' })
    if (location.pathname === '/papers') setBg({ home: '', graphs: '', papers: 'bg-teal-600 text-white' })
    
    if (location.pathname === '/') setDisp(false)
    else setDisp(true)
  }, [location])

  return (
    <div className={`${isSidebarOpen && !disp ? 'hidden' : 'block'} ${disp ? 'lg:block' : 'lg:hidden'} lg:bg-teal-700/[0.4] bg-teal-700 h-screen w-80 fixed left-0 top-0 overflow-y-auto ease-in-out duration-300`}>
      <button
        onClick={toggleSidebar}
        className="lg:hidden absolute top-4 right-4 p-2 text-white"
      >
        <FontAwesomeIcon icon={faXmark} size='2xl' />
      </button>

      <div className="p-4 flex flex-col justify-center items-center w-full">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="rounded-full h-48 w-48 my-8 shadow-xl" />

        <p className='font-bold text-4xl'>John Doe</p>
        <p className='py-1 font-semibold text-lg'>johndoe@example.com</p>
      </div>


      <nav className='my-8'>
        <ul className="py-2 w-full flex flex-col justify-center">
          <li className={`p-4 hover:bg-teal-700 cursor-pointer text-xl w-full ${bg.home}`} onClick={() => navigate('/dashboard', { replace: true })}>
            <button><FontAwesomeIcon icon={faChartColumn} className='mr-4' /> Home</button>
          </li>
          <li className={`p-4 hover:bg-teal-700 cursor-pointer text-xl w-full ${bg.graphs}`} onClick={() => navigate('/graphs', { replace: true })}>
            <button><FontAwesomeIcon icon={faChartPie} className='mr-4' /> Graphs</button>
          </li>
          <li className={`p-4 hover:bg-teal-700 cursor-pointer text-xl w-full ${bg.papers}`} onClick={() => navigate('/papers', { replace: true })}>
            <button><FontAwesomeIcon icon={faScroll} className='mr-4' /> Papers</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar