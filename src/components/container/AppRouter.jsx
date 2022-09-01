import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import LoginPage from "../../pages/LoginPage"
import RegisterPage from "../../pages/RegisterPage"
import ErrorPage from "../../pages/ErrorPage"
import Navbar from './Navbar';
import CreateGroupPage from '../../pages/CreateGroupPage';

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>

                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/*' element={<ErrorPage />} />
                    <Route path='/create-group' element={<CreateGroupPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default AppRouter;