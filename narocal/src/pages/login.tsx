import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import P from "@/components/text/P"
const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <>
      <Navbar></Navbar>
      <div className='flex items-center justify-center min-h-screen bg-secondary'>
        <div className='relative flex flex-col m-6 bg-background shadow-2xl rounded-2xl md:flex md:flex-row md:space-y-0 md:m-0 md:mx-auto'>
          <div className='p-6 md:p-10'>
                <h2 className='mb-5 text-4xl font-bold xs:text-xs'>Log In</h2>   

                <div className='flex flex-col md:flex-row'>
                  <div>
                    <P text='Username/Email' style='text-base xs:text-xs'/>
                    <input type="email"
                        className="w-full h-3 p-6 border border-mock rounded-md placeholder:font-light max-w-xs font-medium peer"
                        placeholder="Enter your user/email address" />
                    <P text='Please provide a valid email address.' style='mt-2 invisible peer-invalid:visible text-secondary lg:text-xs'/>
                  </div>
                </div>

                <div className='flex flex-col md:flex-row'>
                  <div>
                    <P text='Password' style='text-base pb-1 xs:text-xs'/>
                      <input type="text"
                        className="w-full h-3 p-6 border border-mock rounded-md placeholder:font-light max-w-xs font-medium"
                        placeholder="Password" />
                  </div>
                </div>
                <div className='flex flex-row pt-4 items-stretch md:items-center sm:items-center'>
                  <button className='btn btn-secondary'>Log In</button>
                  <a className='text-secondary p-6 underline xs:text-xs' href='/'>Forget Password</a>
                </div>
                <div className='mt-2 border-b border-mock'></div>

                <div className='flex flex-col md:flex-row space-y-4 md:space-x-2'>
                  <div className='flex items-center justify-center pt-4'>
                    <button className='flex items-center justify-center btn btn-outline btn-secondary xs:text-xs'>Log In with Google</button>
                  </div>
                  <div className='flex items-center justify-center'>
                    <button className='flex items-center justify-center btn btn-outline btn-secondary p-2 xs:text-xs'>Log In with Facebook</button>
                  </div>
                  
                </div>
          </div>
            
        </div>
        
        
        
      </div>
          
    </>
  )
}
