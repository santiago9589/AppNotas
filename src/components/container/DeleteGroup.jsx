import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ContextApp } from '../../context/context';

export const DeleteGroup = () => {

    const { data, deleteDataAll } = useContext(ContextApp)

    const navigate = useNavigate()

    return (

        <div className='flex flex-col space-y-4 items-center justify-center p-4 w-3/5 bg-white m-4  rounded-lg shadow-lg shadow-gray-400 sm:w-1/2'>
            <div className='text-lg text-red-500 font-semibold italic'>Do you want to delete the group {data.name}?</div>

            <div className='flex flex-col w-1/2 sm:w-1/5'>
                <div className=' btn-container-delete '>
                    <button>Confirm
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className='btn-container-opcion'>
                    <button onClick={() => navigate(`/list-group`)}>Back
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>


    )

}

export default DeleteGroup;