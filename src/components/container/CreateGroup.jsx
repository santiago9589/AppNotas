import React from 'react'
import { useGroup } from '../../hooks/group'
import { useList } from '../../hooks/listofPeople'

export const CreateGroup = () => {

    const {name,members,handleChange} = useGroup()
    const {names,handleChangeNames} = useList(members)

    const handleSubmit = (e) => {
        e.preventDefault()
        let finalResult = {name,members,names}
        console.log(finalResult)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>name</label>
            <input
                name='name'
                placeholder='name'
                onChange={handleChange}
                value={name}
            />
            <label htmlFor='members'>number of members</label>
            <input
                name='members'
                placeholder='members'
                onChange={handleChange}
                value={members}
            />
            {/* SE MANEJA CON EL ESTADO GLOBAL {errors.email && touched.email && (<div>{errors.email}</div>)} */}
            {
                names.map((element, index) => {
                    return (
                        <div key={index + 1}>
                            <label htmlFor={index + 1}>number of members</label>
                            <input
                                name={index + 1}
                                placeholder={`member number ${index + 1}`}
                                onChange={handleChangeNames}
                                value={element}
                            />
                        </div>
                    )
                })
            }
            <button type='submit'>create</button>
        </form>
    )
}


export default CreateGroup;