import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import InitialNavbar from '@/components/InitialNavbar'
import P from "@/components/text/P"
import { supabase } from 'lib/supabaseClient';
const inter = Inter({ subsets: ['latin'] })
import { useState, useEffect } from "react"
import Link from 'next/link'



export default function Role(){
  const [role, setRole] = useState('Customer')
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState([])
  const [fetchError, setfetchError] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
   

  useEffect(() => {
    async function getProfile() {
      setLoading(true)
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
      var user = session
      setLoading(false)
    }
    async function getPublicUser() {
      
      const { data, error } = await supabase.from('User').select()

      if(error){
        setfetchError("Can't find User")
        setUser(null)
        console.log(error)
      }
      if(data){
        setUser(data)
        setfetchError(null)
      }

    }

    getProfile();
    getPublicUser();
  }, [])

  const radioOnChange = () =>{
    if(user.role=="CUSTOMER"){
      <Link href="/customer"></Link>
    }
    if(user.role=="VENDOR"){
      <Link href="/vendor"></Link>
    }
  }
  return(
        <>
        <ul>
        {user.map((country) => (
          <li key={country.email}>{country.role}</li>
        ))}
      </ul>
        <InitialNavbar></InitialNavbar>
        <div className='flex items-center justify-center min-h-screen bg-secondary'>
        <div className='relative flex flex-col m-6 bg-background shadow-2xl rounded-2xl md:flex md:flex-row md:space-y-0 md:m-0 md:mx-auto'>
          <div className='p-6 md:p-10'>
                <h2 className='mb-5 text-4xl font-bold xs:text-xs'>Register</h2>   

                
                <div className='flex flex-col md:flex-row p-4'>
                  <div className='flex flex-col md:flex-row p-4'>
                    <input type="radio" 
                    name="radio-regis" 
                    id="vendor" 
                    onChange={(e) => setRole("vendor")} 
                    value={ role } 
                    className='flex flex-col md:flex-row radio radio-secondary space-x-2' />
                    <label htmlFor="vendor" className='flex flex-col md:flex-row md:pl-4 text-secondary'>Vendor</label>
                  </div>
                  <div className='flex flex-col md:flex-row p-4'>
                    <input type="radio" 
                    name='radio-regis' 
                    id="customer" 
                    onChange={(e) => setRole("customer")} 
                    value={ role } 
                    className='flex flex-col md:flex-row radio radio-secondary'/>
                    <label htmlFor="customer" className='flex flex-col md:flex-row md:pl-4 text-secondary'>Customer</label>
                  </div>
                    
                </div>

                <div className='flex flex-row pt-4 items-stretch md:items-center sm:items-center'>
                  <Link href={{pathname:'/[slug]', query: {slug: role}}}>
                    <button className='btn btn-secondary' onClick={radioOnChange}>Finish</button>
                  </Link>
                  
                </div>
                <div className='mt-2 border-b border-mock'></div>

                
          </div>
            
        </div>
        
        
        
      </div>
        </>
        
        
    )
    

}

