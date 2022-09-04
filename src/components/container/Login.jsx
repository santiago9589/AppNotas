import React from 'react'
import * as Yup from "yup"
import { useFormik } from 'formik'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()


    const initValues = {
        email: "",
        password: "",
    }

    const validateSchema = Yup.object().shape({
        email: Yup.string() // para testear lo dejare string, para la entrega cambiar a email
            .required(),
        password: Yup.string()  // para testear lo dejare string, para la entrega cambiar a password
            .required().min(4).max(8),
    })

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: validateSchema,
        onSubmit: (values) => {
            console.log(values)
            handleReset()
        }
    })

    const { handleChange, handleSubmit, handleReset, handleBlur,values, errors, touched } = formik
    console.log()
    return (
        <form className="form-our" onSubmit={handleSubmit}>
            <div className='form-component'>
                <label htmlFor='email' className='form-component-label'>Email</label>
                <input
                    name='email'
                    placeholder='example@example.com'
                    onChange={handleChange}
                    value={values.email}
                    className="form-component-input"
                    onBlur={handleBlur}
                />
                {errors.email && touched.email && (<div className='form-component-errormesage'>{errors.email}</div>)}
            </div>
            <div className='form-component'>
                <label htmlFor='password' className='form-component-label'>password</label>
                <input
                    name='password'
                    placeholder='password'
                    onChange={handleChange}
                    value={values.password}
                    className="form-component-input"
                    onBlur={handleBlur}
                />
                {errors.password && touched.password && (<div className='form-component-errormesage'>{errors.password}</div>)}
            </div>
            <div className='flex flex-col space-y-1 gap-1 w-full items-center p-2'>
                <button type='submit' className='btn-login' disabled={(errors.email || errors.password) ? true : false}>Login
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline-flex">
                        <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg></button>
                <>¿Dont you have account?</>
                <button className='btn-register' onClick={() => navigate(`/register`)} >Register <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline-flex">
                    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                </svg></button>
            </div>
        </form>
    )
}

export default Login;