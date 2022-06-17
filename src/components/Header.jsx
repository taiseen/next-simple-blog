import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";


const Header = () => {

    return (
        <header className='bg-gray-300 py-4 '>
            <div className="xl:container xl:mx-auto 
            flex flex-col items-center text-center
            sm:flex-row sm:justify-between">

                {/* 🟨🟨🟨 For Search Box UI */}
                <div className='w-fit sm:w-96 py-4 flex justify-center order-2
                sm:py-0 sm:order-1 md:flex-none' >
                    <input
                        type="text"
                        placeholder='Search...'
                        className='inputBox'
                    />
                </div>

                <div className='w-fit sm:w-80 shrink sm:order-2'>
                    <Link href='/'>
                        <a className="font-bold uppercase text-3xl">Design</a>
                    </Link>
                </div>

                {/* 🟨🟨🟨 For Social Icon UI */}
                <div className='w-fit sm:w-96 flex justify-center order-3 pt-2 sm:pt-0'>
                    <div className="flex gap-6">
                        <Link href='/'><a><ImFacebook color="#888888" /></a></Link>
                        <Link href='/'><a><ImTwitter color="#888888" /></a></Link>
                        <Link href='/'><a><ImYoutube color="#888888" /></a></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header