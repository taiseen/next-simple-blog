import { Author, Related } from '../../components'
import Image from 'next/image';
import fetcher from '../../lib/fetcher';


const post = () => {


    return (
        <section className='container mx-auto px-2 md:px-4 py-16 w-1/2'>
            <div className="flex justify-center">
                <Author />
            </div>

            <div className="py-10">
                <h1 className='font-bold text-4xl text-center pb-5'>
                    Your most unhappy customers are your greatest source of learning.
                </h1>

                <p className='text-gray-500 text-xl text-center'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>

                <div className="py-10">
                    <Image src={'/images/img1.jpg'} width={900} height={600} alt='img' />
                </div>

                <div className='content text-gray-600 text-lg flex flex-col gap-4 pb-16 border-b border-gray-200'>

                    <p> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

                    <p> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

                    <p> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

                </div>
            </div>

            <Related />
        </section>
    )
}

export default post


// export const getStaticProps = async ({ params: { id } }) => {

//     const res = await fetch(`http://localhost:3000/api/post/${id}`);
//     const data = res.json()

//     return {
//         props: {
//             data,
//             isLoading: !data,

//         },
//     };
// }


// // How to get id from url?
// export const getStaticPaths = async () => {

//     const res = await fetch(`http://localhost:3000/api/post`);
//     const data = res.json()
//     console.log(data);
//     const paths = data?.map(user => ({ params: { id: user.id.toString() } }));

//     return {
//         paths,
//         fallback: false
//     }
// }

