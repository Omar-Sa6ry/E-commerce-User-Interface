import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './css/normalize.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js.map'
import './css/all.min.css'
import './css/App.css'

import { PrivateRoutes } from './routing/PrivateRoutes'
import Layout from './components/Layout'
import Home from './pages/Home'
import OurStore from './pages/OurStore'
import SingleProduct from './pages/SingleProduct'
import Blogs from './pages/Blogs'
import SingleBlog from './pages/SingleBlog'
import Contact from './pages/Contact'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import TermsOfServices from './pages/TermsOfServices'
import { OpenRoutes } from './routing/OpenRoutes'
import Order from './pages/Order'
import MyProfile from './pages/MyProfile'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/forget-password' element={<ForgetPassword />} />
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<OurStore />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:id' element={<SingleBlog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/refund-police' element={<RefundPolicy />} />
            <Route path='/shipping-police' element={<ShippingPolicy />} />
            <Route path='/terms-of-services' element={<TermsOfServices />} />
            <Route
              path='/register'
              element={
                <OpenRoutes>
                  <Register />
                </OpenRoutes>
              }
            />
            <Route
              path='/login'
              element={
                <OpenRoutes>
                  <Login />
                </OpenRoutes>
              }
            />
            <Route
              path='/wishlist'
              element={
                <PrivateRoutes>
                  <Wishlist />
                </PrivateRoutes>
              }
            />
            <Route
              path='/cart'
              element={
                <PrivateRoutes>
                  <Cart />
                </PrivateRoutes>
              }
            />
            <Route
              path='/checkout'
              element={
                <PrivateRoutes>
                  <Checkout />
                </PrivateRoutes>
              }
            />
            <Route
              path='/my-orders'
              element={
                <PrivateRoutes>
                  <Order />
                </PrivateRoutes>
              }
            />
            <Route
              path='/product/:id'
              element={
                <PrivateRoutes>
                  <SingleProduct />
                </PrivateRoutes>
              }
            />
            <Route
              path='/my-profile'
              element={
                <PrivateRoutes>
                  <MyProfile />
                </PrivateRoutes>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
