import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash, faFileArrowDown, faUpload } from '@fortawesome/free-solid-svg-icons';

import FileUploadModal from './FileUploadModal';

const Papers = ({ setPageTitle }) => {
    useEffect(() => {
        setPageTitle("Papers")
    }, [setPageTitle])
    
    const [papers, setPapers] = useState([
        {
            id: 1,
            title: 'Research Paper 1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsam voluptate quaerat ad velit quis perferendis quibusdam nulla consequuntur asperiores.',
            authors: 'Author 1, Author 2, Author 3',
            date: 'Oct 4, 2023'
        },
        {
            id: 2,
            title: 'Research Paper 2',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsam voluptate quaerat ad velit quis perferendis quibusdam nulla consequuntur asperiores.',
            authors: 'Author 1, Author 2',
            date: 'Oct 4, 2023'
        },
        {
            id: 3,
            title: 'Research Paper 3',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsam voluptate quaerat ad velit quis perferendis quibusdam nulla consequuntur asperiores.',
            authors: 'Author 1, Author 2]',
            date: 'Oct 4, 2023'
        },
        {
            id: 4,
            title: 'Research Paper 4',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsam voluptate quaerat ad velit quis perferendis quibusdam nulla consequuntur asperiores.',
            authors: 'Author 1, Author 2, Author 3',
            date: 'Oct 4, 2023'
        },
        {
            id: 5,
            title: 'Research Paper 5',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsam voluptate quaerat ad velit quis perferendis quibusdam nulla consequuntur asperiores.',
            authors: 'Author 1, Author 2, Author 3',
            date: 'Oct 4, 2023'
        },
        {
            id: 6,
            title: 'Research Paper 6',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsam voluptate quaerat ad velit quis perferendis quibusdam nulla consequuntur asperiores.',
            authors: 'Author 1',
            date: 'Oct 4, 2023'
        },
        {
            id: 7,
            title: 'Research Paper 7',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsam voluptate quaerat ad velit quis perferendis quibusdam nulla consequuntur asperiores.',
            authors: 'Author 1, Author 2, Author 3',
            date: 'Oct 4, 2023'
        },
        {
            id: 8,
            title: 'Research Paper 8',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsam voluptate quaerat ad velit quis perferendis quibusdam nulla consequuntur asperiores.',
            authors: 'Author 1, Author 2',
            date: 'Oct 4, 2023'
        },
    ])

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const truncate = (str) => {
        if (str.length > 30 && str.length > 0) {
            let new_str = str + "";
            new_str = str.substr(0, 80);
            new_str = str.substr(0, new_str.lastIndexOf(" "));
            new_str = new_str.length > 0 ? new_str : str.substr(0, 80);
            return new_str + "...";
        }
        return str;
    }

  return (
    <div className="my-16 w-full">
        <button className='bg-indigo-600 hover:bg-indigo-800 shadow-xl rounded p-4 text-white font-semibold items-right' onClick={openModal}><FontAwesomeIcon icon={faUpload} size='lg' className='mr-4' /> Upload New Paper</button>
        <table className="min-w-full bg-white border border-gray-300 mt-8">
            <thead className='bg-slate-300'>
                <tr>
                <th className="p-4 border-b text-left">Title</th>
                <th className="p-4 border-b text-left">Description</th>
                <th className="p-4 border-b text-left">Authors</th>
                <th className="p-4 border-b text-left">Uploaded On</th>
                <th className="p-4 border-b text-left flex justify-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {papers.map(paper => (
                <tr key={paper.id}>
                    <td className="p-4 border-b">{paper.title}</td>
                    <td className="p-4 border-b">{truncate(paper.desc)}</td>
                    <td className="p-4 border-b">{paper.authors}</td>
                    <td className="p-4 border-b">{paper.date}</td>
                    <td className="p-4 border-b w-48 flex gap-8 justify-center">
                        <FontAwesomeIcon icon={faFileArrowDown} size='lg' />
                        <FontAwesomeIcon icon={faHeart} size='lg' />
                        <FontAwesomeIcon icon={faTrash} size='lg' />
                    </td>
                </tr>
                ))}

            </tbody>
        </table>

        <FileUploadModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default Papers