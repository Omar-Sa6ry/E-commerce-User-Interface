import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { FaArrowLeftLong } from 'react-icons/fa6'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import {
  createOrder,
  emptyCart,
  resetState,
  showCart
} from '../features/user/userSlice'
import { getACoupon } from '../features/products/productSlice'
import { toast } from 'react-toastify'
import '../css/Cart & Checkout.css'

let schema1 = yup.object().shape({
  firstname: yup.string().required('First Name is Required'),
  lastname: yup.string().required('Last Name is Required'),
  apartment: yup.string().required('Apartment is Required'),
  address: yup.string().required('Address is Required'),
  city: yup.string().required('City is Required'),
  coupon: yup.string(),
  country: yup.string().required('Country is Required')
})

let schema2 = yup.object().shape({
  coupon: yup.string()
})

const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [totalAmount, setTotalAmount] = useState(0)
  const [dtotalAmount, setdTotalAmount] = useState(0)
  const [discount, setDiscount] = useState(0)
  const cartState = useSelector(state => state?.auth?.ShowCart)
  const couponState = useSelector(state => state?.product?.singleCoupon)

  useEffect(() => {
    if (Number(totalAmount) > Number(couponState?.discount)) {
      setDiscount(couponState?.discount)
      setdTotalAmount(Number(totalAmount) - Number(couponState?.discount))
      document
        .querySelector('#applyCoupon')
        .addEventListener('click', function () {
          this.disabled = true
        })
      toast.success('Coupon Applied Successfully')
    }
  }, [couponState])

  useEffect(() => {
    dispatch(showCart())
  }, [dtotalAmount, couponState, totalAmount])

  useEffect(() => {
    if (cartState?.length === 0) {
      setTimeout(() => {
        navigate('/cart')
      }, 500)
    }
  }, [cartState])

  useEffect(() => {
    let sum = 0
    for (let i = 0; i < cartState?.length; i++) {
      sum = sum + Number(cartState[i]?.quantity * cartState[i]?.price)
      setTotalAmount(sum)
    }
  }, [cartState])

  const formik1 = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: '',
      lastname: '',
      apartment: '',
      country: '',
      address: '',
      city: ''
    },
    validationSchema: schema1,
    onSubmit: async values => {
      // Create a new Order
      dispatch(
        createOrder({
          ShippingInfo: values,
          totalPrice: totalAmount,
          totalPriceAfterDiscount: dtotalAmount ? 0 : totalAmount,
          orderItems: cartState
        })
      )

      //Set The Cart Empty
      setTimeout(() => {
        dispatch(emptyCart())
      }, 100)
      navigate('/my-orders')
      dispatch(resetState())
    }
  })

  // Coupon
  const formik2 = useFormik({
    enableReinitialize: true,
    initialValues: {
      coupon: ''
    },
    validationSchema: schema2,
    onSubmit: values => {
      dispatch(getACoupon(values?.coupon))

      let date1 = new Date()
      let date2 = couponState?.expiry
      if (date1 > date2) {
        toast.error('This Coupon is Expired')
      }
    }
  })

  return (
    <Container class1='checkout-wrapper py-5 bg-white'>
      <div className='row'>
        <div className='col-7'>
          <div className='checkout-left-data'>
            <h3 className='website-name'>OAS</h3>
            <nav
              style={{ '--bs-breadcrumb-divider': '>' }}
              aria-label='breadcrumb'
            >
              <ol className='breadcrumb'>
                <li className='breadcrumb-item total-price'>
                  <Link to='/cart'>Cart</Link> &nbsp; /&nbsp;
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  <Link className='text-dark' to='/information'>
                    Information
                  </Link>
                  &nbsp; /&nbsp;
                </li>
                <li
                  className='breadcrumb-item  total-price'
                  aria-current='page'
                >
                  <Link to='/shipping'>Shipping</Link>&nbsp; /&nbsp;
                </li>
                <li className='breadcrumb-item total-price' aria-current='page'>
                  <Link to='/payment'>Payment</Link>
                </li>
              </ol>
            </nav>
            <h4 className='title total'>Contact Information</h4>
            <p className='user-datails total'>
              omarahmedsabry05(omarahmedsabry05@gmail.com)
            </p>

            {/* Coupon */}
            <h4 className='head-color mb-3'>Coupon</h4>
            <form
              onSubmit={formik2.handleSubmit}
              className='w-100 d-flex flex-wrap justify-content-between'
            >
              <div className='w-100 flex-nowrap justify-content-between d-flex'>
                <div className='w-100'>
                  <CustomInput
                    className='w-97'
                    placeholder='Enter The Coupon'
                    type='text'
                    name='coupon'
                    id='coupon'
                    value={formik2.values.coupon}
                    onChange={formik2.handleChange('coupon')}
                    onBlur={formik2.handleBlur('coupon')}
                  />
                  <div className='error w-100'>
                    {formik2.touched.coupon && formik2.errors.coupon}
                  </div>
                </div>
                <button type='submit' className='applyCoupon' id='applyCoupon'>
                  Apply Coupon
                </button>
              </div>
            </form>

            <h4 className='head-color mb-3'>Shipping Address</h4>
            {/* Shipping Info */}
            <form
              onSubmit={formik1.handleSubmit}
              className='d-flex flex-wrap justify-content-between'
            >
              <CustomInput
                placeholder='First Name'
                type='text'
                id='firstname'
                name='firstname'
                value={formik1.values.firstname}
                onChange={formik1.handleChange('firstname')}
                onBlur={formik1.handleBlur('firstname')}
              />
              <div className='error w-100'>
                {formik1.touched.firstname && formik1.errors.firstname}
              </div>
              <CustomInput
                placeholder='Last Name'
                type='text'
                id='lastname'
                name='lastname'
                value={formik1.values.lastname}
                onChange={formik1.handleChange('lastname')}
                onBlur={formik1.handleBlur('lastname')}
              />
              <div className='error w-100'>
                {formik1.touched.lastname && formik1.errors.lastname}
              </div>
              <CustomInput
                placeholder='Address'
                type='text'
                id='address'
                name='address'
                value={formik1.values.address}
                onChange={formik1.handleChange('address')}
                onBlur={formik1.handleBlur('address')}
              />
              <div className='error w-100'>
                {formik1.touched.address && formik1.errors.address}
              </div>
              <CustomInput
                placeholder='Apartment, Suite, etc'
                type='text'
                id='apartment'
                name='apartment'
                value={formik1.values.apartment}
                onChange={formik1.handleChange('apartment')}
                onBlur={formik1.handleBlur('apartment')}
              />
              <div className='error w-100'>
                {formik1.touched.apartment && formik1.errors.apartment}
              </div>

              <div className='w-49'>
                <select
                  className='form-control form-select input-contact'
                  name='country'
                  id='country'
                  value={formik1.values.country}
                  onChange={formik1.handleChange('country')}
                  onBlur={formik1.handleBlur('country')}
                >
                  <option value='' selected disabled>
                    Select Country
                  </option>
                  <option value='Egypt'>Egypt</option>
                </select>
                <div className='error w-100'>
                  {formik1.touched.country && formik1.errors.country}
                </div>
              </div>

              <div className='w-49'>
                <select
                  placeholder='Select Government'
                  type='text'
                  className='form-control form-select input-contact w-100'
                  id='city'
                  name='city'
                  value={formik1.values.city}
                  onChange={formik1.handleChange('city')}
                  onBlur={formik1.handleBlur('city')}
                >
                  <option value=''>Select City</option>
                  <option value='ALX'>Alexandria </option>
                  <option value='ASN'>Aswan </option>
                  <option value='AST'>Asyut </option>
                  <option value='BH'>Beheira </option>
                  <option value='BNS'>Beni Suef </option>
                  <option value='C'>Cairo </option>
                  <option value='DK'>Dakahlia </option>
                  <option value='DT'>Damietta </option>
                  <option value='FYM'>Faiyum </option>
                  <option value='GH'>Gharbia </option>
                  <option value='GZ'>Giza </option>
                  <option value='IS'>Ismailia </option>
                  <option value='KFS'>Kafr el-Sheikh </option>
                  <option value='LX'>Luxor </option>
                  <option value='MT'>Matrouh </option>
                  <option value='MN'>Minya </option>
                  <option value='MNF'>Monufia </option>
                  <option value='WAD'>New Valley </option>
                  <option value='SIN'>North Sinai </option>
                  <option value='PTS'>Port Said </option>
                  <option value='KB'>Qalyubia </option>
                  <option value='KN'>Qena </option>
                  <option value='BA'>Red Sea </option>
                  <option value='SHG'>Sohag </option>
                  <option value='JS'>South Sinai </option>
                  <option value='SUZ'>Suez </option>{' '}
                </select>
                <div className='error w-100'>
                  {formik1.touched.city && formik1.errors.city}
                </div>
              </div>

              <div className='w-100'>
                <div className='between-center mt-3'>
                  <Link className='flex-center head-color' to='/cart'>
                    <FaArrowLeftLong /> &nbsp; Return To Cart
                  </Link>
                  <Link className='buttonOfContinue' to='/product'>
                    Continue To Shipping
                  </Link>

                  <button
                    type='submit'
                    className='buttonOfContinue'
                    to='/product'
                  >
                    Checkout out
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='col-5'>
          <div className='border-bottom py-4'>
            {cartState?.map((item, index) => {
              return (
                <div key={index} className='between-center gap-10 chexkCardP'>
                  <div className='w-25 position-relative'>
                    <span
                      style={{
                        top: '-18px',
                        right: '2px',
                        backgroundColor: '#d1d1d1'
                      }}
                      className='position-absolute badge p-1 head-color section-background rounded-circle'
                    >
                      {item?.quantity}
                    </span>
                    <div>
                      <img
                        loading='lazy'
                        src={item?.productId?.images[0]?.url}
                        className='img-fluid'
                        alt='product'
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className='title'>{item?.productId?.title}</h5>
                    <p className='total-price'>{item?.color?.title}</p>
                  </div>
                  <div className='flex-grow-1 '>
                    <h5 className='total'>
                      $ {item?.productId?.price * item?.quantity}
                    </h5>
                  </div>
                </div>
              )
            })}

            <div className='border-bottom py-4'>
              <div className='between-center'>
                <p className='mb-2 total'>SubTotal</p>
                <p className='mb-2 total-price'>
                  $ {totalAmount ? totalAmount : '0'}
                </p>
              </div>
              <div className='between-center'>
                <p className='mb-0 total'>Shipping</p>
                <p className='mb-0 total-price'>$ 5</p>
              </div>
            </div>

            {Number(discount) !== 0 && (
              <div className='between-center' style={{ marginTop: '15px' }}>
                <p className='mb-0 total'>Discount</p>
                <p className='mb-0 total-price'>$ {discount}</p>
              </div>
            )}

            <div className='between-center border-bottom py-4'>
              <p className='mb-0 total'>Total</p>
              <p className='mb-0 total-price'>
                $ {dtotalAmount ? dtotalAmount + 5 : totalAmount + 5}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default Checkout
