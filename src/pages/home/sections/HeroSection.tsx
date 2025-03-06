import React from 'react'

export default function HeroSection() {
return (
    <div className='flex  ml-[20px] mr-[20px] h-[550px] mt-[20px] rounded-[50px] items-center bg-white'>
            {/* Hero section */}
        <div>
            <div className=' ml-[20px] mr-[auto] justify-start h-[200px]'>
                <h1 className='font-bold p-[30px]'>Hallo!, Saya <span className='text-5xl p-[10px] mt-[20px] bg-gradient-to-br from-sky-500 to-purple-700 text-transparent bg-clip-text'>Arif Kurniawan</span></h1>
                <h2 className=' text-sky-900 text-4xl  font-bold animate-bounce'>FullStack Developer</h2>
                    <div>
                        <p className='font-'>Mengembangkan solusi digital yang efisien dan scalable,<br/>
                        mengintegrasikan frontend dan backend untuk pengalaman pengguna yang optimal</p>
                    </div>

                    {/* bottom */}
                <div className=' flex justify-center items-center mt-[70px] gap-[28px]'>
                    <button  className='text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 bg-indigo-600 w-[120px] h-[40px] border rounded-xl'>
                        View Project
                    </button>
                    <button className='text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 bg-indigo-600  w-[100px] h-[40px] border rounded-xl'>
                        Contact Me
                    </button>
                </div>
            </div>
        </div>

        <div>
        <div className='relative flex items-cente'>
            <div className='mt-[20px] ml-[40px] '>
            <span className='absolute top-10 left-7  w-full h-full flex justify-center items-center animate-spin'>
            <svg width={500} height={500} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
            <path fill="#3F51B5" d="M60.9,-37.2C72.6,-14.9,71.4,12.8,59.1,33.4C46.7,54,23.4,67.5,-1.5,68.3C-26.3,69.2,-52.6,57.4,-66.4,35.9C-80.2,14.4,-81.5,-16.7,-68.4,-39.8C-55.2,-62.8,-27.6,-77.8,-1.5,-76.9C24.6,-76.1,49.3,-59.4,60.9,-37.2Z" transform="translate(100 100)" />
            </svg>
            </span>
                <img src="Assets/removebg-preview-removebg-preview.png" alt="" className='row max-w-full mx-auto drop-shadow-2xl ' />
            </div>
        </div>
        </div>
    </div>
)
}
