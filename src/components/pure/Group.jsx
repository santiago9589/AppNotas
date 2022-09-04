import React from 'react'



export const Group = ({ group,navigate }) => {

    console.log(group)
    return (
        <>
            <div>Name : {group.name}</div>
            <div>Quantity : {group.members}</div>
            <div>Names of members : {group.names}</div>
            <button onClick={()=>{
                navigate(`/delete-group`)
            }}>Delete</button>
            <button onClick={()=>{
                navigate(`/edit-group`)
            }}>Edit</button>
             <button onClick={()=>{
                navigate(`/add-member-group`)
            }}>Add</button>
        </>

    )
}


export default Group