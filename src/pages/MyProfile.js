import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../features/user/userSlice'
import CustomInput from '../components/CustomInput'

let schema = yup.object().shape({
  firstname: yup.string().required('First Name is Required'),
  lastname: yup.string().required('Last Name is Required'),
  email: yup
    .string()
    .email('Email should be valid')
    .required('Email is Required'),
  mobile: yup.string().required('Mobile Phone is Required').min(11).max(11)
})

const MyProfile = () => {
  const dispatch = useDispatch()

  const [edit, setEdit] = useState(true)
  const userState = useSelector(state => state?.auth?.user)
  const userStatee = useSelector(state => state?.auth)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: userState?.firstname,
      lastname: userState?.lastname,
      email: userState?.email,
      mobile: userState?.mobile
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(updateUser(values))
      setTimeout(() => {
        if (Number(userStatee?.status) === 200) {
          setEdit(true)
        }
      }, 2000)
    }
  })

  return (
    <>
      <BreadCrumb title='My Profile' />
      <Container className='compare-product-wrapper section-background'>
        <div className='row'>
          <div className='col-12 profileOfMe'>
            <div
              className='col-12 between-center'
              style={{
                padding: '30px',
                width: '95%',
                margin: '30px 30px -64px'
              }}
            >
              <h2 className='h2OfContact'>Update Profile</h2>
              <i
                style={{ fontSize: '25px' }}
                onClick={() => {
                  setEdit(false)
                  console.log('mifn')
                }}
                class='fa-regular fa-pen-to-square'
              ></i>
            </div>

            <form
              onSubmit={formik.handleSubmit}
              className='p-30'
              style={{ margin: '30px' }}
            >
              <CustomInput
                disabled={edit}
                placeholder='First Name'
                type='text'
                name='firstname'
                value={formik.values.firstname}
                onChange={formik.handleChange('firstname')}
                onBlur={formik.handleBlur('firstname')}
              />
              <div className='error'>
                {formik.touched.firstname && formik.errors.firstname}
              </div>

              <CustomInput
                disabled={edit}
                placeholder='First Name'
                type='text'
                name='lastname'
                value={formik.values.lastname}
                onChange={formik.handleChange('lastname')}
                onBlur={formik.handleBlur('lastname')}
              />
              <div className='error'>
                {formik.touched.lastname && formik.errors.lastname}
              </div>

              <CustomInput
                disabled={edit}
                placeholder='Email'
                type='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
              />
              <div className='error'>
                {formik.touched.email && formik.errors.email}
              </div>

              <CustomInput
                disabled={edit}
                placeholder='Phone Number'
                type='tel'
                name='mobile'
                value={formik.values.mobile}
                onChange={formik.handleChange('mobile')}
                onBlur={formik.handleBlur('mobile')}
              />
              <div className='error'>
                {formik.touched.mobile && formik.errors.mobile}
              </div>

              <div className='error'>
                {formik.touched.firstname && formik.errors.firstname}
                <br />
                {formik.touched.lastname && formik.errors.lastname}
                <br />
                {formik.touched.email && formik.errors.email}
                <br />
                {formik.touched.mobile && formik.errors.mobile}
              </div>

              {edit === true ? (
                ''
              ) : (
                <button className='buttonOfContact typeOfWordOfContact'></button>
              )}
            </form>
          </div>
        </div>
      </Container>
    </>
  )
}

export default MyProfile
