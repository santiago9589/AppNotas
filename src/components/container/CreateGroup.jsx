import React, { useEffect, useState } from 'react'

export const CreateGroup = () => {

    const [group, setGroup] = useState({
        name: "",
        members: "",
    })


    const [list, setList] = useState({})


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log([group,list])
    }

    const handleChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target
        setGroup({ ...group, [name]: value })
    }

    const handleChangeNames = (e) => {
        e.preventDefault()
        let { name, value } = e.target
        setList({ ...list, [name]: value })
    }

    const { name, members } = group

    const change = (number) => {
        setList({})
        for (let i = 0; i < parseInt(number); i++) {
            setList({ ...list, [number]: "" })
        }
    }

    useEffect(() => {
        change(members)
    }, [members])

    let valores = Object.values(list)

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
                valores.map((element, index) => {
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