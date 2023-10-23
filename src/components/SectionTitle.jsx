import React from 'react'

function SectionTitle({title, subtitle}) {
  return (
    <div>
        <h2 className='lvlTwo text-primary'>
            {title}
        </h2>
        <p className='sectionSubtitle text-secondary'>
            {subtitle}
        </p>
    </div>
  )
}

export default SectionTitle