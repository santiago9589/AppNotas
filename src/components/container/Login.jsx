import React from 'react'
import * as Yup from "yup"
import { useFormik } from 'formik'


const Login = () => {

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

    const { handleChange, handleSubmit, handleReset, values, errors, touched } = formik

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input
                name='email'
                placeholder='example@example.com'
                onChange={handleChange}
                value={values.email}
            />
            {errors.email && touched.email && (<div>{errors.email}</div>)}
            <label htmlFor='password'>password</label>
            <input
                name='password'
                placeholder='password'
                onChange={handleChange}
                value={values.password}
            />
            {errors.password && touched.password && (<div>{errors.password}</div>)}
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login;