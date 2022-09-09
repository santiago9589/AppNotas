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

    const { userRegister, setUserRegister } = useContext(ContextApp)

    return (
        <>
            <BrowserRouter>
                {userRegister ? <Navbar /> : null}
                <Routes>
                    <Route path='/' element={userRegister ? <HomePage /> : <LoginPage />} />
                    <Route path='/login' element={!userRegister ? <LoginPage /> : <HomePage />} />
                    <Route path='/register' element={!userRegister ? <RegisterPage /> : <HomePage />} />
                    <Route path='/*' element={<ErrorPage />} />
                    <Route path='/create-group' element={userRegister ? <CreateGroupPage /> : <LoginPage />} />
                    <Route path='/add-member-group' element={userRegister ? <AddMemberPage /> : <LoginPage />} />

                    <Route path='/edit-group' element={userRegister ? <EditGroupPage /> : <LoginPage />} />
                    <Route path='/delete-group' element={userRegister ? <DeleteGroup /> : <LoginPage />} />

                    <Route path='/list-group' element={userRegister ? <ListGroup /> : <LoginPage />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}


export default AppRouter;