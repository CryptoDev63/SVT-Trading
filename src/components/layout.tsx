import React from 'react'
import Navbar from './navbar'
import Head from 'next/head'
// import Footer from './footer'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>SVT Trading</title>
                <meta
                    content="SVT Trading"
                    name="description"
                />
                <link href="/favicon.ico" rel="icon" />
            </Head>
            <Navbar />
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
}