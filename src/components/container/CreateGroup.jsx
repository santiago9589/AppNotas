import React from 'react'
import { useGroup } from '../../hooks/group'
import { useList } from '../../hooks/listofPeople'

export const CreateGroup = () => {

    const { name, members, handleChange, handleMembers } = useGroup()
    const { names, handleChangeNames } = useList(members)

    const handleSubmit = (e) => {
        e.preventDefault()
        let finalResult = { name, members, names }
        console.log(finalResult)
    }

    return (
        <form className="form-our" onSubmit={handleSubmit}>
            <div className='form-component'>
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
            </div>
            {
                names.map((element, index) => {
                    return (
                        <div key={index + 1} className='form-component flex flex-col'>
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

                <div className='btn-container-succes'>
                    <button type='submit' onClick={handleMembers} disabled={!(members < 5)}>Add
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline">
                        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                    </svg>
                </div>

                <div className='btn-container-info'>
                    <button type='submit' disabled={(name && members && names) ? false : true}>create
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                    </svg>
                </div>
            </div>
        </form>
    )
}


export default CreateGroup;