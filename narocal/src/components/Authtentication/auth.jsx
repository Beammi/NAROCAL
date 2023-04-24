import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import InitialNavbar from '@/components/InitialNavbar'
import P from "@/components/text/P"
import { supabase } from 'lib/supabaseClient';
const inter = Inter({ subsets: ['latin'] })
import {SetStateAction, useRef, useState,useEffect} from 'react';


export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleLoginOtp = async (event) => {
    event.preventDefault()


    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ 
      email,
      options: {
        emailRedirectTo: 'http://localhost:3000/role'
      }
    })

    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }

  const handleLoginPassword = async (event) => {
    event.preventDefault()


    setLoading(true)
    const { error } = await supabase.auth.signIn({ 
      email,
      password,
      options: {
        emailRedirectTo: 'http://localhost:3000/role'
      }
    })

    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }

  
  return (
      <>
      <InitialNavbar></InitialNavbar>
      <div className='flex items-center justify-center min-h-screen bg-secondary'>
        <div className='relative flex flex-col m-6 bg-background shadow-2xl rounded-2xl md:flex md:flex-row md:space-y-0 md:m-0 md:mx-auto'>
          <div className='p-6 md:p-10'>
                <h2 className='mb-5 text-4xl font-bold xs:text-xs'>Log In</h2>   

                <div className='flex flex-col md:flex-row'>
                  <div>
                    <P text='Email' style='text-base xs:text-xs'/>
                    <form className="form-widget" onSubmit={handleLoginOtp}>
                      <div>
                        <input
                          type="email"
                          placeholder="Your email"
                          value={ email }
                          required={true}
                          onChange={(e) => setEmail(e.target.value)}
                          className="inputField peer input w-full max-w-xs"
                        />
                        <P text='Please provide a valid email address.' style='mt-2 invisible peer-invalid:visible text-secondary lg:text-xs'/>

                        {/* Send Magic Link Button */}
                        <div className='flex flex-row pt-4 items-stretch md:items-center sm:items-center'>
                          <button className='btn btn-outline btn-secondary button block' disabled={loading}>
                          {loading ? <span>Loading</span> : <span>Send magic link</span>}
                    
                          </button>
                        </div>
                      </div>
                    
                    </form>
                  </div>
                </div>                
          </div>            
        </div>        
      </div>
          
    </>
    )

}


