import React from 'react'
import { Link } from 'react-router-dom'

const Older = () => {
  return (
    <div className='flex justify-end mt-2'>
    <Link to="/">
      <button  className='bg-gray-400 p-4 rounded-md text-sm font-bold hover:bg-red-500'>Older</button>
    </Link>
    </div>
  )
}

export default Older