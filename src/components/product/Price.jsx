import React from 'react'
import PropTypes from 'prop-types'

const Price = React.memo(({ price }) => {
  return <div className="pizza-block__price">{price} VNĐ</div>
})

Price.propTypes = {
  price: PropTypes.number.isRequired,
}

export default Price
