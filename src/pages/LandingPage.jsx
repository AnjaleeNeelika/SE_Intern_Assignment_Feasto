import React from 'react'
import Stroke from '../assets/images/Stroke.png'
import PrimaryThemeColorButton from '../components/PrimaryThemeColorButton'
import TransparentButton from '../components/TransparentButton'

const LandingPage = () => {
    return (
        <div className='w-full h-full'>
            <div className='w-full h-fit p-16'>
                <div className='max-w-[50rem] text-center mx-auto'>
                    <div className='w-full text-primary-theme-color font-medium text-lg text-center'>
                        Seamless Setup, Quick, Easy and No-Code
                    </div>
                    <div className='w-full text-gray-800 font-black text-6xl leading-snug mt-3'>
                        Build Website for your Business within 
                        <span 
                            className='pl-3 relative'
                            style={{
                                backgroundImage: `url(${Stroke})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                                backgroundPosition: 'bottom',
                            }}
                        >
                            3 Minutes
                        </span>
                    </div>
                    <div className='mt-10 flex justify-center items-center gap-5'>
                        <PrimaryThemeColorButton text="Build your website now" />
                        <TransparentButton text="Get a demo" />                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage