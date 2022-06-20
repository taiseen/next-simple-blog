import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import PuffLoader from "react-spinners/PuffLoader";
import fetcher from "../lib/fetcher";
import Author from './_child/Author';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css/navigation';
import 'swiper/css';



const MostPopular = () => {

    const { data, isLoading, isError } = fetcher('api/popular');

    if(isError) return <div>Error : at MostPopular Section...</div>

    return (
        <section className='container mx-auto py-10 px-4 md:px-20'>

            <h1 className="py-12 text-center text-4xl font-bold">Most Popular</h1>

            <Swiper
                loop={true}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    380: {
                        slidesPerView: 1,
                    },
                    1300: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    }
                }}
            >
                {
                    isLoading
                        ? <PuffLoader color={'#9f1111'} size={80} />
                        : data.map(post =>
                            <SwiperSlide key={post.id}>
                                <Post post={post} />
                            </SwiperSlide>
                        )
                }
            </Swiper>

        </section>
    )
}

export default MostPopular


const Post = ({ post }) => (


    <div className="px-4 flex flex-col items-center">

        <div>
            <Image src={post?.img} width={600} height={400} alt='info image' />
        </div>

        <div className="flex justify-center flex-col py-4 px-6">

            <div className="pb-4">
                <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">{post?.category} </a></Link>
                <Link href={"/"}><a className="text-gray-600 hover:text-gray-800"> - {post.published}</a></Link>
            </div>


            <Link href={"/"}>
                <a className="text-xl md:text-3xl font-bold text-gray-800 hover:text-gray-600 duration-200">
                    {post?.title}
                </a>
            </Link>

            <p className="text-gray-500 py-3">{post.subtitle}</p>

            <Author author={post.author} />

        </div>
    </div>
)