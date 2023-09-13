import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='m-5 p-6'>
        <ul className='ml-5 text-blue-800 font-bold text-xl list-disc w-fit'> 
          <Link to="/add-item">
            <li>Create (POST)</li>
          </Link>
          <Link to="/get-item">
            <li>Read (GET)</li>
          </Link>
          <Link to="/list-baskets">
            <li>List Baskets (GET)</li>
          </Link>
          <Link to="/update-item">
            <li>Update (PUT)</li>
          </Link>
          <Link to="/delete-item">
            <li>Delete (DELETE)</li>
          </Link>  
        </ul>
    </div>
  )
}

export default Homepage