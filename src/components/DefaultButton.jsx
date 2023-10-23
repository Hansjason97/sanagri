import React from 'react'

function DefaultButton({text, link, big}) {

  return (
    <a className={`flex py-2 gap-3 items-center pr-2 w-fit relative group`} href={link} target='_blank'>
        <img src="/Arrow.svg" alt="icon" className='w-[30px] h-auto md:w-[35px] lg:w-[40px]' />
        <span className={`text-base text-black font-medium lg:text-[24px] group-hover:pl-2 transition-all duration-150 ease-in `}>{text}</span>
    </a>
  )
}

export default DefaultButton