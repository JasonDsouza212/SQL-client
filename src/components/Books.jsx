import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export default function Books() {
 
  const [books,setBooks]=useState([])

  useEffect(()=>{
     const fetchAllbooks= async ()=>{
        try{
            const res= await axios.get("http://localhost:3005/books")
            setBooks(res.data)
        }catch(err){
            console.log(err)
        }  
     }
     fetchAllbooks()
  },[])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3005/books/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div>
      <h1>Books Shop</h1>
      <div className="books">
        {books.map((book)=>(
            <div className="book" key={book.id}>
                {book.cover && <img src={book.cover} alt="" />}
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>{book.price}</span>
                <button className='delete' onClick={()=>handleDelete(book.id)}>Delete</button>
                <button className='update'><Link to={`/update/${book.id}`}>update</Link></button>
            </div>
        ))}
      </div>
      <button><Link to="/add">Add new Book</Link></button>
    </div>
  )
}
