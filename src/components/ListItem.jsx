import React from 'react'

function ListItem({title, subtitle}) {
  return (
    <div className='flex flex-col gap-1'>
        <p className='listItemTitle'>
            {title}
        </p>
        <p className='listItemSubtitle'>
            {subtitle}
        </p>
    </div>
  )
}

export default ListItem