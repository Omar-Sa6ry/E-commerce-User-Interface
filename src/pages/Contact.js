import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { FaHome } from 'react-icons/fa'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoIosMail } from 'react-icons/io'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import '../css/Contact.css'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import { createQuery } from '../features/contact/contactSlice'

let schema = yup.object().shape({
  name: yup.string().required('Name is Required'),
  email: yup
    .string()
    .email('Email should be valid')
    .required('Email is Required'),
  mobile: yup.number().required('Phone Number is Required'),
  comment: yup.string().required('Comment is Required')
})

function Contact () {
  const dispatch = useDispatch()

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      comment: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(createQuery(values))
      formik.resetForm()
    }
  })

  return (
    <>
      <BreadCrumb title='Contact Us' />
      <Container class1='contact-wrapper py-5 '>
        <div className='row'>
          <div className='col-12 '>
            <div>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.405117313396!2d31.682204524282483!3d31.430512274255257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9e3b22ad26ba7%3A0x87cf83b09829d857!2z2YXYr9ix2LPYqSDYp9mE2YXYs9iq2YLYqNmEINin2YTYp9io2KrYr9in2KbZitip!5e0!3m2!1sar!2seg!4v1702632334896!5m2!1sar!2seg'
                width='600'
                height='450'
                title='map'
                style={{ borderRadius: '10px' }}
                className='border-0 w-100'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
          <div className='col-12 mt-5'>
            <div className='justify-content-between d-flex  bg-white divOfFormInContact'>
              <div className='w-50'>
                <form onSubmit={formik.handleSubmit} className='p-30'>
                  <h2 className='h2OfContact'>Contact</h2>

                  <CustomInput
                    placeholder='Name'
                    type='text'
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                  />
                  <div className='error'>
                    {formik.touched.name && formik.errors.name}
                  </div>

                  <CustomInput
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

                  <textarea
                    className='input-contact'
                    placeholder='Comment'
                    name='comment'
                    value={formik.values.comment}
                    onChange={formik.handleChange('comment')}
                    onBlur={formik.handleBlur('comment')}
                  />
                  <div className='error'>
                    {formik.touched.comment && formik.errors.comment}
                  </div>

                  <div className='error'>
                    {formik.touched.name && formik.errors.name}
                    <br />
                    {formik.touched.email && formik.errors.email}
                    <br />
                    {formik.touched.comment && formik.errors.comment}
                    <br />
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>

                  <button className='buttonOfContact typeOfWordOfContact'></button>
                </form>
              </div>
              <div className='w-50'>
                <div className='p-30'>
                  <h2 className='h2OfContact'>Get In Touch With Us</h2>
                  <div>
                    <ul>
                      <li className='d-flex align-items-center mb-3 gap-15 '>
                        <FaHome />
                        <address className='mb-0'>
                          Egypt, Damietta ,New Damietta ,In Front Of Future
                          School
                        </address>
                      </li>
                      <li className='d-flex align-items-center mb-3 gap-15'>
                        <BiSolidPhoneCall />
                        <Link href='tel:+201091854368' target='_blank'>
                          tel:+201091854368
                        </Link>
                      </li>
                      <li className='d-flex align-items-center mb-3 gap-15'>
                        <IoIosMail />
                        <Link
                          href='mailto:omarahmedsabry05@gmail.com'
                          target='_blank'
                        >
                          omarahmedsabry05@gmail.com
                        </Link>
                      </li>
                      <li className='d-flex align-items-center mb-3 gap-15'>
                        <BsFillInfoCircleFill />
                        <p className='mb-0'>Sundat - Thrusday 10Am - 8Pm</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact
