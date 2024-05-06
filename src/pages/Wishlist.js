import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserWishlist } from '../features/user/userSlice'
import { addToWishlist } from '../features/products/productSlice'
import { toast } from 'react-toastify'
import '../css/Wishlist & CpmpareProducts.css'

const Wishlist = () => {
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

  const wishlistProduct =
    useSelector(state => state?.auth?.wishlist?.wishlist) || []

  const getWishlistFromDB = async () => {
    dispatch(getUserWishlist())
  }

  const deleteWishlist = async id => {
    setTimeout(() => {
      dispatch(addToWishlist(id))
    }, 300)
  }

  useEffect(id => {
    getWishlistFromDB()
    deleteWishlist(id)
  }, [])

  return (
    <>
      <BreadCrumb title='Wishlist' />
      <Container class1='compare-product-wrapper wishlist-product-wrapper section-background'>
        <div className='row'>
          {!wishlistProduct.length && (
            <div className='noData'>No Products in Wishlist</div>
          )}

          {wishlistProduct?.map((item, index) => {
            return (
              <div key={index} className='col-3'>
                <div className='compare-product-card position-relative'>
                  <img
                    src='images/cross.svg'
                    className='cross position-absolute img-fluid'
                    alt='cross'
                    loading='lazy'
                    onClick={() => {
                      toast.success(` Deleted Successfullly!`)
                      deleteWishlist(item?._id)
                    }}
                  />

                  <div className='compare-product-cart-image'>
                    <img
                      loading='lazy'
                      className='img-fluid imgOfFav'
                      src={item?.images[0].url}
                      alt='compare'
                    />
                  </div>

                  <div className='compare-product-details'>
                    <div className='w-100 d-flex justify-content-start'>
                      <span
                        style={{ margin: '10px 0px 5px', display: 'block' }}
                        className='w-100 pink-color'
                      >
                        Title: &nbsp;
                        <span
                          className='active-color'
                          style={{ marginTop: '10px', fontSize: '15px' }}
                        >
                          {item?.title}
                        </span>
                      </span>
                    </div>

                    <div className='w-100 d-flex justify-content-start'>
                      <span
                        style={{ margin: '10px 0px 5px', display: 'block' }}
                        className='w-100 pink-color'
                      >
                        description: &nbsp;
                        <span
                          className='active-color'
                          style={{ marginTop: '10px', fontSize: '15px' }}
                          dangerouslySetInnerHTML={{
                            __html: item?.description
                          }}
                        ></span>
                      </span>
                    </div>

                    <div className='w-100 d-flex justify-content-start'>
                      <span
                        style={{ margin: '10px 0px 5px', display: 'block' }}
                        className='w-100 pink-color'
                      >
                        Category: &nbsp;
                        <span
                          className='active-color'
                          style={{ marginTop: '10px', fontSize: '15px' }}
                        >
                          {item?.category}
                        </span>
                      </span>
                    </div>

                    <div className='w-100 d-flex justify-content-start'>
                      <span
                        style={{ margin: '10px 0px 5px', display: 'block' }}
                        className='w-100 pink-color'
                      >
                        Brand: &nbsp;{' '}
                        <span
                          className='active-color'
                          style={{ marginTop: '10px', fontSize: '15px' }}
                        >
                          {item?.brand}
                        </span>
                      </span>
                    </div>

                    <div className='w-100 d-flex justify-content-start'>
                      <span
                        style={{ margin: '10px 0px 5px', display: 'block' }}
                        className='w-100 pink-color'
                      >
                        Price: &nbsp;
                        <span
                          className='active-color'
                          style={{ marginTop: '10px', fontSize: '15px' }}
                        >
                          {item?.price}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default Wishlist
