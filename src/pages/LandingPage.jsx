import React from 'react'
import Stroke from '../assets/images/Stroke.png'
import PrimaryThemeColorButton from '../components/PrimaryThemeColorButton'
import TransparentButton from '../components/TransparentButton'
import FeastoWebsiteImg1 from '../assets/images/Feasto_website_resources_1.png'
import FeastoWebsiteImg2 from '../assets/images/Feasto_website_resources_2.png'
import FeastoWebsiteImg3 from '../assets/images/Feasto_website_resources_3.png'
import FeastoWebsiteImg4 from '../assets/images/Feasto_website_resources_4.png'
import CustomersLogoFrame1 from '../assets/images/CustomersLogoFrame1.png'
import PersonImg1 from '../assets/images/Image - 1.png'
import PersonImg2 from '../assets/images/Image - 2.png'
import PersonImg3 from '../assets/images/Image - 3.png'
import PersonImg4 from '../assets/images/Image - 4.png'
import Food from '../assets/images/Food.png'
import Grocery from '../assets/images/Grocery.png'
import Retail from '../assets/images/Retail.png'

const LandingPage = () => {
    return (
        <div className='w-full h-full'>
            <div className='w-full h-fit px-16 pb-5'>
                <div className='max-w-[50rem] text-center mx-auto my-20'>
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

                <div className='w-full h-fit my-10 flex justify-center items-center gap-5'>
                    <img src={FeastoWebsiteImg1} />
                    <img src={FeastoWebsiteImg3} />
                    <img src={FeastoWebsiteImg4} />
                    <img src={FeastoWebsiteImg2} />                   
                </div>
            </div>

            <div className='w-full h-fit py-10'>
                <img src={CustomersLogoFrame1} className='w-full' />
            </div>

            <div className='p-20 flex justify-center items-center gap-10 h-fit mt-14'>
                <div className='w-full'>
                    <div className='w-fit mx-auto'>
                        <img src={PersonImg1} className='ml-32' />
                        <img src={PersonImg4} className='absolute ml-72 -mt-36' />
                        <img src={PersonImg3} />
                        <img src={PersonImg2} className='float-right -mt-40 ml-64' />       
                    </div>
                </div>
                
                <div className='w-full h-fit p-5'>
                    <p className='w-full text-primary-theme-color font-medium text-lg'>EXPLORE FEASTO</p>
                    <div className='max-w-[38rem] text-gray-800 font-black text-[54px] leading-snug mt-3'>
                        How <span className='text-primary-theme-color'>FEASTO</span> help your business grow?
                    </div>
                    <div className='mt-10 max-w-[38rem]'>
                        <div className='mb-6'>
                            <div className='flex justify-start items-center gap-4'>
                                <span class="iconify material-symbols--rocket-launch-outline text-primary-theme-color w-10 h-10"></span>
                                <span className='text-xl font-bold'>Launch your store in 3 mins</span>
                            </div>
                            <div className='mt-4 text-gray-600 text-lg leading-relaxed'>
                                Easily launch your online store without coding and saving time. Just choose a domain, add products, and start selling. It's that simple!
                            </div>
                        </div>
                        <div className='mb-6'>
                            <div className='flex justify-start items-center gap-4'>
                                <span class="iconify tabler--message-2-bolt text-primary-theme-color w-10 h-10"></span>
                                <span className='text-xl font-bold'>Faster response time</span>
                            </div>
                            <div className='mt-4 text-gray-600 text-lg leading-relaxed'>
                                Quickly respond to customer queries and orders through WhatsApp, boosting customer satisfaction and loyalty.
                            </div>
                        </div>
                        <div className='mb-6'>
                            <div className='flex justify-start items-center gap-4'>
                                <span class="iconify fluent--arrow-trending-lines-24-filled text-primary-theme-color w-10 h-10"></span>
                                <span className='text-xl font-bold'>Increased visibility</span>
                            </div>
                            <div className='mt-4 text-gray-600 text-lg leading-relaxed'>
                                Expand your reach beyond physical locations with an online storefront that’s accessible 24/7.
                            </div>
                        </div>
                        <div className='mb-6'>
                            <div className='flex justify-start items-center gap-4'>
                                <span class="iconify mdi--controller-outline text-primary-theme-color w-10 h-10"></span>
                                <span className='text-xl font-bold'>Ultimate control over your storefront</span>
                            </div>
                            <div className='mt-4 text-gray-600 text-lg leading-relaxed'>
                                You can set your own opening hours, define delivery zones and charges, select payment methods and handle offers effortlessly.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full py-20 px-28 h-fit'>
                <div className='w-fit mx-auto'>
                    <div className='w-full text-primary-theme-color font-medium text-lg text-center'>
                        STATER TEMPLATES
                    </div>
                    <div className='max-w-[50rem] text-gray-800 text-[54px] text-center font-black leading-snug mt-3'>
                        Kickstart your online stores with amazing templates
                    </div>
                </div>
                <div className='w-full flex justify-center items-center gap-10 mt-20'>
                    <div className='w-fit'>
                        <img src={Food} className='max-w-96' />
                    </div>
                    <div className='w-fit'>
                        <img src={Grocery} className='max-w-96' />
                    </div>
                    <div className='w-fit'>
                        <img src={Retail} className='max-w-96' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage