
import { images } from '../assets';
import Author from './_child/Author';
import Image from 'next/image';
import Link from 'next/link';


const LatestPost = () => {

  return (

    <section className="container mx-auto px-4 md:px-20 py-10">

      <h1 className="py-12 text-center text-4xl font-bold">
        Latest Post
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 px-4">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>


    </section>
  )
}

export default LatestPost;



const Post = () => (
  <div className="">

    <div className="img">
      <Image src={images.img1} width={500} height={350} alt='info image' className='rounded' />
    </div>

    <div className="info flex justify-center flex-col py-4">

      <div className="pb-4">
        <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
        <Link href={"/"}><a className="text-gray-600 hover:text-gray-800"> - July 3, 2022</a></Link>
      </div>


      <Link href={"/"}>
        <a className="text-2xl font-bold text-gray-800 hover:text-gray-600 duration-200">
          Your most unhappy customers are your greatest source of learning
        </a>
      </Link>

      <p className="text-gray-500 py-3">
        Even the all-powerful Pointing has no control about the blind texts it is an almost un-orthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
      </p>

      <Author />

    </div>
  </div>
)