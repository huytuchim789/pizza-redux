import React from 'react'
import img from '../../scss/assets/img/empty-cart.png'
import { Link } from 'react-router-dom'
const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Giỏ hàng trống
        <span>😕</span>
      </h2>
      <p>
        Có thể bạn vẫn chưa gọi pizza. .
        <br />
        Để đặt bánh pizza, hãy truy cập trang chính .
      </p>
      <img src={img} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Trở lại</span>
      </Link>
    </div>
  )
}

export default CartEmpty
