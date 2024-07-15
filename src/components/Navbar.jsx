import React from 'react'
import Logo from '../assets/images/Logo feasto 1.png';
import { Link } from 'react-router-dom';
import TransparentButton from './TransparentButton';
import PrimaryThemeColorButton from './PrimaryThemeColorButton';

const Navbar = () => {
    return (
        <div className='w-full bg-white border border-b-gray-200 py-[26px] px-[120px] flex justify-between items-center'>
            <div className='flex justify-between items-center gap-10'>
                <img src={Logo} />
                <ul className='flex justify-between items-center gap-10 text-gray-800 font-medium'>
                    <Link>Features</Link>
                    <Link>Pricing</Link>
                    <Link>Templates</Link>
                    <Link>Resources</Link>
                </ul>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <TransparentButton text="Get a demo" />
                <PrimaryThemeColorButton text="Sign up for free" />
            </div>
            
        </div>
    )
}

export default Navbar