import Image from 'next/image'
import Link from 'next/link'
import Author from './Author'


const Related = () => {

    return (
        <section className='pt-20'>

            <h1 className="py-10 text-center text-3xl font-bold">Related</h1>

            <div className="flex flex-col gap-10">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
}

export default Related




const Post = () => (

    <div className='flex gap-5'>
        <div className="flex flex-col justify-start">
            <Link href={'/'}><a>
                <Image src={ "/images/img1.jpg"} width={300} height={200} alt='info image' className='rounded object-cover' />
            </a></Link>
        </div>

        <div className="flex flex-col justify-center">
            <div>
                <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">none </a></Link>
                <Link href={"/"}><a className="text-gray-600 hover:text-gray-800"> - none </a></Link>
            </div>

            <Link href={"/"}>
                <a className="text-xl font-bold text-gray-800 hover:text-gray-600 duration-200">
                    non title
                </a>
            </Link>

            <Author />
        </div>
    </div>
)