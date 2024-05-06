import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

const BreadCrumb = props => {
  const title = props.title
  return (
    <div style={{ backgroundColor: 'var(--background-nav)' }}>
      <Container
        style={{
          marginBottom: '20px',
          fontWeight: '400'
        }}
        className='breadCrumb mb-0 py-4'
      >
        <div className='row'>
          <div className='col-12'>
            <p className='mb-0 text-center'>
              <Link style={{ color: '#fff' }} to='/'>
                Home &nbsp;/
              </Link>
              <span style={{ color: 'var(--active-color)' }}> {title}</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BreadCrumb
