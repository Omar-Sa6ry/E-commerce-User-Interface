import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getAllColors, getproducts } from '../features/products/productSlice'
import '../css/ourStore.css'

const OurStore = () => {
  const dispatch = useDispatch()

  const [grid, setGrid] = useState(4)
  const [tag, setTag] = useState([])
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [minPrice, setMinPrice] = useState(null)
  const [maxPrice, setMaxPrice] = useState(null)
  const [sort, setSort] = useState(null)

  const productState = useSelector(state => state?.product?.product)
  const colorState = useSelector(state => state?.product?.colors)

  const getAllProducts = () => {
    dispatch(getproducts({ sort, tag, brands, categories, minPrice, maxPrice }))
  }

  useEffect(() => {
    getAllProducts()
  }, [])
  useEffect(() => {
    let tages = []
    let brand = []
    let category = []

    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index]
      tages.push(element?.tags)
      brand.push(element?.brand)
      category.push(element?.category)
    }

    setTag(tages)
    setBrands(brand)
    setCategories(category)
  }, [productState])

  useEffect(() => {
    dispatch(getAllColors())
  }, [])

  return (
    <>
      <BreadCrumb title='Our Store' />
      <Container class1='store-wrapper section-background py-5'>
        <div className='row'>
          {/*           
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Shop By Catagories</h3>
              <div>
                <ul>
                  {categories?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => {
                          setCategories(item)
                        }}
                        className='capital badge bg-light text-secondary rounded-3'
                      >
                        {item}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Product Brands</h3>
              <div>
                <ul>
                  {brands &&
                    [...new Set(brands)]?.map((item, index) => {
                      return (
                        <li
                          className='capital badge bg-light text-secondary rounded-3'
                          onClick={() => {
                            setBrands(item)
                          }}
                          key={index}
                        >
                          {item}
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>

            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Filter By</h3>
              <h5 className='sub-title'>Availablity By</h5>
              <div className='checkbox-wrapper'>
                <input id='terms-checkbox-3' name='checkbox' type='checkbox' />
                <label className='terms-label' htmlFor='terms-checkbox-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 200 200'
                    className='checkbox-svg'
                  >
                    <mask fill='white' id='path-1-inside-1_476_5-37'>
                      <rect height='200' width='200'></rect>
                    </mask>
                    <rect
                      mask='url(#path-1-inside-1_476_5-37)'
                      strokeWidth='40'
                      className='checkbox-box'
                      height='200'
                      width='200'
                    ></rect>
                    <path
                      strokeWidth='15'
                      d='M52 111.018L76.9867 136L149 64'
                      className='checkbox-tick'
                    ></path>
                  </svg>
                  <span className='label-text'>In Stock(1)</span>
                </label>
                <input id='terms-checkbox-4' name='checkbox' type='checkbox' />
                <label className='terms-label' htmlFor='terms-checkbox-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 200 200'
                    className='checkbox-svg'
                  >
                    <mask fill='white' id='path-1-inside-1_476_5-37'>
                      <rect height='200' width='200'></rect>
                    </mask>
                    <rect
                      mask='url(#path-1-inside-1_476_5-37)'
                      strokeWidth='40'
                      className='checkbox-box'
                      height='200'
                      width='200'
                    ></rect>
                    <path
                      strokeWidth='15'
                      d='M52 111.018L76.9867 136L149 64'
                      className='checkbox-tick'
                    ></path>
                  </svg>
                  <span className='label-text'>Out Of Stock (0)</span>
                </label>
              </div>
              <h5 className='sub-title'>Price</h5>
              <div className='d-flex justify-content-center align-items-center gap-10 from-to'>
                <div className='form-floating mb-3'>
                  <input
                    type='number'
                    className='form-control'
                    id='floatingInput'
                    placeholder='From'
                    onChange={e => {
                      setMinPrice(e.target.value)
                    }}
                  />
                  <label htmlFor='floatingInput'>From</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    type='number'
                    className='form-control'
                    id='floatingInputt'
                    placeholder='To'
                    onChange={e => {
                      setMaxPrice(e.target.value)
                    }}
                  />
                  <label htmlFor='floatingInputt'>To</label>
                </div>
              </div>
              <h5 className='sub-title'>Colors</h5>
              <div className='d-flex flex-wrap'>
                <ul className='colors d-flex flex-wrap gap-10'>
                  {colorState &&
                    colorState?.map((item, index) => {
                      return (
                        <li
                          style={{ backgroundColor: `${item?.title}` }}
                          key={index}
                        ></li>
                      )
                    })}
                </ul>
              </div>
              <h5 className='sub-title'>Size</h5>
              <div className='checkbox-wrapper'>
                <input
                  id='terms-checkbox-201'
                  name='checkbox'
                  type='checkbox'
                />
                <label className='terms-label' htmlFor='terms-checkbox-201'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 200 200'
                    className='checkbox-svg'
                  >
                    <mask fill='white' id='path-1-inside-1_476_5-37'>
                      <rect height='200' width='200'></rect>
                    </mask>
                    <rect
                      mask='url(#path-1-inside-1_476_5-37)'
                      strokeWidth='40'
                      className='checkbox-box'
                      height='200'
                      width='200'
                    ></rect>
                    <path
                      strokeWidth='15'
                      d='M52 111.018L76.9867 136L149 64'
                      className='checkbox-tick'
                    ></path>
                  </svg>
                  <span className='label-text'>In Stock(1)</span>
                </label>
                <input id='terms-checkbox-5' name='checkbox' type='checkbox' />
                <label className='terms-label' htmlFor='terms-checkbox-5'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 200 200'
                    className='checkbox-svg'
                  >
                    <mask fill='white' id='path-1-inside-1_476_5-37'>
                      <rect height='200' width='200'></rect>
                    </mask>
                    <rect
                      mask='url(#path-1-inside-1_476_5-37)'
                      strokeWidth='40'
                      className='checkbox-box'
                      height='200'
                      width='200'
                    ></rect>
                    <path
                      strokeWidth='15'
                      d='M52 111.018L76.9867 136L149 64'
                      className='checkbox-tick'
                    ></path>
                  </svg>
                  <span className='label-text'>In Stock(1)</span>
                </label>
                <input id='terms-checkbox-6' name='checkbox' type='checkbox' />
                <label className='terms-label' htmlFor='terms-checkbox-6'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 200 200'
                    className='checkbox-svg'
                  >
                    <mask fill='white' id='path-1-inside-1_476_5-37'>
                      <rect height='200' width='200'></rect>
                    </mask>
                    <rect
                      mask='url(#path-1-inside-1_476_5-37)'
                      strokeWidth='40'
                      className='checkbox-box'
                      height='200'
                      width='200'
                    ></rect>
                    <path
                      strokeWidth='15'
                      d='M52 111.018L76.9867 136L149 64'
                      className='checkbox-tick'
                    ></path>
                  </svg>
                  <span className='label-text'>In Stock(1)</span>
                </label>
                <input id='terms-checkbox-7' name='checkbox' type='checkbox' />
                <label className='terms-label' htmlFor='terms-checkbox-7'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 200 200'
                    className='checkbox-svg'
                  >
                    <mask fill='white' id='path-1-inside-1_476_5-37'>
                      <rect height='200' width='200'></rect>
                    </mask>
                    <rect
                      mask='url(#path-1-inside-1_476_5-37)'
                      strokeWidth='40'
                      className='checkbox-box'
                      height='200'
                      width='200'
                    ></rect>
                    <path
                      strokeWidth='15'
                      d='M52 111.018L76.9867 136L149 64'
                      className='checkbox-tick'
                    ></path>
                  </svg>
                  <span className='label-text'>In Stock(1)</span>
                </label>
                <input id='terms-checkbox-8' name='checkbox' type='checkbox' />
                <label className='terms-label' htmlFor='terms-checkbox-8'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 200 200'
                    className='checkbox-svg'
                  >
                    <mask fill='white' id='path-1-inside-1_476_5-37'>
                      <rect height='200' width='200'></rect>
                    </mask>
                    <rect
                      mask='url(#path-1-inside-1_476_5-37)'
                      strokeWidth='40'
                      className='checkbox-box'
                      height='200'
                      width='200'
                    ></rect>
                    <path
                      strokeWidth='15'
                      d='M52 111.018L76.9867 136L149 64'
                      className='checkbox-tick'
                    ></path>
                  </svg>
                  <span className='label-text'>In Stock(1)</span>
                </label>
                <input id='terms-checkbox-9' name='checkbox' type='checkbox' />
                <label className='terms-label' htmlFor='terms-checkbox-9'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 200 200'
                    className='checkbox-svg'
                  >
                    <mask fill='white' id='path-1-inside-1_476_5-37'>
                      <rect height='200' width='200'></rect>
                    </mask>
                    <rect
                      mask='url(#path-1-inside-1_476_5-37)'
                      strokeWidth='40'
                      className='checkbox-box'
                      height='200'
                      width='200'
                    ></rect>
                    <path
                      strokeWidth='15'
                      d='M52 111.018L76.9867 136L149 64'
                      className='checkbox-tick'
                    ></path>
                  </svg>
                  <span className='label-text'>In Stock(1)</span>
                </label>
                <input id='terms-checkbox-10' name='checkbox' type='checkbox' />
                <label className='terms-label' htmlFor='terms-checkbox-10'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 200 200'
                    className='checkbox-svg'
                  >
                    <mask fill='white' id='path-1-inside-1_476_5-37'>
                      <rect height='200' width='200'></rect>
                    </mask>
                    <rect
                      mask='url(#path-1-inside-1_476_5-37)'
                      strokeWidth='40'
                      className='checkbox-box'
                      height='200'
                      width='200'
                    ></rect>
                    <path
                      strokeWidth='15'
                      d='M52 111.018L76.9867 136L149 64'
                      className='checkbox-tick'
                    ></path>
                  </svg>
                  <span className='label-text'>In Stock(1)</span>
                </label>
                <input id='terms-checkbox-11' name='checkbox' type='checkbox' />
                <label className='terms-label' htmlFor='terms-checkbox-11'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 200 200'
                    className='checkbox-svg'
                  >
                    <mask fill='white' id='path-1-inside-1_476_5-37'>
                      <rect height='200' width='200'></rect>
                    </mask>
                    <rect
                      mask='url(#path-1-inside-1_476_5-37)'
                      strokeWidth='40'
                      className='checkbox-box'
                      height='200'
                      width='200'
                    ></rect>
                    <path
                      strokeWidth='15'
                      d='M52 111.018L76.9867 136L149 64'
                      className='checkbox-tick'
                    ></path>
                  </svg>
                  <span className='label-text'>Out Of Stock (0)</span>
                </label>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Products Tags</h3>
              <div className='products-card gap-10 flex-center-wrap'>
                {tag &&
                  tag?.map((item, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => {
                          setTag(item)
                        }}
                        className='capital badge bg-light text-secondary rounded-3 '
                      >
                        {item}
                      </span>
                    )
                  })}
              </div>
            </div>
            {/* 
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Random Product</h3>
              <div className='random-products'>
                <Link
                  to={`/product/${productState[0]?._id}`}
                  className='d-flex borderNotLast'
                >
                  <div className='w-25'>
                    <img
                      style={{ marginRight: '10px' }}
                      loading='lazy'
                      className='img-fluid'
                      alt='Random Product'
                      src={productState[0]?.images[0]?.url}
                    />
                  </div>
                  <div className='card-info w-75'>
                    <p>{productState[0]?.title}</p>
                    <ReactStars
                      count={5}
                      value={Number(productState[0]?.totalrating.toString)}
                      size={24}
                      activeColor='#ffd700'
                    />
                    <p>{productState[0]?.price} $</p>
                  </div>
                </Link>

                <Link
                  to={`/product/${productState[0]?._id}`}
                  className='d-flex borderNotLast'
                >
                  <div className='w-25'>
                    <img
                      style={{ marginRight: '10px' }}
                      loading='lazy'
                      className='img-fluid'
                      alt='Random Product'
                      src={productState[1]?.images[0]?.url}
                    />
                  </div>
                  <div className='card-info w-75 '>
                    <p>{productState[1]?.title}</p>
                    <ReactStars
                      count={5}
                      value={Number(productState[1]?.totalrating.toString)}
                      size={24}
                      activeColor='#ffd700'
                    />
                    <p>{productState[1]?.price}$</p>
                  </div>
                </Link>
              </div>
            </div> 
          </div> 
          */}

          <div className='col-12'>
            <div className='filter-sort-grid'>
              <div className='d-flex justify-content-between align-items-center gap-10'>
                <div className='gap-10 d-flex align-items-center'>
                  <p style={{ width: '85px' }} className='mb-0'>
                    Sort By:
                  </p>
                  <select
                    className='form-select form-select-sm'
                    aria-label='Small select example'
                    onChange={e => {
                      setSort(e.target.value)
                    }}
                  >
                    <option value='title'>Alphabetically, A-Z</option>
                    <option value='-title'>Alphabetically, Z-A</option>
                    <option value='price'>Price, Low To Height</option>
                    <option value='-price'>Price, Height To Low</option>
                    <option value='createdAt'>Date, New To Old</option>
                    <option value='-createdAt'>Date, Old To New</option>
                  </select>
                </div>

                <div className='gap-10 d-flex align-items-center'>
                  <p className='totalProducts mb-0'>
                    {productState?.length} Products
                  </p>
                  <div className='d-flex align-items-center gap-10 gridToggle'>
                    <img
                      loading='lazy'
                      onClick={() => {
                        setGrid(3)
                      }}
                      alt='grid'
                      className='img-fluid d-block'
                      src='images/gr4.svg'
                    />
                    <img
                      loading='lazy'
                      onClick={() => {
                        setGrid(4)
                      }}
                      alt='grid'
                      className='img-fluid d-block'
                      src='images/gr3.svg'
                    />
                    <img
                      loading='lazy'
                      onClick={() => {
                        setGrid(6)
                      }}
                      alt='grid'
                      className='img-fluid d-block'
                      src='images/gr2.svg'
                    />
                    <img
                      loading='lazy'
                      onClick={() => {
                        setGrid(12)
                      }}
                      alt='grid'
                      className='img-fluid d-block'
                      src='images/gr.svg'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='products-list pb-5'>
              <div
                style={{ marginTop: '1.5%', gap: '.5%' }}
                className='d-flex flex-wrap'
              >
                <ProductCard data={productState} grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default OurStore
