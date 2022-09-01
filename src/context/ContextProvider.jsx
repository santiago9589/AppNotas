import { ContextApp } from "./context";


import React, { useState } from 'react'

export const ContextProvider = ({ children }) => {

    const [data,setData] = useState([
        {name:1,members:2},
        {1:"juan",2:"pedro"}
    ])

    const addData = (name)=>{
        setData(arr => [arr[0],arr[1]={...arr[1],name}])
    }


    return (
        <ContextApp.Provider value={{data,addData}}>
            {children}
        </ContextApp.Provider>
    )
}


export default ContextProvider;