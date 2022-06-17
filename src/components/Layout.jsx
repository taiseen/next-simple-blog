import { Header, Footer } from '.'
import Head from 'next/head'


// this component call from ../pages/_app.js file...
const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <title>Layout page</title>
            </Head>


            <Header />

            <main>
                {
                    children
                }
            </main>

            <Footer />
        </>
    )
}

export default Layout