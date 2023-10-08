import React from 'react'

export const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-white p-3 text-center uppercase font-bold
    mb-3 rounded-md">
      <p>{mensaje}</p>
    </div>
  )
}
