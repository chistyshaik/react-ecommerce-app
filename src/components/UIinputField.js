import React from 'react'

export default function UIinputField(props) {
  return (
      <input 
        className='border-solid border-solid-2 border-gray-600 w-full mb-4 py-1 px-2 rounded w-xs block hover:shadow-xl focus:shadow-xl '
        {...props}
        />
  )
}
