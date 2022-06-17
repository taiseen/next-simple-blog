import Image from "next/image"
import Link from "next/link"
import { images } from "../../assets"

const Author = () => {

    return (
        <div className="flex py-5">

            <Image src={images.author1} alt="author" className="rounded-full" width={70} height={70} />

            <div className="flex flex-col justify-center px-4">
                <Link href="/">
                    <a className="font-bold text-gray-800 hover:text-gray-600">
                        Flying High
                    </a>
                </Link>
                <span className="text-sm text-gray-500">CEO and Founder</span>
            </div>

        </div>
    )
}

export default Author