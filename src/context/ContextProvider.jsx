import { ContextApp } from "./context";
import React, { useState } from 'react'

export const ContextProvider = ({ children }) => {

    
    const [data, setData] = useState([
        
        {
        members: 2,
        name: "ddfsdfd",
        names: ['sfsdf', 'sdfsd']
        },

        {
            members: 2,
            name: "ddfsdfd",
            names: ['sfsdf', 'sdfsd']
        }

])

const [userRegister, setUserRegister] = useState(true)

    const addData = (name) => {
        let {names} = data
        setData(data=>{data[0].names = [...names,name]})
    }

    const addDataAll = (newData) => {
        setData(newData)
    }

    const deleteDataAll = () => {
        setData({})
    }



    return (
        <ContextApp.Provider value={{ data, addData,addDataAll,deleteDataAll,userRegister,setUserRegister }}>
            {children}
        </ContextApp.Provider>
    )
}


export default ContextProvider;