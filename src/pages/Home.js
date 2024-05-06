import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProducts from '../components/SpecialProducts'
import Container from '../components/Container'
import { services } from '../components/Data'
import { useDispatch, useSelector } from 'react-redux'
import { getproducts } from '../features/products/productSlice'
import { getblogs } from '../features/blogs/blogSlice'
import '../css/Home.css'

function Home () {
  const dispatch = useDispatch()

  const productState = useSelector(state => state?.product?.product)
  const blogState = useSelector(state => state?.blog?.blogs)

console.log(productState)

  useEffect(() => {
    dispatch(getproducts())
    dispatch(getblogs())
  }, [])

  return (
    <>
      <Container class1='home-wrapper  py-5'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img
                loading='lazy'
                className='big-img'
                src='images/main-banner-1.jpg'
                alt='main-banner'
              />
              <div className='main-banner-content position-absolute'>
                <h4>supercharges for pros.</h4>
                <h5>I pad S13+ Pro</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className='buy' to='#'>
                  <i className='animation'></i>Buy now
                  <i className='animation'></i>
                </Link>
              </div>
            </div>
          </div>

          <div className='col-6'>
            <div className='between-center flex-wrap gap-10'>
              <div className='small-banner w-49 position-relative '>
                <img
                  loading='lazy'
                  className='img-fluid'
                  style={{ borderRadius: '10px' }}
                  src='images/catbanner-01.jpg'
                  alt='small-banner w-49'
                />
                <div className='small-banner details '>
                  <h4>Best Sale</h4>
                  <h5>Laptops Max</h5>
                  <p>From $769.00 or $71.62/mo.</p>
                  <Link className='buy' to='#'>
                    <i className='animation'></i>Buy now
                    <i className='animation'></i>
                  </Link>
                </div>
              </div>
              <div className='small-banner w-49 position-relative '>
                <img
                  loading='lazy'
                  className='img-fluid'
                  style={{ borderRadius: '10px' }}
                  src='images/catbanner-01.jpg'
                  alt='small-banner w-49'
                />
                <div className='small-banner details '>
                  <h4>Best Sale</h4>
                  <h5>Laptops Max</h5>
                  <p>From $769.00 or $71.62/mo.</p>
                  <Link className='buy' to='#'>
                    <i className='animation'></i>Buy now
                    <i className='animation'></i>
                  </Link>
                </div>
              </div>
              <div className='small-banner w-49 position-relative '>
                <img
                  loading='lazy'
                  className='img-fluid'
                  style={{ borderRadius: '10px' }}
                  src='images/catbanner-01.jpg'
                  alt='small-banner w-49'
                />
                <div className='small-banner details '>
                  <h4>Best Sale</h4>
                  <h5>Laptops Max</h5>
                  <p>From $769.00 or $71.62/mo.</p>
                  <Link className='buy' to='#'>
                    <i className='animation'></i>Buy now
                    <i className='animation'></i>
                  </Link>
                </div>
              </div>
              <div className='small-banner w-49 position-relative '>
                <img
                  loading='lazy'
                  className='img-fluid'
                  style={{ borderRadius: '10px' }}
                  src='images/catbanner-01.jpg'
                  alt='small-banner w-49'
                />
                <div className='small-banner details '>
                  <h4>Best Sale</h4>
                  <h5>Laptops Max</h5>
                  <p>From $769.00 or $71.62/mo.</p>
                  <Link className='buy' to='#'>
                    <i className='animation'></i>Buy now
                    <i className='animation'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Services */}
      <Container class1='section-background  py-5'>
        <div className='mt-4 services d-flex justify-content-around align-items-center gap-10'>
          {services?.map((i, j) => {
            return (
              <div className='flex-center  service'>
                <div>
                  <img
                    loading='lazy'
                    src={i.image}
                    key={j}
                    alt='Surprise'
                    className='flex-center'
                  />
                </div>
                <div>
                  <h4>{i.tittle}</h4>
                  <h5>{i.tagLine}</h5>
                </div>
              </div>
            )
          })}
        </div>
      </Container>

      {/* -------Suggestions---- */}
      <Container class1='section-background  py-5'>
        <div
          style={{ borderRadius: '10px' }}
          className='bg-white container section2 position-relative main-banner-content2 '
        >
          <div className='small-banner w-49-content2  d-flex '>
            <div>
              <h4>Computer & Laptops</h4>
              <h6 style={{ color: '#a0a0a0' }}>8 items</h6>
            </div>
            <div>
              <img
                loading='lazy'
                className='img-fluid'
                src='images/laptop.jpg'
                alt='Computer and Laptops'
              />
            </div>
          </div>
          <div className='small-banner w-49-content2  d-flex '>
            <div>
              <h4>Cameras & Videos</h4>
              <h6 style={{ color: '#a0a0a0' }}>10 items</h6>
            </div>
            <div>
              <img
                loading='lazy'
                className='img-fluid'
                src='images/camera.jpg'
                alt='Cameras & Videos'
              />
            </div>
          </div>
          <div className='small-banner w-49-content2  d-flex '>
            <div>
              <h4>Smart Television</h4>
              <h6 style={{ color: '#a0a0a0' }}>12 items</h6>
            </div>
            <div>
              <img
                loading='lazy'
                className='img-fluid'
                src='images/tv.jpg'
                alt='Television'
              />
            </div>
          </div>
          <div className='small-banner w-49-content2  d-flex '>
            <div>
              <h4>Smart Watches</h4>
              <h6 style={{ color: '#a0a0a0' }}>8 items</h6>
            </div>
            <div>
              <img
                loading='lazy'
                className='img-fluid'
                src='images/watch.jpg'
                alt='Smart Watches'
              />
            </div>
          </div>
          <div className='small-banner w-49-content2  d-flex '>
            <div>
              <h4>Music and Gaming</h4>
              <h6 style={{ color: '#a0a0a0' }}>8 items</h6>
            </div>
            <div>
              <img
                loading='lazy'
                className='img-fluid'
                src='images/laptop.jpg'
                alt='Music and Gaming'
              />
            </div>
          </div>
          <div className='small-banner w-49-content2  d-flex '>
            <div>
              <h4>Mobile and Tablets</h4>
              <h6 style={{ color: '#a0a0a0' }}>8 items</h6>
            </div>
            <div>
              <img
                loading='lazy'
                className='img-fluid'
                src='images/laptop.jpg'
                alt='Mobile and Tablets'
              />
            </div>
          </div>
          <div className='small-banner w-49-content2  d-flex '>
            <div>
              <h4>Portable Speakers</h4>
              <h6 style={{ color: '#a0a0a0' }}>8 items</h6>
            </div>
            <div>
              <img
                loading='lazy'
                className='img-fluid'
                src='images/speaker.jpg'
                alt='Computer and Laptops'
              />
            </div>
          </div>
          <div className='small-banner w-49-content2  d-flex '>
            <div>
              <h4>Home Aimg-fluidllance</h4>
              <h6 style={{ color: '#a0a0a0' }}>8 items</h6>
            </div>
            <div>
              <img
                loading='lazy'
                className='img-fluid'
                src='images/homeaimg-fluid.jpg'
                alt='Computer and Laptops'
              />
            </div>
          </div>
          <div className='small-banner w-49-content2  d-flex '>
            <div>
              <h4>Headphone</h4>
              <h6 style={{ color: '#a0a0a0' }}>8 items</h6>
            </div>
            <div>
              <img
                loading='lazy'
                className='img-fluid'
                src='images/laptop.jpg'
                alt='Computer and Laptops'
              />
            </div>
          </div>
          <div className='small-banner w-49-content2  d-flex '>
            <div>
              <h4>Accessories</h4>
              <h6 style={{ color: '#a0a0a0' }}>8 items</h6>
            </div>
            <div>
              <img
                loading='lazy'
                className='img-fluid'
                src='images/laptop.jpg'
                alt='Computer and Laptops'
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Our Feature Products */}
      <Container class1='section-background  popular-wraper  py-5'>
        <div className='col-12'>
          <h3 className='section-heading'>Our Feature Products</h3>
        </div>
        <div className='feature d-flex blogsOfHomeD'>
          {productState?.map((item2, index) => {
            if (item2?.tags == 'featured') {
              return <ProductCard item2={item2} key={index} />
            }
          })}
        </div>
      </Container>

      {/* Famous Product */}
      <Container class1='section-background famous-product-section py-5'>
        <div className='row'>
          <div className='col-3 dark-famous-product'>
            <div className='famous-card position-relative'>
              <img
                loading='lazy'
                alt='famous Product'
                src='images/famous-01.jpeg'
                className='img-fluid'
              />
            </div>
            <div className='position-relative famous-content'>
              <h5>Big Screen</h5>
              <h6>Smart Watches Series</h6>
              <p>From 1.95$ to 5.06$</p>
            </div>
          </div>
          <div className='col-3 '>
            <div className='famous-card position-relative'>
              <img
                loading='lazy'
                alt='famous Product'
                src='images/tab1.jpg'
                className='img-fluid'
              />
            </div>
            <div className='position-relative famous-content'>
              <h5>Big Screen</h5>
              <h6>Smart Watches Series</h6>
              <p>From 1.95$ to 5.06$</p>
            </div>
          </div>
          <div className='col-3 '>
            <div className='famous-card position-relative'>
              <img
                loading='lazy'
                alt='famous Product'
                src='images/tab1.jpg'
                className='img-fluid'
              />
            </div>
            <div className='position-relative famous-content'>
              <h5>Big Screen</h5>
              <h6>Smart Watches Series</h6>
              <p>From 1.95$ to 5.06$</p>
            </div>
          </div>
          <div className='col-3 '>
            <div className='famous-card position-relative'>
              <img
                loading='lazy'
                alt='famous Product'
                src='images/tab1.jpg'
                className='img-fluid'
              />
            </div>
            <div className='position-relative famous-content'>
              <h5>Big Screen</h5>
              <h6>Smart Watches Series</h6>
              <p>From 1.95$ to 5.06$</p>
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

      {/* special Product */}
      <Container class1='section-background special-product-section py-5'>
        <div className='col-12'>
          <h3 className='section-heading'>Special Products</h3>
        </div>
        <div className='row'>
          {productState?.map((item, index) => {
            if (item?.tags == 'special') {
              return <SpecialProducts item={item} key={index} />
            }
          })}
        </div>
      </Container>

      {/* --Marquee-- */}
      <Container class1='section-background marquee-section py-5'>
        <div className='col-12'>
          <div className='marquee-content card-wraimg-fluider bg-white p-3'>
            <Marquee>
              <div>
                <img
                  loading='lazy'
                  alt='brand'
                  className='w-50 mx-4'
                  src='images/brand-01.png'
                />
              </div>
              <div>
                <img
                  loading='lazy'
                  alt='brand'
                  className='w-50 mx-4'
                  src='images/brand-02.png'
                />
              </div>
              <div>
                <img
                  loading='lazy'
                  alt='brand'
                  className='w-50 mx-4'
                  src='images/brand-03.png'
                />
              </div>
              <div>
                <img
                  loading='lazy'
                  alt='brand'
                  className='w-50 mx-4'
                  src='images/brand-04.png'
                />
              </div>
              <div>
                <img
                  loading='lazy'
                  alt='brand'
                  className='w-50 mx-4'
                  src='images/brand-05.png'
                />
              </div>
              <div>
                <img
                  loading='lazy'
                  alt='brand'
                  className='w-50 mx-4'
                  src='images/brand-06.png'
                />
              </div>
              <div>
                <img
                  loading='lazy'
                  alt='brand'
                  className='w-50 mx-4'
                  src='images/brand-07.png'
                />
              </div>
              <div>
                <img
                  loading='lazy'
                  alt='brand'
                  className='w-50 mx-4'
                  src='images/brand-08.png'
                />
              </div>
            </Marquee>
          </div>
        </div>
      </Container>

      {/* --Blog-- */}
      <Container class1=' section-background blog-section py-5'>
        <div className='col-12'>
          <h3 className='section-heading'>Our Latest Blogs</h3>
        </div>
        <div className='row blogsOfHomeD '>
          <BlogCard data={blogState} />
        </div>
      </Container>
    </>
  )
}

export default Home
