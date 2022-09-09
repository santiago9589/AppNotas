import React, { useContext } from 'react'
import { ContextApp } from '../../context/context';
import { useGroup } from '../../hooks/group';
import { useList } from '../../hooks/listofPeople';
import { useNavigate } from "react-router-dom";

const EditGroup = () => {

    const { data, addDataAll } = useContext(ContextApp)
    const navigate = useNavigate()

    const { name, members, handleChange, handleMembers } = useGroup(data[0].name, data[0].members)
    const { names, handleChangeNames } = useList(members)

    const handleSubmit = (e) => {
        e.preventDefault()
        let finalResult = { name, members, names }
        addDataAll(finalResult)
    }
    return (
        <form onSubmit={handleSubmit} className='form-our-activity'>
            <label htmlFor='name' className='form-component-label' >Name</label>
            <input
                name='name'
                placeholder='name'
                onChange={handleChange}
                value={name}
                className="form-component-input"
                type="text"
                required
            />
            <label className='form-component-label'>Number of Members</label>
            <div className='flex justify-start items-center'>
                <div className='text-xl text-black mr-2'>{members}</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" onClick={handleMembers}>
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                </svg>
            </div>
            {
                names.map((element, index) => {
                    return (
                        <div key={index + 1}>
                            <label htmlFor={index + 1} className='form-component-label'>Member {index + 1}</label>
                            <input
                                name={index + 1}
                                placeholder={`Member ${index + 1}`}
                                onChange={handleChangeNames}
                                value={element}
                                className="form-component-input"
                                type="text"
                                required
                            />
                        </div>
                    )
                })
            }

            <div className='btn-container'>
                <div className=' btn-container-succes'>
                    <button type='submit' disabled={!(members < 5)}>Edit
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
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
        </form>
    )
}


export default EditGroup;