import { Author, Spinner, Error } from '.';
import fetcher from '../lib/fetcher';
import Image from 'next/image';
import Link from 'next/link';


// section 2
const LatestPost = () => {

  const { data, isLoading, isError } = fetcher('api/post');

  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (
    <section className="container mx-auto px-4 md:px-20 py-10">

      <h1 className="py-12 text-center text-4xl font-bold">Latest Post</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 px-4">
        {
          data.map(post => <Post key={post.id} post={post} />)
        }
      </div>
    </section>
  )
}

export default LatestPost



const Post = ({ post }) => (

  <div>

    <div>
      <Image src={post?.img} width={500} height={350} alt='info image' className='rounded' />
    </div>

    <div className="info flex justify-center flex-col py-4">

      <div className="pb-4">
        <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">{post.category}</a></Link>
        <Link href={"/"}><a className="text-gray-600 hover:text-gray-800"> - {post.published}</a></Link>
      </div>

      <Link href={"/"}>
        <a className="text-2xl font-bold text-gray-800 hover:text-gray-600 duration-200">
          {post.title}
        </a>
      </Link>

      <p className="text-gray-500 py-3">{post.subtitle}</p>

      <Author author={post.author} />

    </div>
  </div>
)


