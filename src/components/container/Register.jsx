import React from 'react'
import * as Yup from "yup"
import { useFormik } from 'formik'


const Register = () => {

    const initValues = {
        email: "",
        password: "",
        confirmPass: ""
    }

    const validateSchema = Yup.object().shape({
        email: Yup.string() // para testear lo dejare string, para la entrega cambiar a email
            .required(),
        password: Yup.string()  // para testear lo dejare string, para la entrega cambiar a password
            .required().min(4).max(8),
        confirmPass: Yup.string()
        .oneOf([Yup.ref("password")], "Password must match")
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
            <label htmlFor='confirmPass'>confirm password</label>
            <input
                name='confirmPass'
                placeholder='confirm password'
                onChange={handleChange}
                value={values.confirmPass}
            />
            {errors.confirmPass && touched.confirmPass && (<div>{errors.confirmPass}</div>)}
            <button type='submit'>Register</button>
        </form>
    )
}

export default Register;