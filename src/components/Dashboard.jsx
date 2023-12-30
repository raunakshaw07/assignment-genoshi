import React, { useState, useEffect } from 'react'
import Card from './layouts/Cards'

const Dashboard = ({ setPageTitle }) => {

  const [recents, setRecents] = useState([
    {
      id: 1,
      name: 'Graph 1',
      type: 'Graph', 
      date: 'Sept 1, 2023'
    },
    {
      id: 2,
      name: 'Graph 2',
      type: 'Graph', 
      date: 'Sept 15, 2023'
    },
    {
      id: 3,
      name: 'Collection 1',
      type: 'Collection', 
      date: 'Oct 4, 2023'
    },
    {
      id: 4,
      name: 'Query 1',
      type: 'Query', 
      date: 'Dec 10, 2023'
    }
  ]);

  useEffect(() => {
    setPageTitle('Dashboard');
  }, [setPageTitle])


  return (
    <div>
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
        <Card extras='bg-green-700/[0.3] px-6 py-8 w-full lg:mr-auto'>
          <div className="font-bold text-xl mb-4">Current Subscription</div>
          <p className='font-bold text-4xl text-right'>Premium</p>
        </Card>

        <Card extras='bg-amber-500/[0.5] px-6 py-8 w-full lg:ml-auto'>
          <div className="font-bold text-xl mb-4">Days remaining for renewal</div>
          <p className='font-bold text-4xl text-right'>7 Days</p>

          <div className="pt-4 border-t border-gray-700 mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded bg-indigo-700">Renew Now</button>
          </div>
        </Card>
      </div>


      {/* User activities */}
      <div className="user-activities">
        <p className='text-4xl'>User Activities</p>

        <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          
          <Card extras='bg-indigo-600/[0.5] px-6 py-8 flex justify-between'>
            <div className="font-bold text-xl">Graphs Created</div>
            <p className='font-bold text-4xl text-right'>7</p>
          </Card>

          <Card extras='bg-amber-500/[0.5] px-6 py-8 flex justify-between'>
            <div className="font-bold text-xl">Graphs Shared</div>
            <p className='font-bold text-4xl text-right'>2</p>
          </Card>
          
          <Card extras='bg-rose-400/[0.7] px-6 py-8 flex justify-between'>
            <div className="font-bold text-xl">Papers Collected</div>
            <p className='font-bold text-4xl text-right'>12</p>
          </Card>

        </div>
      </div>


      {/* List of recent activity feeds and saved graphs */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4' style={{ width: '100%' }}>
        <div className="recent my-8 w-full">
          <p className='text-4xl'>Recent Activities</p>
          <table className="min-w-full bg-white border border-gray-300 mt-8">
            <thead className='bg-slate-300'>
              <tr>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Type</th>
                <th className="py-2 px-4 border-b text-left">Last Opened</th>
              </tr>
            </thead>
            <tbody>
              {recents.map(recent => (
                <tr key={recent.id}>
                  <td className="py-2 px-4 border-b">{recent.name}</td>
                  <td className="py-2 px-4 border-b">{recent.type}</td>
                  <td className="py-2 px-4 border-b">{recent.date}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>


        <div className="saved-graphs  my-8 w-full">
          <p className='text-4xl'>Saved Graphs</p>
          <table className="min-w-full bg-white border border-gray-300 mt-8">
            <thead className='bg-slate-300'>
              <tr>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Type</th>
                <th className="py-2 px-4 border-b text-left">Last Opened</th>
              </tr>
            </thead>
            <tbody>
              {recents.map(recent => (
                <tr key={recent.id}>
                  <td className="py-2 px-4 border-b">{recent.name}</td>
                  <td className="py-2 px-4 border-b">{recent.type}</td>
                  <td className="py-2 px-4 border-b">{recent.date}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
        
      </div>

    </div>
  )
}

export default Dashboard
