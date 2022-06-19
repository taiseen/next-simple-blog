import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im';
import NewsLetter from './_child/NewsLetter';
import Link from 'next/link';


const Footer = () => {


  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
  }

  return (
    <footer className="bg-gray-100" style={bg}>

      <NewsLetter />

      <div className='container mx-auto py-12 px-4 text-center'>

        <div className="py-5">
          <div className="flex justify-center gap-6">
            <Link href='/'><a><ImFacebook color="#888888" /></a></Link>
            <Link href='/'><a><ImTwitter color="#888888" /></a></Link>
            <Link href='/'><a><ImYoutube color="#888888" /></a></Link>
          </div>
        </div>

        <p className='py-5 text-gray-400'>Copyright &copy; 2022 all right reserved | This template developed by Taiseen</p>
        <p className='text-gray-400'>Terms & Condition</p>
      </div>
    </footer>

  )
}

export default Footer