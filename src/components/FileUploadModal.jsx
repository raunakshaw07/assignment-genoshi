import React, {useState, useRef} from 'react'
import Modal from './layouts/Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const FileUploadModal = ({ isOpen, onClose }) => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [authors, setAuthors] = useState(null);

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
    };
  
    const handleUpload = () => {
      if (title.trim().length !== 0 || desc.trim().length !== 0 || authors.trim().length !== 0 || selectedFile) {
        console.log(`
        Uploading File Details:
            Title: ${title}
            Description: ${desc}
            Authors: ${authors}
            File: ${selectedFile.name}
        `);
      } else {
        console.error('No file selected for upload.');
      }
    };
  
    const handleDelete = (e) => {
      e.preventDefault()
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Upload Files">
        <form style={{ width: '30rem' }}>
            <div className='my-6'>
                <label htmlFor="Title">Title</label><br />
                <input type="text" className='border w-full p-2' onChange={e => setTitle(e.target.value)} />
            </div>

            <div className='my-6'>
                <label htmlFor="Description">Description</label><br />
                <textarea cols="30" rows="2" className='border w-full p-2' onChange={e => setDesc(e.target.value)} />
            </div>

            <div className='my-6'>
                <label htmlFor="Authors">Authors</label><br />
                <input type="text" className='border w-full p-2' onChange={e => setAuthors(e.target.value)} />
            </div>

            <div className='my-6'>
                <label htmlFor="Select File">Attachment</label>
                {selectedFile ? (
                    <div className="my-2 p-4 flex justify-between border rounded">
                        <p className="text-gray-700 w-5/6">{selectedFile.name}</p>
                        <button onClick={handleDelete} className="text-red-600 w-1/6">
                            <FontAwesomeIcon icon={faTrash} size='lg' />
                        </button>
                    </div>
                ) : (
                    <div className="relative">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                        />
                        <button
                            onClick={() => fileInputRef.current.click()}
                            className="border my-2 p-4 rounded focus:outline-none focus:shadow-outline cursor-pointer w-full"
                        >
                            Select a file
                        </button>
                    </div>
                )}

            </div>

            <button
                onClick={handleUpload}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Upload
            </button>
        </form>
    </Modal>
  )
}

export default FileUploadModal