import React, { useEffect, useState } from 'react'
import CustomInputAuth from '../components/CustomInputAuth'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { login } from '../features/user/userSlice'
import '../css/Authorization.css'

let schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should be valid')
    .required('Email is Required'),
  password: yup.string().required('Password is Required')
})

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const authState = useSelector(state => state?.auth)
  const { isSuccess } = authState
  const [state, setState] = useState(false)

  useEffect(() => {
    setState(isSuccess)
    if (state === true) {
      navigate('/')
    }
  }, [state, isSuccess])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(login(values))
    }
  })

  return (
    <div className='flex-center bigLogin'>
      <div className='containerLogin'>
        <div className='headingLogin'>Login</div>
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

          <CustomInputAuth
            type='password'
            name='password'
            id='password'
            placeholder='Enter Password'
            onChange={formik.handleChange('password')}
            onCBlur={formik.handleBlur('password')}
            value={formik.values.password}
          />
          <div className='error'>
            {formik.touched.mobile && formik.errors.mobile}
          </div>

          <div className='d-flex justify-content-between'>
            <span className='forgot-password'>
              <Link to='/forget-password' className='red'>
                Forgot Password ?
              </Link>
            </span>
            <span className='agreementLogin'>
              <Link to='/register'>Sign Up</Link>
            </span>
          </div>
          <input className='login-button' type='submit' value='Login' />
        </form>
      </div>
    </div>
  )
}

export default Login
