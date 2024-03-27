import React from 'react'

export default function UIButton(props) {
  return (
    <button
    className= 'border-solid border-gray-600 text-center bg-slate-400 rounded p-1 px-4 w-full my-4 hover:bg-slate-500'
    onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
