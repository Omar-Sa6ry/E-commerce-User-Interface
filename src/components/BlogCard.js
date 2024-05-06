import React from 'react'
import Moment from 'react-moment'
import { Link, useLocation } from 'react-router-dom'

const calendarStrings = {
  lastDay: '[Yesterday at] LT',
  sameDay: '[Today at] LT',
  nextDay: '[Tomorrow at] LT',
  lastWeek: '[last] dddd [at] LT',
  nextWeek: 'dddd [at] LT',
  sameElse: 'L'
}

const BlogCard = props => {
  const { data } = props
  const location = useLocation()

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`bg-white  ${
              location?.pathname === '/blogs' ? `gr-6 blog-page` : 'gr-3'
            }`}
          >
            <div className='blog-wrapper-6'>
              <div
                style={{ borderRadius: '10px' }}
                className='blog-cart bg-white'
              >
                <div className='card-image'>
                  <img
                    loading='lazy'
                    style={{ borderRadius: '6px' }}
                    className='img-fluid w-100 h-330'
                    src={item?.images[0]?.url}
                    alt='blog'
                  />
                  {/* </Link> */}
                </div>
                <div className='p-4'>
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
                      description: &nbsp;
                      <span
                        className='active-color overflow-hidden diph'
                        style={{ marginTop: '10px', fontSize: '15px' }}
                        dangerouslySetInnerHTML={{
                          __html: item?.description?.substr(0, 70)
                        }}
                      ></span>
                    </span>
                  </div>

                  <div className='w-100 d-flex justify-content-start'>
                    <span
                      style={{ margin: '10px 0px 5px', display: 'block' }}
                      className='w-100 pink-color'
                    >
                      Created At: &nbsp;
                      <span
                        className='active-color'
                        style={{ marginTop: '10px', fontSize: '15px' }}
                      >
                        <Moment calendar={calendarStrings}>
                          {item?.createdAt}
                        </Moment>
                      </span>
                    </span>
                  </div>

                  <Link
                    className='readMore'
                    to={`${
                      location.pathname === '/blogs'
                        ? `${item?._id}`
                        : `blogs/${item?._id}`
                    }`}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default BlogCard
