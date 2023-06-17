import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Update() {
    const [book,setBook]=useState({
        title:"",
        desc:"",
        price:null,
        cover:"",
    })

    const Navigate= useNavigate()
    const location= useLocation()
  
    const bookid= location.pathname.split("/")[2]
    console.log(bookid)

    const handelChange=(e)=>{
        setBook((prev)=> ({...prev,[e.target.name]:e.target.value}))
    }
    const handelsubmit= async (e)=>{
        e.preventDefault()
        try{
            await axios.put(`http://localhost:3005/books/${bookid}`,book)
            Navigate("/")
        }catch(err){
            console.log(err)
        }
    }
    console.log(book)
  return (
    <div className='form'>
      <h1>Update New Book</h1>
      <input type='text' placeholder='title' name='title' onChange={handelChange}/>
      <input type='text' placeholder='Desc' name='desc' onChange={handelChange}/>
      <input type='number' placeholder='Price' name='price' onChange={handelChange}/>
      <input type='text' placeholder='cover' name='cover'onChange={handelChange}/>
      <button className="formbtn" onClick={handelsubmit}>Update</button>
    </div>
  )
}
