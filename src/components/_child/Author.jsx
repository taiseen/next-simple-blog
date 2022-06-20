import Image from "next/image"
import Link from "next/link"


const Author = ({ author }) => {

    
    return (
        <div className="flex py-5">

            <Image src={author?.img || "/images/author/author1.jpg"} alt="author" className="rounded-full" width={70} height={70}  />

            <div className="flex flex-col justify-center px-4">
                <Link href="/">
                    <a className="font-bold text-gray-800 hover:text-gray-600">
                        {author?.name}
                    </a>
                </Link>
                <span className="text-sm text-gray-500">{author?.designation}</span>
            </div>

        </div>
    )
}

export default Author