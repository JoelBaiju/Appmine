import React from 'react'

function MotoCards({ head, body,color }) {
    return (
        <div className='w-full text-center md:w-3/12 h-40 bg-ppmine relative flex-col items-center justify-center'>
            
            <div className=''>
                <h1 className='text-5xl text-black kantumruy'>{head}</h1>
              
            </div>
            <div className='text-center text-black  w-full'>
                <p className='kantumruy w-full text-xl'>{body}</p>
            </div>

        </div>
    )
}

export default MotoCards
