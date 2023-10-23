import React from 'react'

function Image({image, alt}) {
  return (
    <div className='max-w-[470px] w-full relative flex justify-center py-2'>
        <img src={image} alt={alt ? alt : "image"} className=' max-h-[500px] h-auto w-full p-5 object-cover'/>
        <div className='absolute top-0 left-0 w-full h-[80%] max-h-[460px] border border-primary -z-10'></div>
    </div>
  )
}

export default Image