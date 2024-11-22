import React from 'react'

function Button({texttoshow}) {
  return (
    <div >
        <button className='  py-1  border-2 border-white px-6 text-white  rounded-3xl text-center'>{texttoshow}</button>
    </div>
  )
}

export default Button
