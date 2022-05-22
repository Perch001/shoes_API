import React,{useState,useEffect} from 'react'
import Basket from "./Basket";
import Product from "./Product";


function Home() {
    const [product, setProduct] = useState([])
    const [order, setOrder] = useState([]);
    // async function products() {
    //     const response = await ProductSever.getAll()
    //     setProduct(response.shoes)
    // }

    const products = async () => {
        const response = await fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/shoes.json")
        const data = await response.json()
        setProduct(data.shoes)
    }
    
    const addToOrder = (product) => {    
        let count = 1
        setOrder([
            ...order,
            {
                id: product.id,
                image: product.image,
                name: product.name,
                price: product.price,
                count
            }
        ])
    }
    const removeFromOrder = (product) => {
       setOrder(order => order.filter(({ id }) => id !== product))  

    };
    useEffect(() => {
        products()
    }, [])
  return (
    <div className="screen">
        <div className="first">
        <div className='title'>Basked</div>
            {product.map(pro => {
                return(
                    <Product key = {pro.id} product = {pro} setOrder = {addToOrder}/>
                )
            })}
        </div>
        <div className="first">
            <Basket order = {order} getOrder = {removeFromOrder}>
            </Basket> 
        </div>
      
    </div>
  )
}

export default Home