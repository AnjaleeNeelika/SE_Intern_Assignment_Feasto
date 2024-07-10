import React from 'react'
import { Link } from 'react-router-dom'

const TransparentButton = (props) => {
    return (
        <Link className='w-fit px-6 py-3 border border-gray-300 rounded-md text-gray-800 font-semibold shadow-sm'>
            {props.text}
        </Link> 
    )
}

export default TransparentButton