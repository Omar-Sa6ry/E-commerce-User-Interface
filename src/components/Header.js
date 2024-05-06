import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { showCart } from '../features/user/userSlice'
import { FaHeart } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'
import { FaUser } from 'react-icons/fa6'
import { getproducts } from '../features/products/productSlice'
import { Typeahead } from 'react-bootstrap-typeahead' // ES2015
import 'react-bootstrap-typeahead/css/Typeahead.css'
import '../css/Header.css'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartState = useSelector(state => state?.auth?.ShowCart)
  const productState = useSelector(state => state?.product?.product)
  const authState = useSelector(state => state?.auth)

  const [totalAmount, setTotalAmount] = useState(0)
  const [firstname, setFirstName] = useState('')
  const [productOption, setProductOption] = useState([])

  const handelLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('Address')
    localStorage.removeItem('customer')
    window.location.reload()
  }

  useEffect(() => {
    setFirstName(authState?.user?.firstname)
    dispatch(showCart())
    dispatch(showCart())
  }, [totalAmount])

  useEffect(() => {
    if (cartState?.length === 1 || cartState?.length === 0) {
      setTotalAmount(0)
    }
  }, [cartState])

  useEffect(() => {
    let sum = 0
    for (let i = 0; i < cartState?.length || 0; i++) {
      sum = sum + Number(cartState[i]?.quantity * cartState[i]?.price) || 0
      setTotalAmount(sum)
    }
  }, [cartState])

  useEffect(() => {
    dispatch(getproducts())
  }, [])

  useEffect(() => {
    let data = []
    for (let i = 0; i < productState?.length; i++) {
      const element = productState[i]
      data.push({ name: element?.title, id: i, prod: element?._id })
    }
    setProductOption(data)
  }, [productState])

  return (
    <>
      <nav className='navbar navbar-expand-lg top-nav nav-background'>
        <p>Free Shipping Over $100 & Free Returns</p>
        <p>Hotline: +20 109 185 4368</p>
      </nav>

      <nav className='navbar navbar-expand-lg nav-background'>
        <div className='row container-fluid'>
          {/* Logo */}
          <Link
            className='navbar-brand col-2 color-white justify-content-center d-flex align-items-center '
            to='/'
          >
            OAS.
          </Link>

          <div className='col-4'>
            <Typeahead
              id='pagination-example'
              onPaginate={() => console.log('Results paginated')}
              onChange={selected => {
                navigate(`/product/${selected[0]?.prod}`)
              }}
              options={productOption}
              labelKey={'name'}
              placeholder='Search For Product...'
            />
          </div>

          {/* Links */}
          <div className='row'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 col-6 d-flex justify-content-center'>
              <li className='nav-item'>
                <Link className='nav-link active d-flex' to='/wishlist'>
                  <FaHeart />
                  <p style={{ display: 'contents' }}>
                    Favourite <br />
                    Product
                  </p>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link active d-flex'
                  to={authState?.user === null ? '/login' : '/my-profile'}
                >
                  <FaUser />
                  {authState?.user === null ? (
                    <p style={{ display: 'contents' }}>
                      Login <br /> my account
                    </p>
                  ) : (
                    <p style={{ display: 'contents' }}>
                      Welcome <br /> {firstname}
                    </p>
                  )}
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link active d-flex' to='/cart'>
                  <TiShoppingCart />
                  <div
                    className='d-flex flex-column color-white'
                    style={{
                      top: '7px',
                      display: 'block',
                      position: 'relative',
                      left: '3px'
                    }}
                  >
                    <span
                      style={{ width: 'fit-content' }}
                      className='badge bg-white text-dark'
                    >
                      {cartState?.length ? cartState?.length : 0}
                    </span>
                    &nbsp; <p>$ {totalAmount ? totalAmount : 0}</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className='navbar navbar-expand-lg bottom-nav nav-background'>
        <div className='col-2'>
          <div className='dropdown flex-center'>
            <button
              className='btn btn-secondary dropdown-toggle dropdown-t'
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Dropdown button
            </button>
            <ul className='dropdown-menu'>
              <li>
                <Link className='dropdown-item' to='/'>
                  Action
                </Link>
              </li>
              <li>
                <Link className='dropdown-item' to='/'>
                  Another action
                </Link>
              </li>
              <li>
                <Link className='dropdown-item' to='/'>
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='col-5'>
          <div className='radio-input'>
            <input
              value='value-1'
              name='value-radio'
              id='value-1'
              type='radio'
            />
            <label htmlFor='value-1'>
              <NavLink to='/'>Home</NavLink>
            </label>
            <input
              value='value-1'
              name='value-radio'
              id='value-1'
              type='radio'
            />
            <label htmlFor='value-1'>
              <NavLink to='/product'>Store</NavLink>
            </label>
            <label htmlFor='value-1'>
              <NavLink to='/my-orders'>Orders</NavLink>
            </label>
            <input
              value='value-1'
              name='value-radio'
              id='value-1'
              type='radio'
            />
            <label htmlFor='value-1'>
              <NavLink to='/blogs'>Blogs</NavLink>
            </label>
            <input
              value='value-1'
              name='value-radio'
              id='value-1'
              type='radio'
            />
            <label htmlFor='value-1'>
              <NavLink to='/contact'>Contact</NavLink>
            </label>

            {authState?.user !== null ? (
              <label className='logoutL'>
                <button
                  onClick={() => {
                    handelLogout()
                  }}
                  className='logoutB'
                >
                  LogOut
                </button>
              </label>
            ) : (
              ''
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
