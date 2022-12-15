import Head from 'next/head'
import Navbar from '../Navbar'

function Layout({ children })
{

  return (
    <>
      <Head>
        <title>{"Mohammed Ramadan"}</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </>
  )
}

export default Layout