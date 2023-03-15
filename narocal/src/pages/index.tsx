import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import prisma from 'lib/prisma'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
    </>
  )
}
