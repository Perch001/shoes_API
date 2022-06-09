import React, { useState } from 'react'



function BasketItems({id, name, price, image, getOrder}) {
  const [BasketCount, setBasketCount] = useState(1)
  function decrement() {
    setBasketCount(BasketCount + 1)
  }
  function increment() {
    setBasketCount(BasketCount - 1)
  }
  function removeOrder() {
    if(BasketCount < 2){
      getOrder(id)
    }else{
      increment()
    }
  }


  return (
    <div className= 'BasketItem'>
      <div className='cart-image'>
        <img className='BasketImage' src={image}/>   
      </div>
      <div>
        <div className='BasketName'>{name}</div>
        <div className='BasketPrice'>${price}</div>
        <div className='count'>
          <button className='count-left' onClick={removeOrder}></button>
          <div className='count-quality'>{BasketCount}</div>
          <button className='count-right' onClick={decrement}></button>
        </div>
      </div>
      
    </div>
  )
}

export default BasketItems