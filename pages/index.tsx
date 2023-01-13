import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Link from 'next/link';

import styles from '../styles/Home.module.css'

import Navbar from '../components/Layout/Navbar';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';

import Skills from '../components/Skills/Skills';
import WorkGrid from '../components/WorkGrid/WorkGrid';
import GitGrid from '../components/GitGrid/GitGrid';
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Travis Harvey Web Development</title>
        <meta name="description" content="Travis Harvey - Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/4ab9d3f562.js"></script>

      </Head>
      <Navbar />
      <main>
      <Banner />
      <About />
      <Skills />
      <WorkGrid />
      <GitGrid />
      <Contact />
      </main>
      <Footer />
    </>

  )
}
