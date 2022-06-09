import React,{useState} from 'react'
import { useEffect } from 'react';


function Product(props){
    const {setOrder, order} = props;
    const [active, setActive] = useState(true)
    const param = {
        id: props.product.id,
        name: props.product.name,
        price: props.product.price,
        image: props.product.image,
    }

    function getOrderFunction(){
        setOrder(param, setActive(false))
        
    }
    console.log(order);

  return (
    <>
        <div>
            <div className='ref'>
                <div style={{backgroundColor: props.product.color}} className="product">
                        <div className='images'>
                            <img src={props.product.image}/>
                        </div>
                </div>
                <div className='info'>
                    <div className='name'>{props.product.name}</div>
                    <div className='description'>{props.product.description}</div>
                    <div className='item'>
                        <div className='price'>${props.product.price}</div>
                        <button 
                            disabled = {!active}
                            className={active ? "btn" : "disabled"} 
                            onClick={getOrderFunction}>add to card</button>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Product