import React, { useEffect, useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import ReactImageZoom from 'react-image-zoom'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  addRating,
  addToWishlist,
  resetState
} from '../features/products/productSlice'
import { getAproduct, getproducts } from '../features/products/productSlice'
import { addToCart, showCart } from '../features/user/userSlice'
import { IoMdHeartEmpty } from 'react-icons/io'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import Colors from '../components/Colors'
import Container from '../components/Container'
import DataOfSingleProduct from '../components/DataOfSingleProduct'
import '../css/SingleProduct.css'

const SingleProduct = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  const [orderProduct, setOrderProduct] = useState(true)
  const [alreadyAdded, setAlreadyAdded] = useState(false)
  const [color, setColor] = useState(null)
  const [comment, setComment] = useState(null)
  const [star, setStar] = useState(null)
  const [starr, setStarr] = useState(null)
  const [quantity, setQuantity] = useState(1)

  const getId = location?.pathname?.split('/')[2]
  const item = useSelector(state => state?.product?.singleProduct)
  const productState = useSelector(state => state?.product?.product)
  const userCartState = useSelector(state => state?.auth?.ShowCart)

  const addTowishlistt = id => {
    dispatch(addToWishlist(id))
  }

  const AddToCart = () => {
    if (color === null) {
      toast.error('Please, Choose a Color')
      return false
    } else {
      dispatch(
        addToCart({ color, quantity, productId: item?._id, price: item?.price })
      )
      setAlreadyAdded(true)
    }
  }

  const addRatingToProduct = () => {
    if (comment === null) {
      toast.error('Please enter a Comment for Product')
      return false
    }
    if (star === null) {
      toast.error('Please enter a Star Rating')
      return false
    } else {
      dispatch(addRating({ star: star, prodId: getId, comment: comment }))
      dispatch(resetState())
      setTimeout(() => {
        dispatch(getAproduct(getId))
      }, 300)
    }
  }

  useEffect(() => {
    setStarr(Number(item?.totalrating))
    dispatch(getAproduct(getId))
    dispatch(getproducts())
    dispatch(showCart())
  }, [getId, alreadyAdded, star, comment])

  useEffect(() => {
    setAlreadyAdded(false)
    for (let i = 0; i < userCartState?.length; i++) {
      if (getId === userCartState[i]?.productId?._id) {
        setAlreadyAdded(true)
        setColor(null)
      }
    }
  })

  const props = {
    width: 400,
    height: 570,
    zoomWidth: 600,
    img: `${item?.images[0]?.url}`
  }

  return (
    <>
      <BreadCrumb title={item?.title} />

      <Container class1='main-product-wrapper section-background py-5'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-product-image'>
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className='other-product-image gap-15 d-flex flex-wrap'>
              <div>
                <img
                  loading='lazy'
                  className='img-fluid'
                  alt='product'
                  src={item?.images[0]?.url}
                />
              </div>
              <div>
                <img
                  loading='lazy'
                  className='img-fluid'
                  alt='product'
                  src={`${item?.images[0]?.url}`}
                />
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='main-product-details'>
              <div className='border-bottom'>
                <h3>{item?.title}</h3>
              </div>
              <div className='py-3'>
                <p className='price'>$ {item?.price}</p>

                <div
                  className='d-flex align-items-center rr stspan justify-content-between'
                  style={{ margin: '10px auto' }}
                >
                  <div className='flex-center'>
                    {Number(item?.totalrating) > 0 && (
                      <ReactStars
                        count={5}
                        value={Number(item?.totalrating)}
                        size={24}
                        edit={false}
                        isHalf={true}
                        activeColor='#ffd700'
                      />
                    )}
                    {!Number(item?.totalrating) && (
                      <ReactStars
                        count={5}
                        value={Number(item?.totalrating)}
                        size={24}
                        edit={false}
                        isHalf={true}
                        activeColor='#ffd700'
                      />
                    )}
                    &nbsp; &nbsp;
                    <p className='mb-0 t-review'>
                      ({item?.ratings?.length} Reviews)
                    </p>
                  </div>

                  <a className='review-btn red-color' href='#review'>
                    Write a Review
                  </a>
                </div>
              </div>
              <div className='py-3'>
                <div className='d-flex gap-10 my-2 align-items-center'>
                  <h3 className='mb-0 product-heading'>Type :</h3>
                  <p className='mb-0 product-data'>{item?.category}</p>
                </div>

                <div className='d-flex gap-10 my-2 align-items-center'>
                  <h3 className='mb-0 product-heading'>Brand :</h3>
                  <p className='mb-0 product-data'>{item?.brand}</p>
                </div>

                <div className='d-flex gap-10 my-2 align-items-center'>
                  <h3 className='mb-0 product-heading'>Category :</h3>
                  <p className='mb-0 product-data'>{item?.category}</p>
                </div>

                <div className='d-flex gap-10 my-2 align-items-center'>
                  <h3 className='mb-0 product-heading'>Price :</h3>
                  <p className='mb-0 product-data'>{item?.price}</p>
                </div>

                <div className='d-flex gap-10 my-2 align-items-center'>
                  <h3 className='mb-0 product-heading'>Tags :</h3>
                  <p className='mb-0 product-data'>{item?.tags}</p>
                </div>

                <div className='d-flex gap-10 my-2 align-items-center'>
                  <h3 className='mb-0 product-heading'>Quantity :</h3>
                  <p className='mb-0 product-data'>{item?.quantity}</p>
                </div>

                <div className='d-flex gap-10 my-2 align-items-center'>
                  <h3 className='mb-0 product-heading'>Availablity :</h3>
                  <p className='mb-0 product-data'>In Stock</p>
                </div>

                <div className='d-flex gap-10 my-2 flex-column mb-3 mt-2'>
                  <h3 className='mb-0 product-heading'>Size :</h3>
                  <div className='d-flex flex-wrap gap-10'>
                    <span className='badge border border-1 text-dark bg-white border-secondary'>
                      S
                    </span>
                    <span className='badge border border-1 text-dark bg-white border-secondary'>
                      M
                    </span>
                    <span className='badge border border-1 text-dark bg-white border-secondary'>
                      L
                    </span>
                    <span className='badge border border-1 text-dark bg-white border-secondary'>
                      XL
                    </span>
                    <span className='badge border border-1 text-dark bg-white border-secondary'>
                      XXl
                    </span>
                  </div>
                </div>

                {alreadyAdded === false && (
                  <div className='d-flex justify-content-around'>
                    <div className='d-flex  gap-10 my-2 mb-3 mt-2'>
                      <h3 className='mb-0 product-heading'>Color :</h3>
                      <Colors colorData={item?.color} setColor={setColor} />
                    </div>

                    <div className='d-flex align-items-center gap-10 my-2 mb-3 mt-2'>
                      <h3 className='mb-0 product-heading'>Quantity :</h3>
                      <div className='d-flex gap-30'>
                        <div>
                          <input
                            type='number'
                            className='form-control align-items-center'
                            style={{ width: '70px' }}
                            defaultValue={1}
                            min={1}
                            max={item?.quantity}
                            onChange={e => setQuantity(e.target.value)}
                            value={quantity}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div
                  style={{ margin: ' 10px auto 20px' }}
                  className='gap-15 d-flex align-items-center'
                >
                  <button
                    type='button'
                    className='SPbtn'
                    onClick={() => {
                      {
                        alreadyAdded ? navigate('/cart') : AddToCart()
                      }
                    }}
                  >
                    {alreadyAdded ? 'Go To Cart' : 'Add To Cart'}
                  </button>
                </div>

                <div className='gap-15 d-flex align-items-center'>
                  <div></div>
                  <div>
                    <button
                      className='d-flex align-items-center gray-color spafc'
                      onClick={e => {
                        if (addTowishlistt) {
                          toast.success(`Added Successfullly!`)
                        } else {
                          toast.error(`Some Things Went Wrong!`)
                        }
                        addTowishlistt(item?._id)
                      }}
                      to='/wishlist'
                    >
                      <IoMdHeartEmpty className='fs-5' />
                      &nbsp; Add To Wishlist
                    </button>
                  </div>
                </div>

                <DataOfSingleProduct />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Discription */}
      <Container class1='descriptionSP section-background py-5'>
        <div className='row'>
          <div className='col-12'>
            <h4>Description</h4>
            <div className='bg-white p-3 br-6'>
              <p
                dangerouslySetInnerHTML={{
                  __html: item?.description
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>

      {/* Rewiew */}
      <Container class1='section-background review-section-wrapper'>
        <div className='row'>
          <div className='col-12'>
            <h4 id='review'>Reviews</h4>
            <div className='review-inner-wrapper'>
              <div className='review-head border-bottom p-3 bg-white d-flex align-items-end justify-content-between'>
                <div>
                  <h4 className='mb-2'>Customer Reviews</h4>
                  <div className='gap-10 d-flex align-items-center'>
                    {Number(item?.totalrating) > 0 && (
                      <ReactStars
                        count={5}
                        value={Number(item?.totalrating)}
                        size={24}
                        edit={false}
                        isHalf={true}
                        activeColor='#ffd700'
                      />
                    )}
                    {!Number(item?.totalrating) && (
                      <ReactStars
                        count={5}
                        value={Number(item?.totalrating)}
                        size={24}
                        edit={false}
                        isHalf={true}
                        activeColor='#ffd700'
                      />
                    )}

                    <p className='mb-0'>
                      Based On {item?.ratings?.length} Reviews
                    </p>
                  </div>
                </div>
                {orderProduct && (
                  <div>
                    <a
                      href='#review'
                      className='text-dark text-decoration-underline'
                    >
                      Write a review
                    </a>
                  </div>
                )}
              </div>

              <div className='review-form border-bottom py-5 '>
                <h4 className='mb-2'>Write a Review</h4>
                <div className='p-30' id='write'>
                  <div className='d-flex'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={star}
                      activeColor='#ffd700'
                      onChange={e => {
                        setStar(e)
                      }}
                    />
                  </div>
                  <textarea
                    className='input-contact'
                    placeholder='Comment'
                    onChange={e => {
                      setComment(e.target.value)
                    }}
                  />
                  <div className='d-flex justify-content-end'>
                    <button
                      onClick={addRatingToProduct}
                      type='buttton'
                      className='buttonOfContact typeOfWordOfContact'
                    ></button>
                  </div>
                </div>
              </div>

              <div className='reviews mt-4'>
                {item?.ratings.map((items, index) => {
                  return (
                    <div key={index} className='review'>
                      <div className='d-flex align-items-center'>
                        <h6 className='mb-0'>{items?.name}</h6> &nbsp;
                        <ReactStars
                          count={5}
                          size={24}
                          activeColor='#ffd700'
                          value={Number(items?.star)}
                        />
                      </div>
                      <p>{items?.comment}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Our Popular Products */}
      <Container class1='section-background  popular-wraper  py-5'>
        <div className='col-12'>
          <h3 className='section-heading'>Our Popular Products</h3>
        </div>

        <div className='feature d-flex blogsOfHomeD'>
          {productState?.map((item2, index) => {
            if (item2?.tags == 'popular') {
              return <ProductCard item2={item2} key={index} />
            }
          })}
        </div>
      </Container>
    </>
  )
}

export default SingleProduct
