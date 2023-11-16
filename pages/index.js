import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Main from "@/components/Main";
import Enjoytv from "@/components/Enjoytv";
import ChildProfil from "@/components/ChildProfil";
import OfflineWatch from "@/components/OfflineWatch";
import Answer from "@/components/Answer";
import Telephone from "@/components/Telephone";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
         <Head>
          <title>Netflix</title>
           <meta name="description" content="Generated by create next app" />
           <meta name="viewport" content="width=device-width, initial-scale=1" />
           <link rel="icon" href="/Netflix.png" />
         </Head>
         <Header/>
         <Main/>
        <Enjoytv/>
        <OfflineWatch/>
        <Telephone/>
        <ChildProfil/>
        <Answer/>
        <Footer/>







    </>
  )
}
