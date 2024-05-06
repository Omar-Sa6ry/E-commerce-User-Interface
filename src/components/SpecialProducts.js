import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
// 3.17
const specialProducts = props => {
  const { item } = props

  return (
    <>
      <div className='col-4 mb-3'>
        <div className='special-product-card bg-white'>
          <div className='d-flex justify-content-between'>
            <Link to={`/product/${item?._id}`} style={{ marginRight: '10px' }}>
              <img
                loading='lazy'
                alt='watch'
                className='img-fluid'
                src={item?.images[0].url}
              />
            </Link>
            <div className='special-content-product'>
              <h5>{item?.title}</h5>
              <h6>{item?.brand}</h6>
              <h6 dangerouslySetInnerHTML={{ __html: item?.description }}></h6>
              <div className='d-flex stspan' style={{ margin: '10px auto' }}>
                <ReactStars
                  count={5}
                  value={Number(item?.totalrating.toString)}
                  ze={24}
                  activeColor='#ffd700'
                />
              </div>

              <p>
                <span className='red-p'>$100</span>&nbsp;
                <strike>${item?.price}</strike>
              </p>
              <div className='discount-till gap-10 d-flex align-items-center'>
                <p className='mb-0'>
                  <b>5</b>days
                </p>
                <div
                  className=' d-flex align-align-items-center'
                  style={{ gap: '10px' }}
                >
                  <span className='badge rounded-circle p-3 bg-warning'>1</span>
                  :
                  <span className='badge rounded-circle p-3 bg-warning'>2</span>
                  :
                  <span className='badge rounded-circle p-3 bg-warning'>3</span>
                </div>
              </div>
              <div className='product-count mt-3'>
                <p>Product: {item?.quantity}</p>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{
                      width:
                        item?.quantity / item?.quantity + item?.sold * 100 + '%'
                    }}
                    aria-valuenow={
                      item?.quantity / item?.quantity + item?.sold * 100
                    }
                    aria-valuemin={item?.quantity}
                    aria-valuemax={item?.sold + item?.quantity}
                  ></div>
                </div>
              </div>
              <Link className='cssbuttons-io'>
                <span>Add To Cart </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default specialProducts
