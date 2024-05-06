import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { MdDelete } from 'react-icons/md'
import Container from '../components/Container'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeProductCart,
  showCart,
  updateProductDetailsQ
} from '../features/user/userSlice'
import '../css/Cart & Checkout.css'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isSuccessHandler = useSelector(state => state?.auth)
  const { isSuccess } = isSuccessHandler

  if (isSuccess === false) {
    localStorage.removeItem('token')
    localStorage.removeItem('Address')
    localStorage.removeItem('customer')
    navigate('/login')
  }

  const [productUpdateDetail, setProductUpdateDetail] = useState(null)
  const [totalAmount, setTotalAmount] = useState(0)
  const userCartState = useSelector(state => state?.auth?.ShowCart)

  const deleteProductCart = async id => {
    dispatch(removeProductCart(id))
    dispatch(showCart())
    let sum = 0
    for (let i = 0; i < userCartState?.length; i++) {
      sum =
        Number(sum) +
        Number(
          Number(userCartState[i]?.quantity) * Number(userCartState[i]?.price)
        )
      setTotalAmount(sum)
    }
    if (userCartState?.length === 1) {
      setTotalAmount(0)
    }
  }

  useEffect(() => {
    dispatch(showCart())
    dispatch(showCart())
  }, [totalAmount])

  useEffect(() => {
    if (productUpdateDetail) {
      dispatch(
        updateProductDetailsQ({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity
        })
      )
      setTimeout(() => {
        dispatch(showCart())
      }, 200)
    }
  }, [productUpdateDetail])

  useEffect(() => {
    let sum = 0
    for (let i = 0; i < userCartState?.length; i++) {
      sum = sum + Number(userCartState[i]?.quantity * userCartState[i]?.price)
      setTotalAmount(sum)
    }
  }, [userCartState])

  return (
    <>
      <BreadCrumb title='Your Shopping Cart' />
      <Container class1='cart-wrapper py-5 section-background'>
        <div className='row'>
          <div className='col-12'>
            <table className='w-100'>
              <thead className='cart-head py-3 between-center'>
                <tr className='cart-col-1'>
                  <h4 className='head-color'>Product</h4>
                </tr>
                <tr className='cart-col-3'>
                  <h4 className='head-color'>price</h4>
                </tr>
                <tr className='cart-col-3'>
                  <h4 className='head-color'>quantity</h4>
                </tr>
                <tr className='cart-col-4'>
                  <h4 className='head-color'>total</h4>
                </tr>
              </thead>

              {!userCartState?.length && (
                <div className='noData red-color'>No Products in Cart</div>
              )}

              {userCartState?.map((item, index) => {
                return (
                  <tbody
                    className='cart-data py-3 mb-2 between-center'
                    key={index}
                  >
                    <tr className='cart-col-1 py-3 between-center gap-15'>
                      <div className='w-25'>
                        <img
                          loading='lazy'
                          className='img-fluid'
                          src={item?.productId?.images[0]?.url}
                          alt='product'
                        />
                      </div>
                      <div className='w-75'>
                        <p className='head-color'>{item?.productId?.title}</p>
                        {/* <p>Size :uohig</p> */}
                        <p className='d-flex'>
                          Color :
                          <ul
                            key={index}
                            style={{ padding: ' 0 5px' }}
                            className='colors d-flex flex-wrap gap-10'
                          >
                            <li
                              style={{
                                backgroundColor: `${item?.color?.title}`
                              }}
                              key={index}
                            ></li>
                          </ul>
                        </p>
                      </div>
                    </tr>
                    <tr className='cart-col-2'>
                      <h5 className='price'>$ {item?.productId?.price}</h5>
                    </tr>
                    <tr className='cart-col-3 gap-15 d-flex align-items-center'>
                      <div>
                        <input
                          className='form-control'
                          type='number'
                          id='quantityR'
                          name='quantityRR'
                          min={1}
                          max={item?.productId?.quantity}
                          value={
                            productUpdateDetail?.quantity
                              ? productUpdateDetail?.quantity
                              : item?.quantity
                          }
                          onChange={e => {
                            setProductUpdateDetail({
                              cartItemId: item?._id,
                              quantity: e.target.value
                            })
                          }}
                        />
                      </div>
                      <div>
                        <MdDelete
                          style={{ color: '#f60e0e' }}
                          onClick={() => {
                            deleteProductCart(item?._id)
                          }}
                        />
                      </div>
                    </tr>
                    <tr className='cart-col-4'>
                      <h5 className='price'>
                        $ {item?.quantity * item?.productId?.price}
                      </h5>
                    </tr>
                  </tbody>
                )
              })}
            </table>
          </div>
          <div className='col-12 py-2 mt-4'>
            <div className='d-flex justify-content-between align-items-baseline'>
              <Link to='/product' className='buttonOfContinue'>
                Continue To Shopping
              </Link>

              {(totalAmount !== null || totalAmount !== 0) && (
                <div className='flex-column d-flex align-items-end'>
                  <h4>SubTotal : $ {totalAmount}</h4>
                  <p>Taxes and Shipping calculated at checkout</p>
                  {totalAmount !== 0 && (
                    <Link to='/checkout' className='buttonOfContinue'>
                      Ckeckout
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
export default Cart
