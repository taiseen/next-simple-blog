import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from '../assets';
import Author from './_child/Author';
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css/pagination';
import 'swiper/css';


const HeroSection = () => {

    // dependency for enabling slider autoplay
    SwiperCore.use([Autoplay]);

    const bg = {
        background: "url('../assets/banner.png') no-repeat",
        backgroundPosition: "right"
    }

    return (
        <section className="py-16 bg-[url('../assets/banner.png')] bg-no-repeat bg-right" >
            {/* <section className='py-16' style={bg}> */}

            <div className="container mx-auto px-4 md:px-20">

                <h1 className="pb-12 text-center text-4xl font-bold">Trending</h1>

                <Swiper
                    loop={true}
                    slidesPerView={1}
                    modules={[Pagination]}
                    autoplay={{ delay: 4000 }}
                    pagination={{ dynamicBullets: true }}
                >
                    <SwiperSlide>{Slider()}</SwiperSlide>
                    <SwiperSlide>{Slider()}</SwiperSlide>
                    <SwiperSlide>{Slider()}</SwiperSlide>
                    <SwiperSlide>{Slider()}</SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}

export default HeroSection;


const Slider = () => (

    <div className='grid md:grid-cols-2 gap-4 pb-8'>

        <div className='order-2 md:order-1'>

            <Link href='/'>
                <a>
                    {/* <Image src={'/images/img1.jpg'} width={600} height={600} alt='info image'/> */}
                    <Image src={images.img1} width={600} height={600} alt='info image' />
                </a>
            </Link>

        </div>

        <div className='order-1 md:order-2 flex flex-col justify-center'>
            <div className="pt-4 ">
                <div className="pb-4">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                    <Link href={"/"}><a className="text-gray-600 hover:text-gray-800"> - July 3, 2022</a></Link>
                </div>

                <Link href={"/"}>
                    <a className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 hover:text-gray-600 duration-200">
                        Your most unhappy customers are your greatest source of learning
                    </a>
                </Link>
            </div>

            <p className="text-gray-500 py-3">
                Even the all-powerful Pointing has no control about the blind texts it is an almost un-orthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            </p>

            <Author />

        </div>

    </div>
)