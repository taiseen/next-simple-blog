// import { getPost } from '../../lib/helper';
import { Author, Error, Related, Spinner } from '../../components'
import { useRouter } from 'next/router';
import fetcher from '../../lib/fetcher';
import Image from 'next/image';


const Post = () => {

    const router = useRouter();
    const { id } = router.query;

    const { data, isLoading, isError } = fetcher(`api/popular/${id}`);

    if (isLoading) return <Spinner />
    if (isError) return <Error />

    return <Article {...data} />
}

export default Post;



const Article = ({ author, title, img, subtitle, description }) => {


    return (
        <section className='container mx-auto px-2 md:px-4 py-16 w-1/2'>
            <div className="flex justify-center">
                {author && <Author />}
            </div>

            <div className="py-10">
                <h1 className='font-bold text-4xl text-center pb-5'>
                    {title || 'No Title'}
                </h1>

                <p className='text-gray-500 text-xl text-center'>
                    {subtitle || 'No Title'}
                </p>

                <div className="py-10">
                    <Image src={img || '/'} width={900} height={600} alt='img' />
                </div>

                <div className='content text-gray-600 text-lg flex flex-col gap-4 pb-16 border-b border-gray-200'>
                    {description || 'No Description'}
                </div>
            </div>

            <Related />
        </section>
    )
}


/*

export const getStaticProps = async ({ params: { id } }) => {

    const post = await getPost(id);

    return { props: post };
}


export const getStaticPaths = async () => {

    const posts = await getPost();

    const paths = posts?.map(post => ({ params: { id: post.id.toString() } }));

    return {
        paths,
        fallback: false
    };
}

*/