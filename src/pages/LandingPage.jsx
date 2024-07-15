import React, { useState } from 'react'
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
import FAQItem from '../components/FAQItem'
import Logo from '../assets/images/Logo feasto 1.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const [showAnswer, setShowAnswer] = useState(false);

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
                    <div className='max-w-96'>
                        <img src={Food} className='w-full' />
                        <div className='max-w-full mt-8'>
                            <div className='text-xl font-bold'>
                                Restaurants & Food Businesses
                            </div>
                            <div className='text-lg mt-3'>
                                Build an online store showcasing dishes with eye-catching images & easily update prices with our templates.
                            </div>
                            <div className='text-base text-primary-theme-color font-semibold mt-6'>
                                Get started now
                            </div>
                        </div>
                    </div>
                    <div className='max-w-96'>
                        <img src={Grocery} className='max-w-96' />
                        <div className='max-w-full mt-8'>
                            <div className='text-xl font-bold'>
                                Grocery Store
                            </div>
                            <div className='text-lg mt-3'>
                                Get your grocery store online with a user-friendly design that enhances your customers' shopping experience.
                            </div>
                            <div className='text-base text-primary-theme-color font-semibold mt-6'>
                                Get started now
                            </div>
                        </div>
                    </div>
                    <div className='max-w-96'>
                        <img src={Retail} className='max-w-96' />
                        <div className='max-w-full mt-8'>
                            <div className='text-xl font-bold'>
                                Retail Store
                            </div>
                            <div className='text-lg mt-3'>
                                Create a stunning showcase for your latest collections with our stylish templates and user-friendly interface.
                            </div>
                            <div className='text-base text-primary-theme-color font-semibold mt-6'>
                                Get started now
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full p-28'>
                <div className='w-full flex justify-between items-center'>
                    <div className='max-w-[45rem]'>
                        <div className='text-lg text-primary-theme-color font-medium'>
                            PRICING & PLANS 
                        </div>
                        <div className='mt-2 text-[52px] text-gray-800 font-black'>
                            Perfect Balance <br />of Features & Affordability
                        </div>
                        <div className='max-w-[38rem] mt-4 text-lg text-gray-600 font-regular leading-loose'>
                            Feasto simplifies creating a stunning, professional web store with its user-friendly templates and quick setup. Our powerful features ensure a seamless experience.
                        </div>
                    </div>
                    <div>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <span className="text-base font-semibold text-gray-800 peer-checked:text-gray-500 mr-3">Monthly</span>
                            <div className="relative w-16 h-9 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[4px] after:rounded-full after:h-7 after:w-7 after:bg-white dark:border-gray-600 peer-checked:bg-primary-theme-color"></div>
                            <span className="text-base font-semibold text-gray-500 ml-3 peer-checked:text-gray-800">Annually</span>
                        </label>
                    </div>
                </div>

                <div className='w-full flex justify-center items-center gap-10 mt-16'>
                    <div className='w-fit h-fit bg-white p-9 shadow-lg border border-gray-200 rounded-lg'>
                        <div className='w-full'>
                            <div className='w-fit mx-auto'>
                                <p className='text-primary-theme-color text-lg text-center font-semibold mx-auto'>FREE</p>
                                <div className='text-gray-800 text-5xl font-bold mt-3'>$0</div>
                            </div>

                            <button className='w-full mt-8 px-6 py-4 bg-white border border-gray-300 shadow-sm text-gray-800 text-base font-semibold rounded-md'>Start for FREE</button>
                        </div>

                        <div className='w-fit mt-6'>
                            <div className='flex items-center gap-2'>
                                <span class="iconify mdi--check text-primary-theme-color w-5 h-5"></span>
                                <span className='text-base font-regular text-gray-800'>Unlimited orders</span>
                            </div>
                            <div className='flex items-center gap-2 mt-3'>
                                <span class="iconify mdi--check text-primary-theme-color w-5 h-5"></span>
                                <span className='text-base font-regular text-gray-800'>Unlimited products listing</span>
                            </div>
                            <div className='flex items-center gap-2 mt-3'>
                                <span class="iconify mdi--check text-primary-theme-color w-5 h-5"></span>
                                <span className='text-base font-regular text-gray-800'>Unlimited offer creation</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-400 mt-3'>
                                <span class="iconify mdi--window-close w-5 h-5"></span>
                                <span className='text-base font-regular'>Monthly 2 hrs Marketing support</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-400 mt-3'>
                                <span class="iconify mdi--window-close w-5 h-5"></span>
                                <span className='text-base font-regular'>Premium customer care</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-400 mt-3'>
                                <span class="iconify mdi--window-close w-5 h-5"></span>
                                <span className='text-base font-regular'>Custom domain</span>
                            </div>
                        </div>
                    </div>

                    <div className='w-fit h-fit border-2 border-primary-theme-color bg-white rounded-lg shadow-2xl'>
                        <div className='bg-primary-theme-color w-full text-white text-lg text-center font-semibold py-2 px-4'>
                            Save 25%
                        </div>
                        <div className='p-9'>
                            <div>
                                <div className='w-full text-center'>
                                    <div className='w-full text-lg text-primary-theme-color text-center font-semibold'>PRO - Annual plan</div>
                                    <div className='w-full text-center mt-4'>
                                        <div className='w-full'>
                                            <div className='w-full text-2xl text-gray-400 font-semibold'>$9.99</div>
                                            <div className='w-full text-5xl text-gray-800 font-bold mt-2'>$7.5</div>
                                        </div>
                                        <div className='text-gray-500 text-base font-regular mt-2'>
                                            Monthly, Billed annually
                                        </div>
                                    </div>
                                </div>

                                <button className='w-full bg-primary-theme-color mt-7 px-6 py-4 shadow-sm rounded-md text-base text-white font-semibold'>Get 14 days free trail</button>
                            </div>

                            <div className='w-fit mt-6'>
                                <div className='flex items-center gap-2'>
                                    <span class="iconify mdi--check text-primary-theme-color w-5 h-5"></span>
                                    <span className='text-base font-regular text-gray-800'>Unlimited orders</span>
                                </div>
                                <div className='flex items-center gap-2 mt-3'>
                                    <span class="iconify mdi--check text-primary-theme-color w-5 h-5"></span>
                                    <span className='text-base font-regular text-gray-800'>Unlimited products listing</span>
                                </div>
                                <div className='flex items-center gap-2 mt-3'>
                                    <span class="iconify mdi--check text-primary-theme-color w-5 h-5"></span>
                                    <span className='text-base font-regular text-gray-800'>Unlimited offer creation</span>
                                </div>
                                <div className='flex items-center gap-2 mt-3'>
                                    <span class="iconify mdi--check text-primary-theme-color w-5 h-5"></span>
                                    <span className='text-base font-regular text-gray-800'>Monthly 2 hrs Marketing support</span>
                                </div>
                                <div className='flex items-center gap-2 mt-3'>
                                    <span class="iconify mdi--check text-primary-theme-color w-5 h-5"></span>
                                    <span className='text-base font-regular text-gray-800'>Premium customer care</span>
                                </div>
                                <div className='flex items-center gap-2 mt-3'>
                                    <span class="iconify mdi--check text-primary-theme-color w-5 h-5"></span>
                                    <span className='text-base font-regular text-gray-800'>Custom domain</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='max-w-[65rem] mx-auto'>
                <div className='text-center'>
                    <div className='text-lg text-primary-theme-color font-medium'>
                        FREQUENTLY ASKED QUESTIONS
                    </div>
                    <div className='max-w-[40rem] mt-2 text-[52px] text-gray-800 font-black mx-auto'>
                        All you need to know about <span className='text-primary-theme-color'>FEASTO</span>
                    </div>
                </div>
                <div className='mt-16 bg-white border border-gray-300 rounded-lg'>
                    <FAQItem
                        question = "How can FEASTO help me get my shop online?"
                        answer = {
                            <div>
                                If you're thinking about selling a product online, all you'll need to do is visit our website, sign up,
                                and follow our easy step-by-step guide. Once you've done these steps, your shop is ready to go online! You 
                                can edit your products anytime, add new ones, or update details, then publish your changes instantly.
                            </div>
                        }
                    />

                    <FAQItem 
                        question = "How secure is the FEASTO Ecommerce Website Builder?"
                        answer = {
                            <div>
                                We implement industry-standard security measures, including SSL encryption, secure payment gateways, and 
                                regular system updates, to ensure the protection of your online store and customer data.
                            </div>
                        }
                    />

                    <FAQItem 
                        question = "Can I connect FEASTO with other tools and services?"
                        answer = {
                            <div>
                                Yes, FEASTO allows you to integrate with popular tools and services to enhance your online store. Connect 
                                seamlessly with email marketing platforms, analytics tools, and more to optimize your e-commerce experience.
                            </div>
                        }
                    />
                    
                    <FAQItem 
                        question = "To what extent can I customize the pre-designed template?"
                        answer = {
                            <div>
                                You can personalize the pre-designed template by adjusting the theme colors and layouts to match your store's branding and style preferences.
                            </div>
                        }
                    />

                    <FAQItem 
                        question = "What kind of payment methods does Feasto support?"
                        answer = {
                            <div>
                                Currently, FEASTO supports cash payments and bank deposits only. However, if you need other payment methods, 
                                we'll add them at minimal cost based on what you prefer.
                            </div>
                        }
                    />

                    <FAQItem 
                        question = "Is Feasto suitable for small businesses?"
                        answer = {
                            <div>
                                Feasto simplifies creating a stunning, professional web store with its user-friendly templates and quick setup. 
                                Our powerful features ensure a seamless experience.
                            </div>
                        }
                    />
                    
                    <FAQItem 
                        question = "Can I cancel my subscription at any time?"
                        answer = {
                            <div>
                                Absolutely! You can cancel your subscription at any time directly from your account settings. If you need 
                                assistance, please contact our customer support team at <a href="mailto:Hai@feasto.io" className='text-primary-theme-color border-b border-primary-theme-color'>Hai@feasto.io</a>.
                            </div>
                        }
                    />
                </div>

                <div className='w-full mt-20 bg-gray-50 border border-gray-300 rounded-lg p-14'>
                    <div className='max-w-[34rem] mx-auto text-center'>
                        <div className='w-full text-4xl text-gray-800 font-black'>
                            Still have some question?
                        </div>
                        <div className='w-full text-lg text-gray-600 mt-3'>
                            Can't find the answer that you're looking for? Feel free to our team reach out for more info.
                        </div>
                    </div>
                    <div className='w-full h-fit mt-14 flex flex-1 justify-between items-center'>
                        <div className='w-fit flex justify-between items-center gap-4'>
                            <div className='bg-primary-theme-color py-4 px-5 rounded-md'>
                                <span class="iconify akar-icons--open-envelope text-white w-7 h-7"></span>
                            </div>
                            <div className=''>
                                <div className='text-lg text-primary-theme-color font-medium'>Email address</div>
                                <div className='text-xl text-gray-800 font-semibold mt-2'>hello@feasto.io</div>
                            </div>
                        </div>    

                        <div className='inline-block h-full w-0.5 self-stretch bg-gray-300'></div>                    

                        <div className='w-fit flex justify-between items-center gap-4'>
                            <div className='bg-primary-theme-color py-4 px-5 rounded-md'>
                                <span class="iconify akar-icons--phone text-white w-7 h-7"></span>
                            </div>
                            <div className=''>
                                <div className='text-lg text-primary-theme-color font-medium'>Get in touch</div>
                                <div className='text-xl text-gray-800 font-semibold mt-2'>+94 77 604 4021</div>
                            </div>
                        </div>  

                        <div></div>                      

                        <div className='w-fit flex justify-between items-center gap-4'>
                            <div className='bg-primary-theme-color py-4 px-5 rounded-md flex justify-center items-center'>
                                <span class="iconify akar-icons--location text-white w-8 h-8"></span>
                            </div>
                            <div className=''>
                                <div className='text-lg text-primary-theme-color font-medium'>Location</div>
                                <div className='text-xl text-gray-800 font-semibold mt-2'>Jaffna, Sri Lanka</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='w-full mt-32 px-32 pt-16 pb-20 border-t border-gray-200 flex justify-between items-center gap-10'>
                    <div>
                        <div>
                            <img src={Logo} /> 
                            <div className='mt-8 text-lg text-gray-600'>
                                Feasto simplifies creating a stunning, professional web store with its user-friendly templates and quick setup.
                            </div>
                        </div>
                        <div className='w-fit mt-8 flex justify-center items-center gap-4'>
                            <button className='w-7 h-7 border border-gray-300 rounded-full flex justify-center items-center'>
                                <span class="iconify akar-icons--linkedin-fill text-gray-900 w-4 h-4"></span>
                            </button>
                            <button className='flex justify-center items-center'>
                                <span class="iconify mdi--facebook text-primary-theme-color h-8 w-8"></span>
                            </button>
                            <button className='w-7 h-7 border border-gray-300 rounded-full flex justify-center items-center'>
                                <span class="iconify mdi--instagram text-gray-900 w-4 h-4"></span>
                            </button>
                            <button className='w-7 h-7 border border-gray-300 rounded-full flex justify-center items-center'>
                                <span class="iconify mdi--whatsapp text-gray-900 w-4 h-4"></span>
                            </button>
                        </div>
                    </div>
                
                    <div className='w-full flex justify-between gap-10 text-gray-800'>
                        <div>
                            <div className='text-xl font-semibold'>Company</div>
                            <ul className='mt-8'>
                                <li>
                                    <Link>About us</Link>
                                </li>
                                <li>
                                    <Link className='mt-4'>Contact us</Link>
                                </li>
                                <li>
                                    <Link className='mt-4'>Careers</Link>
                                </li>
                                <li>
                                    <Link className='mt-4'>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className='mt-4'>Terms & service</Link>
                                </li>                                    
                            </ul> 
                        </div>
                        <div>
                            <div className='text-xl font-semibold'>Templates</div>
                            <ul className='mt-8'>
                                <li>
                                    <Link>Restaurants & Food Stalls</Link>
                                </li>
                                <li>
                                    <Link className='mt-4'>Retail stores</Link>
                                </li>
                                <li>
                                    <Link className='mt-4'>Grocery stores</Link>
                                </li>                                    
                            </ul>
                        </div>
                        <div>
                            <div className='text-xl font-semibold'>Resources</div>
                            <ul className='mt-8'>
                                <li>
                                    <Link>Blogs</Link>
                                </li>
                                <li>
                                    <Link className='mt-4'>Knowledge base</Link>
                                </li>
                                <li>
                                    <Link className='mt-4'>Help center</Link>
                                </li>                                    
                            </ul>
                        </div>
                        <div>
                            <div className='text-xl font-semibold'>Features</div>
                            <ul className='mt-8'>
                                <li>
                                    <Link>WhatsApp order management</Link>
                                </li>
                                <li>
                                    <Link className='mt-4'>Digital storefront</Link>
                                </li>
                                <li>
                                    <Link className='mt-4'>Insightful analytics</Link>
                                </li>
                                <li>
                                    <Link className='mt-4'>Effortless offer management</Link>
                                </li>                                    
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='bg-primary-theme-color px-32 py-5 flex justify-between items-center gap-10'>
                    <div className='text-white flex items-center gap-1'>
                        Designed & Developed with <span class="iconify mdi--heart text-white w-4 h-4"></span> by 
                        <Link className='border-b border-white'>Cogntix</Link>
                    </div>
                    <div className='text-white flex items-center gap-1'>
                        <span class="iconify mdi--copyright text-white w-4 h-4"></span> 2022 Feasto. All rights reserved.
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default LandingPage