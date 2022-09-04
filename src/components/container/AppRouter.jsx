import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import LoginPage from "../../pages/LoginPage"
import RegisterPage from "../../pages/RegisterPage"
import ErrorPage from "../../pages/ErrorPage"
import Navbar from './Navbar';
import CreateGroupPage from '../../pages/CreateGroupPage';
import AddMemberPage from '../../pages/AddMemberPage';
import EditGroupPage from "../../pages/EditGroupPage";
import DeleteGroup from './DeleteGroup';
import ListGroup from './ListGroup';
import { ContextApp } from '../../context/context';

const AppRouter = () => {

    const { userRegister,setUserRegister } = useContext(ContextApp)

    return (
        <>
            <BrowserRouter>
                { userRegister ? <Navbar /> : null}
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/*' element={<ErrorPage />} />
                    <Route path='/create-group' element={<CreateGroupPage />} />
                    {/* <Route path='/add-member-group' element={<AddMemberPage />} />
                    <Route path='/edit-group' element={<EditGroupPage/>}/>
                    <Route path='/delete-group' element={<DeleteGroup/>}/>
                    <Route path='/list-group' element={<ListGroup/>}/> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default AppRouter;