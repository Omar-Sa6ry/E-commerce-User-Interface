import React from 'react'
import CustomInputAuth from '../components/CustomInputAuth'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { forgotPassword } from '../features/user/userSlice'

let schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should be valid')
    .required('Email is Required')
})

const ForgetPassword = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(forgotPassword(values))
      formik.resetForm()
    }
  })

  return (
    <div className='flex-center bigLogin'>
      <div className='containerLogin'>
        <div style={{ fontSize: '25px' }} className='headingLogin'>
          Forgot Your Password
        </div>
        <div className='Resetcontent'>
          <h2>We Will Send you an Email</h2>
        </div>
        <form onSubmit={formik.handleSubmit} className='formLogin'>
          <CustomInputAuth
            type='email'
            name='email'
            id='email'
            placeholder='Enter E-mail'
            onChange={formik.handleChange('email')}
            onCBlur={formik.handleBlur('email')}
            value={formik.values.email}
          />
          <div className='error'>
            {formik.touched.email && formik.errors.email}
          </div>

          <input className='login-button' type='submit' value='Send' />
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword
