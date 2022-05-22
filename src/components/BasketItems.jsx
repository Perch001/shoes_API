import React from 'react'
import { useState } from 'react'

function BasketItems({id, name, price, image, count, getOrder}) {
  return (
    <div className='BasketItem'>
      <div className='cart-image'>
        <img className='BasketImage' src={image}/>
      </div>
      <div>
        <div className='name'>{name}</div>
        <div className='price'>${price}</div>
        <div className='count'>
          <button className='count-left' onClick={() =>  getOrder(id)}></button>
          <div className='count-quality'>{count}</div>
          <button className='count-right'></button>
        </div>
      </div>
      
    </div>
  )
}

export default BasketItems