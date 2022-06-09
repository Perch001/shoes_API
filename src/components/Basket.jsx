import React from 'react'
import BasketItems from './BasketItems'

function Basket(props) {
  const {
    order = [],
    getOrder,
  } = props
  return (
    <div>
      <div className='title'>Your cart</div>
      <div>
        {!order.length ? (
          <div>Your cart is empty.</div>
        ) : (
          order.map((item)=> {
            return(
              <BasketItems key = {item.id} {...item} getOrder = {getOrder}/>
            )
          })
        )
          
        }
      </div>
    </div>
  )
}

export default Basket