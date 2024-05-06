import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import CustomInputAuth from '../components/CustomInputAuth'
import { register } from '../features/user/userSlice'
import '../css/Authorization.css'

let schema = yup.object().shape({
  firstname: yup.string().required('First Name is Required'),
  lastname: yup.string().required('Last Name is Required'),
  mobile: yup.number().required('Mobile is Required'),
  email: yup
    .string()
    .email('Email should be valid')
    .required('Email is Required'),
  password: yup.string().required('Password is Required').min(8)
})

const Register = () => {
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
      firstname: '',
      lastname: '',
      mobile: '',
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(register(values))
    }
  })

  return (
    <>
      <div className='flex-center bigLogin'>
        <div className='containerLogin position-relative'>
          <div className='headingLogin'>Register</div>
          <form onSubmit={formik.handleSubmit} className='formLogin'>
            <div className='d-flex justify-content-between w-100'>
              <div className='d-block'>
                <CustomInputAuth
                  type='text'
                  className='inputLogin w-97'
                  name='firstname'
                  id='firstname'
                  placeholder='Enter First Name'
                  onChange={formik.handleChange('firstname')}
                  onCBlur={formik.handleBlur('firstname')}
                  value={formik.values.firstname}
                />
                <div className='error'>
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
              </div>
              <div className='d-block'>
                <CustomInputAuth
                  type='text'
                  className='inputLogin w-48'
                  name='lastname'
                  id='lastname'
                  placeholder='Enter Last Name'
                  onChange={formik.handleChange('lastname')}
                  onCBlur={formik.handleBlur('lastname')}
                  value={formik.values.lastname}
                />

                <div className='error'>
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
              </div>
            </div>

            <CustomInputAuth
              type='email'
              name='Remail'
              id='Remail'
              placeholder='Enter E-mail'
              onChange={formik.handleChange('email')}
              onCBlur={formik.handleBlur('email')}
              value={formik.values.email}
            />
            <div className='error'>
              {formik.touched.email && formik.errors.email}
            </div>

            <CustomInputAuth
              type='tel'
              name='telephone'
              id='telephone'
              placeholder='Enter Mobile Number'
              onChange={formik.handleChange('mobile')}
              onCBlur={formik.handleBlur('mobile')}
              value={formik.values.mobile}
            />
            <div className='error'>
              {formik.touched.mobile && formik.errors.mobile}
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
              {formik.touched.password && formik.errors.password}
            </div>

            <div className='d-flex justify-content-end'>
              <span className='agreementLogin'>
                <Link to='/login'>Login</Link>
              </span>
            </div>
            <input className='login-button' type='submit' value='Register' />
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
