import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'

const ShippingPolicy = () => {
  return (
    <>
      <BreadCrumb title='Shipping Policy' />
      <Container class1='privacy-policy-wrapper section-background py-5'>
        <div className='row'>
          <div className='col-12'>
            <div
              style={{ padding: '30px' }}
              className='footerLinksp bg-white'
            ></div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ShippingPolicy
