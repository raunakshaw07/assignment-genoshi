import React, {useEffect, useState} from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Graphs = ({ setPageTitle }) => {
    useEffect(() => {
        setPageTitle("Graphs")
    }, [])

    const data = [
        { name: 'Jan', value: 20 },
        { name: 'Feb', value: 45 },
        { name: 'Mar', value: 28 },
        { name: 'Apr', value: 55 },
        { name: 'May', value: 40 },
        { name: 'Jun', value: 75 },
      ];


      const [graphs, setGraphs] = useState([
        {
            id: 1,
            title: 'Graph Title 1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales tristique consectetur.',
            createdOn: 'January 15, 2023',
            type: 'line',
            data: data
        },
        {
            id: 2,
            title: 'Graph Title 2',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales tristique consectetur.',
            createdOn: 'January 15, 2023',
            type: 'line',
            data: data
        },
        {
            id: 3,
            title: 'Graph Title 3',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales tristique consectetur.',
            createdOn: 'January 15, 2023',
            type: 'bar',
            data: data
        },
        {
            id: 4,
            title: 'Graph Title 4',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales tristique consectetur.',
            createdOn: 'January 15, 2023',
            type: 'bar',
            data: data
        },
        {
            id: 5,
            title: 'Graph Title 5',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales tristique consectetur.',
            createdOn: 'January 15, 2023',
            type: 'bar',
            data: data
        },
        {
            id: 6,
            title: 'Graph Title 6',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales tristique consectetur.',
            createdOn: 'January 15, 2023',
            type: 'line',
            data: data
        },
      ])

  return (
    <div className='mt-16 w-full flex flex-col'>
        <button className="py-4 px-8 bg-teal-600 text-white rounded-full mx-auto mb-16">Create New Graph</button>
        <hr />

        <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
            {graphs.map(graph => (
                <div className="bg-white rounded-md shadow-md p-6" key={graph.id}>
                    <h2 className="text-xl font-bold mb-4">{graph.title}</h2>
                    <div className="h-32">
                        <ResponsiveContainer>
                            {graph.type === 'line' ? (
                                <LineChart data={data}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="value" stroke="#3182CE" />
                                </LineChart>
                            ) : (
                                <BarChart data={data}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#3182CE" />
                                </BarChart>
                            )}
                        </ResponsiveContainer>
                    </div>
                    <p className="text-gray-700 mt-4">
                        {graph.desc}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">Created on: {graph.createdOn}</p>
                    <button className='p-2 bg-indigo-600 rounded-lg text-white mt-4'>Expand</button>
                </div>
            ))}

        </div>

    </div>
  )
}

export default Graphs