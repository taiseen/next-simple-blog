import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import PuffLoader from "react-spinners/PuffLoader";
import fetcher from '../lib/fetcher';
import Author from './_child/Author';
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css/pagination';
import 'swiper/css';


const HeroSection = () => {

    // use this Middleware for enabling slider autoplay 
    // SwiperCore.use([Autoplay]);

    const { data, isLoading, isError } = fetcher('api/trending');

    if (isError) return <div>Error : at Hero Section... {isError}</div>
    console.log('Hero error: ', isError);
    console.log('Hero data : ', data);

    return (
        <section className="py-16 md:bg-[url('/images/banner.png')] bg-no-repeat bg-right" >

            <div className="container mx-auto px-4 md:px-20">

                <h1 className="pb-12 text-center text-4xl font-bold">Trending</h1>

                <Swiper
                    loop={true}
                    slidesPerView={1}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                >
                    {
                        isLoading
                            ? <PuffLoader color={'#9f1111'} size={80} />
                            : data.map(post =>
                                <SwiperSlide key={post.id}>
                                    <Slider post={post} />
                                </SwiperSlide>
                            )
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default HeroSection;


const Slider = ({ post }) => (


    <div className='grid md:grid-cols-2 gap-4 pb-8'>


        {/* order-2 md:order-1 */}
        <div>
            <Link href='/'><a>
                <Image src={post?.img} width={600} height={600} alt='info image' className='object-cover' />
            </a></Link>
        </div>


        {/* order-1 md:order-2 */}
        <div className=' flex flex-col justify-center'>
            <div className="pt-4 ">
                <div className="pb-4">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">
                        {post?.category}
                    </a></Link>
                    <Link href={"/"}><a className="text-gray-600 hover:text-gray-800">
                        &nbsp; - {post.published}
                    </a></Link>
                </div>

                <Link href={"/"}>
                    <a className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 hover:text-gray-600 duration-200">
                        {post?.title}
                    </a>
                </Link>
            </div>

            <p className="text-gray-500 py-3">{post.subtitle}</p>

            <Author author={post.author} />

        </div>

    </div>
)