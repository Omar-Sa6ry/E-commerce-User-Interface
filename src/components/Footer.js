import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container bottom_border'>
        <div className='row'>
          <div className=' col-sm-4 col-md col-sm-4  col-12 col'>
            {/* Contact Us */}
            <h4
              style={{ marginBottom: '40px' }}
              className='headin5_amrc col_white_amrc pt2'
            >
              Contact us
            </h4>
            <p>E-Commerce Store</p>
            <p>No 1259 Freedom Damietta,1111</p>
            <p style={{ marginBottom: '40px' }}>Egypt</p>

            <p>
              <i className='fa fa-phone'></i> +20 1091854368
            </p>
            <p>
              <i className='fa fa fa-envelope'></i> omarahmedsabry05@gmail.com
            </p>

            <ul className='social_footer_ul'>
              <li>
                <Link
                  target='_blank'
                  className='f'
                  to='https://www.facebook.com/omarahmed.sabry.73'
                >
                  <i className=' fab fa-facebook-f'></i>
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  className='i'
                  to='https://www.instagram.com/omar_sabry____________________/'
                >
                  <i className='fab fa-instagram'></i>
                </Link>
              </li>

              <li>
                <Link
                  target='_blank'
                  className='t'
                  to='https://twitter.com/OmarSa6ry'
                >
                  <i className='fab fa-twitter'></i>
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  className='k'
                  to='https://www.linkedin.com/in/omar-ahmed-sabry-754835279/'
                >
                  <i className='fab fa-linkedin'></i>
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  className='git'
                  to='https://github.com/Omar-Sa6ry'
                >
                  <i className='fa-brands fa-github'></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* information */}
          <div className='inf col-sm-4 col-md  col-6 col'>
            <h4
              style={{ marginBottom: '40px' }}
              className='headin5_amrc col_white_amrc pt2'
            >
              information
            </h4>
            <Link to='/privacy-policy'>Privacy Police</Link>
            <Link to='/refund-police'>Refund Police</Link>
            <Link to='/shipping-police'>Shipping Police</Link>
            <Link to='/terms-of-services'>Terms Of Services</Link>
            <Link to='/blogs'>Blogs</Link>
            <p style={{ marginBottom: '40px' }}>Egypt</p>
          </div>

          {/* Account */}
          <div className=' col-sm-4 col-md  col-6 col'>
            <h4
              style={{ marginBottom: '40px' }}
              className='headin5_amrc col_white_amrc pt2'
            >
              Account
            </h4>
            <p>Search</p>
            <p>About Us</p>
            <p>Fag</p>
            <p>Contact</p>
            <p>Size Chart</p>
          </div>
          {/* Quick Links */}
          <div className=' col-sm-4 col-md  col-6 col'>
            <h4
              style={{ marginBottom: '40px' }}
              className='headin5_amrc col_white_amrc pt2'
            >
              Quick Links
            </h4>
            <p>Accessories</p>
            <p>Laptops</p>
            <p>Headphone</p>
            <p>Smart Watches</p>
            <p>Taplets</p>
          </div>

          {/* Quick Links */}
          <div className=' col-sm-4 col-md  col-6 col'>
            <h4
              style={{ marginBottom: '40px' }}
              className='headin5_amrc col_white_amrc pt2'
            >
              Quick Links
            </h4>
            <p>Accessories</p>
            <p>Laptops</p>
            <p>Headphone</p>
            <p>Smart Watches</p>
            <p>Taplets</p>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-between align-items-center'>
        <p className='end'>
          <i className='fa-regular fa-copyright'></i>2023,OAS Powered by Omar
        </p>
        <p></p>
      </div>
    </footer>
  )
}

export default Footer
