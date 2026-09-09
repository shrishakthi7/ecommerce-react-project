import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CartItems = () => {
    let navigate = useNavigate()
    let [apiData,setApiData] = useState([])

    let fetchApi = async () => {
        setApiData(await ((await axios.get(`http://localhost:4000/cartitemes`)).data))
    }
    useEffect(() => {
        fetchApi()

    }, [])

    let removeProdect = (key) => {
        if (window.confirm('Do you want to delete...')) {
            axios.delete(`http://localhost:4000/cartitemes/${key}`)
            // window.location.reload();
            navigate('/')
        } else {
            toast.success('prodect is not delited')
        }
    }
    let tot = () => apiData.reduce((total, current) => total + current.price, 0)
    console.log(apiData)
    
    return (
        <>
            <div className="itemTable">
                <table className="cart-table" border={1}>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apiData.map((ele, index) => {
                                let { image, price, title } = ele
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td><img src={image} alt="" /></td>
                                        <td>{title}</td>
                                        <td>{Math.floor((price * 85))}.00/-</td>
                                        <td><button onClick={() => removeProdect(ele.id)} >Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                        <tr><td colSpan={5}><h1>Grand total is {Math.floor(tot() * 85)}.00/-</h1></td></tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default CartItems