import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../features/products/productSlice'
import { toast } from 'react-toastify'
import { FaRegHeart } from 'react-icons/fa6'
import { addToCart } from '../features/user/userSlice'
import Colors from './Colors'

// Card Fecture Class is Only Class where is in App.css

function ProductCard (props) {
  const location = useLocation()
  const dispatch = useDispatch()

  const { grid, data, item2 } = props
  const [color, setColor] = useState(null)

  let data2 = []
  if (!data) {
    data2.push(item2)
  }

  const addTowishlistt = id => {
    dispatch(addToWishlist(id))
  }

  return (
    <>
      {(data ? data : data2).map((item, index) => {
        console.log(item?.images)
        return (
          <>
            <div
              key={index}
              className={` ${
                location.pathname === '/product' ? `gr-${grid}` : 'gr-3'
              }`}
            >
              <Link to={`/product/${item?._id}`} className='w-100'>
                <div className='compare-product-card position-relative '>
                  <div style={{ marginTop: '10px' }} className='share w-100'>
                    <button
                      onClick={e => {
                        if (addTowishlistt) {
                          toast.success(`Added Successfullly!`)
                        } else {
                          toast.error(`Some Things Went Wrong!`)
                        }
                        addTowishlistt(item?._id)
                      }}
                      to='/wishlist'
                      className='bhp'
                    >
                      <FaRegHeart />
                    </button>
                  </div>

                  <div className='imgF'>
                    <img
                      loading='lazy'
                      className='img-fluid2'
                      alt='Featured'
                      src={item?.images[0]?.url}
                    />
                  </div>

                  <div className='compare-product-details'>
                    <div className='w-100 d-flex justify-content-start'>
                      <span
                        style={{ margin: '10px 0px 5px', display: 'block' }}
                        className='w-100 pink-color'
                      >
                        Name: &nbsp;
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
                        Brand: &nbsp;
                        <span
                          className='active-color'
                          style={{ marginTop: '10px', fontSize: '15px' }}
                        >
                          {item?.brand}
                        </span>
                      </span>
                    </div>

                    <div
                      className='d-flex  stspan'
                      style={{ margin: '10px auto' }}
                    >
                      <ReactStars
                        count={5}
                        value={Number(item?.totalrating.toString)}
                        ze={24}
                        activeColor='#ffd700'
                      />
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
              </Link>
            </div>
          </>
        )
      })}
    </>
  )
}
export default ProductCard
