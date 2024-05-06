import React from 'react'
import { Link } from 'react-router-dom'

const DataOfSingleProduct = () => {
  const copyToClipboard = text => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  return (
    <>
      <div className='d-flex gap-10 my-2 align-items-center'>
        <h3 className='product-heading mb-0'>Product Links:</h3>
        <Link
          className='gray-color'
          to='javascript:void(0)'
          onClick={() => {
            copyToClipboard(window.location.href)
          }}
        >
          Copy Product Link
        </Link>
      </div>

      <div class='product__accordion accordion'>
        <details>
          <summary>
            <div class='summary__title'>
              <svg
                class='icon icon-accordion color-foreground-text'
                aria-hidden='true'
                focusable='false'
                role='presentation'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
              >
                <path d='M15.64 6.92L9.5 5.12V4a.5.5 0 00-.5-.5H1a.5.5 0 00-.5.5v8.5c0 .28.22.5.5.5h1.27a2.1 2.1 0 004.06 0h3.94a2.1 2.1 0 004.06 0h1.17a.5.5 0 00.5-.5V7.4a.5.5 0 00-.36-.48zM4.3 13.6a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2zM6.33 12a2.1 2.1 0 00-4.06 0H1.5V4.5h7V12H6.33zm5.97 1.6a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2zM15 12h-.67a2.1 2.1 0 00-4.06 0H9.5V6.17l5.5 1.6V12z'></path>
              </svg>
              <h2 class='h4 accordion__title'>Shipping &amp; Returns</h2>
            </div>
            <svg
              class='icon icon-caret'
              viewBox='0 0 48 48'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z'></path>
              <path d='M0-.75h48v48h-48z' fill='none'></path>
            </svg>
          </summary>
          <div class='accordion__content rte'>
            <p>
              Free shipping and returns available on all orders!
              <br />
              We ship all US domestic orders within
              <strong>5-10 business days</strong>!
            </p>
          </div>
        </details>
      </div>

      <div class='product__accordion accordion'>
        <details>
          <summary>
            <div class='summary__title'>
              <svg
                class='icon icon-accordion color-foreground-text'
                aria-hidden='true'
                focusable='false'
                role='presentation'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
              >
                <path
                  d='M5.34 1.79A1 1 0 016.32 1h3.01a1 1 0 01.98.79 2.05 2.05 0 002.9 1.4 1 1 0 011.39.6l.37 1.23a1 1 0 01-.77 1.27 2.84 2.84 0 00-.25 5.52 1 1 0 01.69 1.25l-.42 1.35a1 1 0 01-1.6.47 2.66 2.66 0 00-3.89.51 1 1 0 01-1.64 0 2.66 2.66 0 00-3.8-.6 1 1 0 01-1.55-.49l-.5-1.6a1 1 0 01.61-1.24 2.72 2.72 0 00-.17-5.16 1 1 0 01-.67-1.25l.35-1.13a1 1 0 011.29-.65 2.05 2.05 0 002.7-1.48zm-2.77 2.5A3.05 3.05 0 006.32 2h3.01a3.04 3.04 0 004.31 2.09l.38 1.22a3.83 3.83 0 00-.34 7.46l-.41 1.35a3.64 3.64 0 00-5.36.7 3.69 3.69 0 00-4.33-1.31c-.31.12-.61.29-.89.5l-.5-1.61a3.7 3.7 0 001.35-6.12 3.7 3.7 0 00-1.57-.94l.35-1.12.25.07z'
                  fill-rule='evenodd'
                ></path>
              </svg>
              <h2 class='h4 accordion__title'>Materials</h2>
            </div>
            <svg
              class='icon icon-caret'
              viewBox='0 0 48 48'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z'></path>
              <path d='M0-.75h48v48h-48z' fill='none'></path>
            </svg>
          </summary>
          <div class='accordion__content rte'>
            <p>
              Running Shoes cushions your stride with soft foam to keep you
              running in comfort. Lightweight knit material wraps your foot in
              breathable support, while a minimalist design fits in just about
              anywhere your day takes you.
            </p>
          </div>
        </details>
      </div>

      <div class='product__accordion accordion'>
        <details>
          <summary>
            <div class='summary__title'>
              <svg
                class='icon icon-accordion color-foreground-text'
                aria-hidden='true'
                focusable='false'
                role='presentation'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
              >
                <path
                  d='M8.86 4.38a2.78 2.78 0 013.72-.3c1.4 1.2 1.2 3.11.19 4.13L7.98 13.1c-.05.06-.1.06-.19 0L3.01 8.2a2.8 2.8 0 01.19-4.1c1.06-.9 2.7-.76 3.74.28l.96.98.96-.98zm-.96-.45l.24-.25a3.78 3.78 0 015.07-.38l.01.01v.01a3.82 3.82 0 01.26 5.59l-4.79 4.9a1.12 1.12 0 01-1.45.12l-.1-.06L2.3 8.91a3.8 3.8 0 01.26-5.57 3.79 3.79 0 015.1.33l.01.01.24.25z'
                  fill-rule='evenodd'
                ></path>
              </svg>
              <h2 class='h4 accordion__title'>Care Instructions</h2>
            </div>
            <svg
              class='icon icon-caret'
              viewBox='0 0 48 48'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z'></path>
              <path d='M0-.75h48v48h-48z' fill='none'></path>
            </svg>
          </summary>
          <div class='accordion__content rte'>
            <p>
              Use a soft damp cloth and a drop of mild soap to remove any haze.
              Air dry.
            </p>
          </div>
        </details>
      </div>

      <div class='product__accordion accordion'>
        <details>
          <summary>
            <div class='summary__title'>
              <svg
                class='icon icon-accordion color-foreground-text'
                aria-hidden='true'
                focusable='false'
                role='presentation'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
              >
                <path
                  fill-rule='evenodd'
                  d='M14.441 3.733a.5.5 0 010 .707l-7.94 7.94a.5.5 0 01-.707 0L2.52 9.105a.5.5 0 11.707-.707l2.922 2.922 7.586-7.587a.5.5 0 01.707 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <h2 class='h4 accordion__title'>FAQ's</h2>
            </div>
            <svg
              class='icon icon-caret'
              viewBox='0 0 48 48'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z'></path>
              <path d='M0-.75h48v48h-48z' fill='none'></path>
            </svg>
          </summary>
          <div class='accordion__content rte'>
            <div class='aboutus'>
              <h2>The standard Lorem Ipsum passage</h2>
              <div class='desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                accumsan turpis posuere cursus ultricies. Ut nunc justo,
                faucibus eget elit quis, vehicula rhoncus nulla. Phasellus
                convallis sem nec facilisis commodo. Fusce ut molestie turpis.
                Suspendisse aliquet sed massa in vulputate. Quisque gravida
                suscipit tincidunt.
              </div>
            </div>
            <div class='aboutus'>
              <h2>At vero eos et accusamus et iusto odio dignissimos</h2>
              <div class='desc'>
                Mauris elementum scelerisque elit non egestas. Cras lacus nibh,
                pretium quis bibendum nec, dapibus a metus. Morbi eros lectus,
                aliquam eu aliquam id, fringilla nec eros. Praesent suscipit
                commodo diam, non viverra turpis dapibus malesuada. Duis cursus
                metus eu sem eleifend, id rhoncus odio porttitor.
              </div>
            </div>
            <div class='aboutus'>
              <h2>
                Certain circumstances and owing to the claims of duty or the
                obligations
              </h2>
              <div class='desc'>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes.
              </div>
            </div>
            <div class='aboutus'>
              <h2>Integer ultrices laoreet nunc in gravida</h2>
              <div class='desc'>
                Sed lobortis pulvinar viverra. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Mauris
                suscipit dolor scelerisque, bibendum tellus ac, pharetra sapien.
                Praesent lacinia scelerisque odio et consequat. In a facilisis
                lacus. Maecenas vel lobortis tellus.
              </div>
            </div>
          </div>
        </details>
      </div>
    </>
  )
}

export default DataOfSingleProduct
