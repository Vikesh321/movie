import React from 'react'

const Loader = () => {
  return (
    <div className="h-screen bg-gray-800 flex justify-center items-center">
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-blue-500 border-solid border-current border-e-transparent align-[-0.125em]"
      role="status"
    ></div>
  </div>
  )
}

export default Loader
