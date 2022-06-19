import fetcher from '../lib/fetcher';
import Author from './_child/Author';
import Image from 'next/image';
import Link from 'next/link';


const CategoryPost = () => {

  const { data, isLoading, isError } = fetcher('api/trending');

  return (
    <section className='container mx-auto py-16 px-4 md:px-20'>
      <div className="grid lg:grid-cols-2 gap-4">

        <div>
          <h1 className="py-12 text-center text-4xl font-bold">Business</h1>
          <div className="flex flex-col gap-6">
            {
              isLoading
                ? <h1>Loading...</h1>
                : data.slice(0, 3).map(post => <Post key={post.id} post={post} />)
            }
          </div>
        </div>

        <div>
          <h1 className="py-12 text-center text-4xl font-bold">Travel</h1>
          <div className="flex flex-col gap-6">
            {
              isLoading
                ? <h1>Loading...</h1>
                : data.slice(2, 6).map(post => <Post key={post.id} post={post} />)
            }
          </div>
        </div>

      </div>
    </section>
  )
}

export default CategoryPost


const Post = ({ post }) => (

  <div className='flex flex-col md:flex-row gap-5 pb-8'>

    <div className="flex flex-col justify-start">
      <Image src={post?.img} width={300} height={250} alt='info image' className='rounded object-cover' />
    </div>

    <div className="flex flex-col justify-center">
      <div>
        <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">{post?.category}</a></Link>
        <Link href={"/"}><a className="text-gray-600 hover:text-gray-800"> - {post.published}</a></Link>
      </div>

      <Link href={"/"}>
        <a className="text-xl font-bold text-gray-800 hover:text-gray-600 duration-200">
          {post?.title}
        </a>
      </Link>

      <Author author={post.author} />
    </div>

  </div>
)