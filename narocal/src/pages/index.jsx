import Head from 'next/head'
import Image from 'next/image'
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
    return window.location.href = "/searchproduct"
    
  }

  return (
    <>
      <InitialNavbar></InitialNavbar>
      <div className='flex justify-center bg-test'>

        <div className='flex flex-col gap-y-10 bg-background p-10'>

          <div className='flex justify-center gap-x-10 bg-background'>
            <button className="btn btn-outline btn-secondary py-2 px-4" onClick={gotoSearchProductPage}>
              Product
            </button>

            <button className="btn btn-outline btn-secondary py-2 px-4">
              Vendor
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-4 bg-background overflow-y-auto h-[50vh]">
            <ProductCard title='Gucci' body='Gucci Belt'></ProductCard>
            <ProductCard title='Hermes' body='Hermes Birkin'></ProductCard>
            <ProductCard title='Onitsuka' body='Onitsuka trainer'></ProductCard>
            <ProductCard title='Saint Laurent' body='Saint Laurent Bag'></ProductCard>
            <ProductCard title='Prada' body='Prada Backpack'></ProductCard>
            <ProductCard title='Celine' body='Celine wallet'></ProductCard>
          </div>

          {/* <div className='flex justify-center flex-col bg-secondary gap-5 overflow-y-auto p-10'> */}
          <div className='grid grid-cols-1 gap-5 bg-secondary overflow-y-auto h-[80vh] p-8'>
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
