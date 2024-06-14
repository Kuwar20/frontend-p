import React from 'react'
import img2 from '../assets/img2.png'
const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-28'>
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
            <div>
                    <img src={img2} alt="banner" className='lg:h-[386px]' />
            </div>

                <div className='md:w-3/5'>
                {/* Banner content */}
                <h2 className='md:text-6xl text-4xl font-bold text-white mb-6'>Develop your skills without diligence</h2>
                <p className='text-[#EBEBEB] text-2xl mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore nisi qui facilis itaque ab cum nostrum numquam laudantium quibusdam quae exercitationem commodi deleniti placeat, atque dolore eaque inventore magni?</p>
                <div className='space-x-5 space-y-4'>
                <button className='btnPrimary'>Get Started</button>
                <button className='btnPrimary'>Discount</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home