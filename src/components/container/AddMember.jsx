import React, { useContext, useState } from 'react'
import { ContextApp } from "../../context/context"
import { useNavigate } from "react-router-dom";

const AddMember = () => {

  const [name, setName] = useState([])
  const { data, addData } = useContext(ContextApp)

  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    let { value } = e.target
    setName(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    addData(name)
  }


  console.log(name)

  return (
    <form onSubmit={handleSubmit} className="form-our">
      <label htmlFor='name' className='form-component-label'>New Member</label>
      <input
        name='name'
        placeholder='name'
        onChange={handleChange}
        value={name}
        className="form-component-input mt-4"
        type="text"
        required
      />
      <div className='btn-container'>

        <div className=' btn-container-succes'>
          <button type='submit' disabled={!name.length}>Add
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline">
            <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
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
    </form >
  )
}

export default AddMember