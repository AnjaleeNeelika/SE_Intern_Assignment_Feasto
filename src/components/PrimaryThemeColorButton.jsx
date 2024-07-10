import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryThemeColorButton = (props) => {
    return (
        <Link className='w-fit px-6 py-3 border border-primary-theme-color rounded-md bg-primary-theme-color text-white font-semibold shadow-sm'>
            {props.text}
        </Link>  
    )
}

export default PrimaryThemeColorButton