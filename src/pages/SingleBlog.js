import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Moment from 'react-moment'
import ShopByCatagories from '../components/ShopByCatagories'
import { MdKeyboardBackspace } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import Container from '../components/Container'
import { getAblog } from '../features/blogs/blogSlice'
import { useDispatch, useSelector } from 'react-redux'
import '../css/SingleBlog.css'

const calendarStrings = {
  lastDay: '[Yesterday at] LT',
  sameDay: '[Today at] LT',
  nextDay: '[Tomorrow at] LT',
  lastWeek: '[last] dddd [at] LT',
  nextWeek: 'dddd [at] LT',
  sameElse: 'L'
}

const SingleBlog = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const getId = location?.pathname?.split('/')[2]

  const item = useSelector(state => state?.blog?.SingleBlog)

  useEffect(() => {
    dispatch(getAblog(getId))
  }, [])

  return (
    <>
      <div>
        <BreadCrumb title={item?.title} />
        <Container class1='store-wrapper single-blog section-background py-5'>
          <div className='row'>
            <ShopByCatagories />
            <div className='col-9'>
              <div className='single-blog-card'>
                <Link className='d-flex align-items-center gap-10' to='/blogs'>
                  <MdKeyboardBackspace
                    style={{ width: '20px' }}
                    className='fs-4'
                  />
                  Go Back Blogs
                </Link>
                <div>
                  <h3 className='title'>{item?.title}</h3>

                  <img
                    loading='lazy'
                    className='w-100 img-fluid my-4 br-6'
                    alt='blog'
                    src={item?.images[0]?.url}
                  />

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
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default SingleBlog
