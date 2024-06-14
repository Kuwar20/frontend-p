import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white flex">
            <div className='md:w-1/2 space-y-8'>
                <a className='text-2xl font-semibold flex items-center space-x-3 text-primary' href="/">
                    <img className='w-10 inline-block items-center' src={logo} alt="logo" /><span className='text-white'>XYZ</span>
                </a>
                <p className='md:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sit iste cum recusandae veritatis id ut tempora perspiciatis voluptatem sunt, perferendis laborum sapiente accusantium, delectus iusto ipsa deserunt molestiae exercitationem!</p>
            </div>
            <div className='mt-4'>
                <p>Thank you</p>
            </div>
        </div>
    )
}

export default Footer