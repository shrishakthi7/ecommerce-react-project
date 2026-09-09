import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const ViewMore = () => {
    let [prodect, setprodect] = useState({})
    let navigate = useNavigate()
    let key = useParams().id
    console.log(key)

    let fetchApi = async () => {
        setprodect((await axios.get(`http://localhost:4000/prodects/${key}`)).data)
    }

    useEffect(() => {
        fetchApi()
    }, [])
    console.log(prodect)
    let removeProdect = () => {
        if (window.confirm('Do you want to delete...')) {
            axios.delete(`http://localhost:4000/prodects/${key}`)
            alert('Prodect delited')
            navigate('/')
        }else{
            toast.success('prodect is not delited')
            navigate('/')
        }
    }
    let { id, category, description, image, price, rating, title } = prodect
    // logic to add to cart

    let addToCart = ()=>{
         if(window.confirm('Add to cart')){
            axios.post(`http://localhost:4000/cartitemes/`,prodect)
            navigate('/cart-items')
        }
        
    }

    return (
        <>
            <div className="viewMoreCard">
                <div className="container">
                    <div className="left">
                        <img src={image} alt="" />
                    </div>
                    <div className="right">
                        <h2>Name : {title}</h2>
                        <h3>Price : {Math.floor(price * 85)}Rs</h3>
                        <h3>Catagory : {category}</h3>
                        <h3>Rating : {rating?.rate}</h3>
                        <h5>Description : {description}</h5>
                        <div className="butns">
                            <button onClick={addToCart} className='add'>Add to cart</button>
                            <button onClick={removeProdect} className='delete'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewMore
