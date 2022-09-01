import React, { useContext, useState } from 'react'
import { ContextApp } from "../../context/context"

const AddMember = () => {

  const [name,setName] = useState([])
  const { data, addData } = useContext(ContextApp)

  const handleChange = (e) => {
    e.preventDefault()
    let { value } = e.target
    setName(value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  if(!name) return
  addData(name)
}


console.log(data)

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>new member</label>
      <input
        name='name'
        placeholder='name'
        onChange={handleChange}
        value={name}
      />
      <button type='submit'>create</button>
    </form>
  )
}

export default AddMember