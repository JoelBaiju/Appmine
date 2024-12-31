import React from 'react'

function MotoCards({ head, body,color }) {
    return (
        <div className='w-full p-10 text-left md:w-3/12 h-40 bg-ppmine relative flex-col items-center justify-center'>
            
            <div className=''>
                <h1 className='text-xl md:text-3xl text-white gmarket'>{head}</h1>
            </div>
            <div className='text-left text-white  w-full'>
                <p className='gmarket w-full md:text-base text-sm'>{body}</p>
            </div>

        </div>
    )
}

export default MotoCards
