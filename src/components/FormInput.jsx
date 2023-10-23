import React from 'react'

function FormInput({handleChange, label, ...otherProps}) {
  return (
    <div>
    {
        label ? 
        (<label className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>)
        : null
    }
    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" onChange={handleChange} {...otherProps}/>
</div>
  )
}

export default FormInput