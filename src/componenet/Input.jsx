import React from 'react'

const Input = ({searchTerm,setSearchTerm}) => {
  return (
    <input
    className="h-full w-full bg-transparent outline-none p-2 text-blue-900"
    type="text"
    placeholder="Enter movie name"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  )
}

export default Input
