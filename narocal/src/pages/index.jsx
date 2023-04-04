import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import InitialNavbar from '@/components/InitialNavbar'
import Card from '@/components/Card'
import ProductCard from '@/components/ProductCard'
import VendorCard from '@/components/VendorCard'
const inter = Inter({ subsets: ['latin'] })
import Login from './login'
import Account from '../components/account'
import SearchProduct from './searchproduct'
import {SetStateAction, useRef, useState,useEffect} from 'react';
import { supabase } from 'lib/supabaseClient';
import {useNavigate} from "react-router-dom"


export default function Home() {
  // let navigate = useNavigate()

  function gotoSearchProductPage(){
    // return <a href='/searchproduct'></a>
    return <Link href='/searchproduct'></Link>
    // return window.location.href = "/searchproduct"
    
  }

  return (
    <>
      <InitialNavbar></InitialNavbar>
      <div className='flex justify-center bg-test'>

        <div className='flex flex-col gap-y-10 bg-background p-10'>

          <div className='flex justify-center gap-x-10 bg-background'>

            <a className="btn btn-outline btn-secondary py-2 px-4" href='/searchproduct'>Product</a>

            <a className="btn btn-outline btn-secondary py-2 px-4">Vendor</a>
          </div>
          
          <div className="grid grid-cols-4 gap-4 bg-background overflow-y-auto h-[50vh] overscroll-contain">
            <ProductCard title='Gucci' body='Jackie 1961 small shoulder bag'></ProductCard>
            <ProductCard title='TOM FORD' body='straight-leg jeans'></ProductCard>
            <ProductCard title='Dolce & Gabbana' body='ripped-detail straight-leg jeans'></ProductCard>
            <ProductCard title='Diesel' body='straight-leg 1995 jeans'></ProductCard>
            <ProductCard title='Nike' body='Dunk Low Retro Panda'></ProductCard>
            <ProductCard title='Prada' body='Double Match cotton shirt'></ProductCard>
            <ProductCard title='Balenciaga' body='logo-print zip-up jacket'></ProductCard>
            <ProductCard title='Maison Margiela' body='double-breasted tailored coat'></ProductCard>
            <ProductCard title='Kenzo' body='logo-print belt bag'></ProductCard>
          </div>

          {/* <div className='flex justify-center flex-col bg-secondary gap-5 overflow-y-auto p-10'> */}
          <div className='grid grid-cols-1 gap-5 bg-secondary overflow-y-auto h-[80vh] p-8 overscroll-contain'>
            <VendorCard name='Chris Evans' language='English' exchange_rate='1 pound = 40 Baht' shopping_rate='300 Baht'></VendorCard>
            <VendorCard name='Yoko Ano' language='Thai, Japanese' exchange_rate='1 Yen = 0.28 Baht' shopping_rate='350 Baht'></VendorCard>
            <VendorCard name='Yoshida' language='Japanese' exchange_rate='1 Yen = 0.3 Baht' shopping_rate='400 Baht'></VendorCard>
            <VendorCard name='Miyawaki Sakura' language='Japanese' exchange_rate='1 Yen = 0.3 Baht' shopping_rate='400 Baht'></VendorCard>
          </div>



        </div>

      </div>
      
      
    </>
  )
}
