import img4 from '../assets/img4.svg';
import img5 from '../assets/img5.svg';

const About = () => {
    return (
        <div className="md:px-14 p-4 max-w-s mx-auto">
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className='md:w-[1/2]'>
                    <img src={img4} alt="Aboutimg1" />
                </div>
                <div className='md:w-2/5'>
                    <h2 className='font-bold text-4xl'>We have been improving our product for <span className='text-secondary'> many years.</span></h2>
                    <p className='mt-6 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nisi quas pariatur itaque ad facere! Voluptate id esse sapiente consequatur molestias eveniet sequi perferendis nisi sed quas, dolorum ea minima?</p>
                    <button className='bg-secondary mt-6 px-6 py-3 m-3 rounded text-white hover:bg-primary'>Get Started</button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-4'>
                <div className='md:w-[1/2]'>
                    <img src={img5} alt="Aboutimg1" />
                </div>
                <div className='md:w-2/5 ml-12'>
                    <h2 className='font-bold text-4xl'>We have been improving our product for <span className='text-secondary'> many years.</span></h2>
                    <p className='mt-6 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nisi quas pariatur itaque ad facere! Voluptate id esse sapiente consequatur molestias eveniet sequi perferendis nisi sed quas, dolorum ea minima?</p>
                    <button className='bg-secondary mt-6 px-6 py-3 m-3 rounded text-white hover:bg-primary'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default About