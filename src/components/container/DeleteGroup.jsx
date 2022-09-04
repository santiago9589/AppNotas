import React, { useContext } from 'react'
import { ContextApp } from '../../context/context';

export const DeleteGroup = () => {

    const { data, deleteDataAll } = useContext(ContextApp)

    return (
        <>
            <div>Do you want to delete the group {data.name}?</div>
            <button onClick={deleteDataAll}>Confirm</button>
        </>
    )

}

export default DeleteGroup;