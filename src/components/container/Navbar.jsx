import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            HOME
                        </Link >

                    </li>
                    <li>
                        <Link to="/login">
                            LOGIN
                        </Link>

                    </li>
                    <li>
                        <Link to="/register">
                            REGISTER
                        </Link>

                    </li>
                    <li>
                        <Link to="/create-group">
                            CREATE GROUP
                        </Link>

                    </li>
                    {/* <li>
                        <Link to="/add-member-group">
                            ADD MEMBER
                        </Link>
                    </li>
                    <li>
                        <Link to="/edit-group">
                            EDIT GROUP
                        </Link>
                    </li>
                    <li>
                        <Link to="/delete-group">
                            DELETE GROUP
                        </Link>
                    </li>
                    <li>
                        <Link to="/list-group">
                            LIST GROUP
                        </Link>
                    </li> */}
                </ul>
            </nav>

        </>
    )
}


export default Navbar;