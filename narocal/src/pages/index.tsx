import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import ProductCard from '@/components/ProductCard'
import VendorCard from '@/components/VendorCard'
import prisma from 'lib/prisma'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className='flex justify-center'>

        <div className='flex flex-col gap-y-10 h-full w-3/5 bg-background p-10'>

          <div className='flex justify-center gap-x-10 bg-background'>
            <button className="btn btn-outline btn-secondary py-2 px-4">
              Product
            </button>

            <button className="btn btn-outline btn-secondary py-2 px-4">
              Vendor
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-4 bg-background overflow-y-auto h-[60vh] overscroll-contain">
            <ProductCard title='Gucci' body='Gucci Belt'></ProductCard>
            <ProductCard title='Hermes' body='Hermes Birkin'></ProductCard>
            <ProductCard title='Onitsuka' body='Onitsuka trainer'></ProductCard>
            <ProductCard title='Nike' body='Nike Dunk Low Panda'></ProductCard>
            <ProductCard title='Saint Laurent' body='Saint Laurent Bag'></ProductCard>
            <ProductCard title='Prada' body='Prada Backpack'></ProductCard>
            <ProductCard title='Celine' body='Celine wallet'></ProductCard>
            <ProductCard title='Balenciaga' body='Balenciaga wallet'></ProductCard>
            <ProductCard title='Adidas' body='Adidas NMD'></ProductCard>
            <ProductCard title='Asics' body='Asics Nimbus'></ProductCard>
          </div>

          <div className=' bg-secondary flex flex-col overflow-y-auto p-8 overscroll-contain h-[50vh] border-2 border-black'>
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
