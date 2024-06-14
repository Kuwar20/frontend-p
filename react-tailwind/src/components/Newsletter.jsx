import Banner from "../shared/Banner"
import img2 from '../assets/img2.png'

const Newsletter = () => {
    return (
        <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
            <Banner banner={img2} heading={"Develop your skills without diligence"} subheading="
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque veniam iste repellendus in consequatur, laudantium animi, culpa quo magni, magnam eos quod adipisci libero sit nostrum quam eligendi repellat asperiores?" btn1={'Get Started'} btn2={"Discount"} />
        </div>
    )
}

export default Newsletter