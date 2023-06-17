import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Add() {
    const [book,setBook]=useState({
        title:"",
        desc:"",
        price:null,
        cover:"",
    })

    const Navigate= useNavigate()
    const handelChange=(e)=>{
        setBook((prev)=> ({...prev,[e.target.name]:e.target.value}))
    }
    const handelsubmit= async (e)=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:3005/books",book)
            Navigate("/")
        }catch(err){
            console.log(err)
        }
    }
    console.log(book)
  return (
    <div className='form'>
      <h1>Add New Book</h1>
      <input type='text' placeholder='title' name='title' onChange={handelChange}/>
      <input type='text' placeholder='Desc' name='desc' onChange={handelChange}/>
      <input type='number' placeholder='Price' name='price' onChange={handelChange}/>
      <input type='text' placeholder='cover' name='cover'onChange={handelChange}/>
      <button className="formbtn" onClick={handelsubmit}>Add</button>
    </div>
  )
}
