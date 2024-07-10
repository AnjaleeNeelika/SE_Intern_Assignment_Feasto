import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className='h-screen relative bg-white overflow-hidden'>
            <div className='absolute w-full h-full top-0 left-0 flex justify-center items-center pointer-events-none'>
                <div className='w-[1200px] h-full flex justify-center gap-7'>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div
                            key={index}
                            className='bg-red-50 opacity-50 h-full w-[100px] mx-0'
                        ></div>
                    ))}
                </div>                
            </div>
            <div className='relative z-10 h-full'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/landing-page' element={<LandingPage />} />
                </Routes>
            </div>
            
        </div>
    )
}

export default App