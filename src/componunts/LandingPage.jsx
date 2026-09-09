import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  let [apidata,setApi]=useState([])
  let nav = useNavigate()

  let fetchApi = async ()=>{
     setApi((await axios.get('http://localhost:4000/prodects')).data)
  }

  

  useEffect(()=>{
    fetchApi()
  },[])


  let viewMore = (id)=>{
    nav(`/more/${id}`)
  }

  let allCat = [
    'All',"men's clothing","jewelery","electronics","women's clothing"
  ]
    let [filteredArray,setfilteredArray]=useState([])
    
   useEffect(()=>{
    setfilteredArray(apidata)
   },[apidata])

  let handleCatogary=(e)=>{
    let btnName = e.target.innerText
    if(btnName==='All'){
      setfilteredArray(apidata)
    }
    else{
      let x = apidata.filter((ele)=>ele.category===btnName)
    setfilteredArray(x)
    }
  }
  return (
    <>
       <div  className="prodects">
        <div className="catagory">
          <ul>
             {
              allCat.map((ele,index)=>{
                return(
                    <li key={index}><button onClick={handleCatogary} >{ele}</button></li>
                )
              })
             }
          </ul>
        </div>
          <h1 style={{textAlign:"center" , marginBottom:"5vh"}}>Prodects</h1>
          <div className="container">
            {
              filteredArray.map((ele,index)=>{
                let{id,title,image,price}=ele
                 return(
                  <>
                    <div key={index} className="card">
                       <div className="image">
                        <img src={image} alt="" />
            
                       </div>
                       <div className="title">
                        
                        <h2>{title}</h2>
                        
                       </div>
                       <div className="price">
                        <h4>{Math.floor(price*85)} rs</h4>
                       </div>
                       <div className="btn">
                        <button onClick={()=>viewMore(id)} >View More</button>
                       </div>
                    </div>
                  </>
                 )
              })
            }
          </div>
       </div>
    </>
  )
}

export default LandingPage

