import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { ContextApp } from '../../context/context'


const Navbar = () => {


    const { userRegister, setUserRegister } = useContext(ContextApp)

    const [state, setState] = useState(true)

    return (
        <div className='flex flex-col h-full w-1/3 sm:flex-row sm:w-full sm:h-1/6'>
            <div className='w-full flex flex-row sm:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" onClick={() => setState(!state)}>
                    <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg><span>MENU</span>
            </div>
            <nav className={state ? 'flex w-full bg-blue-300 h-full sm:w-full sm:h-full sm:flex-row items-start justify-around sm:justify-start' : "hidden-componente"}>
                <ul>
                    <li className="sm:inline-block m-2 p-2 ">
                        <Link to="/">
                            HOME
                        </Link >

                    </li>
                    {/* <li>
                        <Link to="/login">
                            LOGIN
                        </Link>

                    </li>
                    <li>
                        <Link to="/register">
                            REGISTER
                        </Link>

                    </li> */}
                    <li className="sm:inline-block m-2 p-2">
                        <Link to="/create-group">
                            CREATE GROUP
                        </Link>

                    </li>
                    <li className="sm:inline-block m-2 p-2">
                        <Link to="/add-member-group">
                            ADD MEMBER
                        </Link>
                    </li>
                    <li className="sm:inline-block m-2 p-2">
                        <Link to="/edit-group">
                            EDIT GROUP
                        </Link>
                    </li>
                    <li className="sm:inline-block m-2 p-2">
                        <Link to="/delete-group">
                            DELETE GROUP
                        </Link>
                    </li>
                    <li className="sm:inline-block m-2 p-2">
                        <Link to="/list-group">
                            LIST GROUP
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}


export default Navbar;