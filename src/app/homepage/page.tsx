import React from 'react'
import About from '../../pages/home-page/about'
import MySkills from '../../pages/home-page/skills/mySkills'
import HeroSection from '../../pages/home-page/sections/HeroSection'

export default function HomePage() {
return (
    <div className="max-w-screen-xl mx-auto px-4">
        <div className=''>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <HeroSection/>
        </div>
        <div className=''>
        <About/>
        </div>
        <div className='flex-col justify-center items-center '>
        <MySkills/>
        </div>
    </div>
)
}
