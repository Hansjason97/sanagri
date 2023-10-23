import React from 'react'

function IconListItem({icon, children}) {
  return (
    <div className='flex flex-row gap-3 items-center'>
        <img src={icon} alt="icon" className='w-[18px] h-auto' />
        <div className='flex flex-col font-medium text-xl lg:text-2xl'>
            {children}
        </div>
    </div>
  )
}

export default IconListItem