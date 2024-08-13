import React from 'react'

const Button = ({handleSearch,loading}) => {

  return (
    <button
    onClick={handleSearch}
    disabled={loading}
    className="bg-blue-600 text-white rounded-full p-2 ml-2 hover:bg-blue-700 transition-colors duration-200"
  >
    🔍
  </button>
  )
}

export default Button
