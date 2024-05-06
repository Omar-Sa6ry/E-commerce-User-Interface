import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
import ShopByCatagories from '../components/ShopByCatagories'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getblogs } from '../features/blogs/blogSlice'

const Blogs = () => {
  const dispatch = useDispatch()

  const blogState = useSelector(state => state?.blog?.blogs)

  useEffect(() => {
  dispatch(getblogs())
  }, [])

  return (
    <>
      <BreadCrumb title='Blogs' />
      <Container class1='store-wrapper section-background py-5'>
        <div className='row'>
          <ShopByCatagories />
          <div className='col-9'>
            <div style={{ gap: '1%' }} className='row'>
              <BlogCard data={blogState} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blogs
