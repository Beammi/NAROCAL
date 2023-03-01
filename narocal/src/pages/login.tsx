import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <>
      <Navbar></Navbar>
      <div className='flex items-center justify-center min-h-screen bg-secondary'>
        <div className='relative flex flex-col m-6 space-y-10 bg-alternative shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0'>
            <div className='p-6 md:p-20'>
                <h2 className='mb-5 text-4xl font-bold'>Log In</h2>
                <input type="text"
                    className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                    placeholder="Enter your email address" />
            </div>
        </div>
        
      </div>
          
    </>
  )
}
