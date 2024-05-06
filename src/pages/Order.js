import React, { useEffect } from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getMyOrder } from '../features/user/userSlice'
import '../css/Order.css'

const Order = () => {
  const dispatch = useDispatch()

  const orderDetails = useSelector(state => state?.auth?.getMyOrder)

  useEffect(() => {
    dispatch(getMyOrder())
  }, [])

  return (
    <Container class1='checkout-wrapper py-5 bg-white'>
      <div className='row between-center flex-nowrap main-order'>
        <div className='w-25'>Order ID</div>
        <div className='w-25'>Total Amount</div>
        <div className='w-25'>Total Amount After Discount</div>
        <div className='w-25'>Status</div>
      </div>

      {orderDetails?.map((element, index1) => {
        return (
          <div key={index1} className='order-numbers'>
            <div className='row between-center flex-nowrap secound-order'>
              <div className='w-25'>{element?._id}</div>
              <div className='w-25'>{element?.totalPrice}</div>
              <div className='w-25'>{element?.totalPriceAfterDiscount}</div>
              <div className='w-25'>{element?.orderStatus}</div>
            </div>

            <div>
              <div className='row between-center flex-nowrap content-order color-white'>
                <div className='w-25'>Product Name</div>
                <div className='w-25'>Quantity</div>
                <div className='w-25'>Price</div>
                <div className='w-25'>color</div>
              </div>

              {element?.orderItems?.map((item, index2) => {
                return (
                  <div
                    key={index2}
                    className='row between-center flex-nowrap content-order'
                  >
                    <div className='w-25'>{item?.productId?.title}</div>
                    <div className='w-25'>{item?.quantity}</div>
                    <div className='w-25'>{item?.price}</div>
                    <div className='w-25'>{item?.color?.title}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </Container>
  )
}
export default Order
