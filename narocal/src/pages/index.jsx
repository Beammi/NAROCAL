import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import InitialNavbar from "@/components/InitialNavbar"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"
import VendorCard from "@/components/vendors/VendorCard"
import Hero from "@/components/Hero"
// import {PRODUCTS} from "../../dummy-data"
// import EventList from '@/components/events/event-list'

import EventList from '@/components/events/event-list-supa'
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"

const inter = Inter({ subsets: ["latin"] })
// import Login from "./login"
// import Account from "../components/account"
// import { SetStateAction, useRef, useState, useEffect } from "react"
// import { supabase } from "lib/supabaseClient"
// import { GetServerSideProps } from 'next'

export default function Home() {
  const [products, setProducts] = useState([""])

  const vendors = [
    {
      id: "1",
      name: "Chris Evan",
      language: "English",
      exchange_rate: "1 pound = 40 Baht",
      shopping_rate: "300 Baht",
    },
    {
      id: "2",
      name: "Yoko Ano",
      language: "English",
      exchange_rate: "1 pound = 40 Baht",
      shopping_rate: "300 Baht",
    },
    {
      id: "3",
      name: "Yoshida",
      language: "English",
      exchange_rate: "1 pound = 40 Baht",
      shopping_rate: "300 Baht",
    },
    {
      id: "4",
      name: "Miyawaki Sakura",
      language: "English",
      exchange_rate: "1 pound = 40 Baht",
      shopping_rate: "300 Baht",
    },
  ]

  useEffect(() => {
      async function loadData(){
          const {data, error} = await supabase
              .from('Product')
              .select()

              if(data == null){
                  console.log("pass");
              }else {
                  setProducts(data)
              }


              if (error) {
                  console.log(JSON.stringify(error))
              }
          

      }
      loadData()

  })

  return (
    <>
      <InitialNavbar></InitialNavbar>
      <div className="flex flex-col justify-center bg-test pt-24 w-screen">
        <div className="flex flex-col gap-y-10 bg-background p-20 w-full">
          <Hero></Hero>
          <EventList items={products}/>
          

          {/* <div className='flex justify-center flex-col bg-secondary gap-5 overflow-y-auto p-10'> */}
          <div className='grid grid-cols-1 gap-5 bg-secondary overflow-y-auto h-[80vh] p-8 overscroll-contain'>
            <VendorCard name='Chris Evans' language='English' exchange_rate='1 pound = 40 Baht' shopping_rate='300 Baht' link="1"></VendorCard>
            <VendorCard name='Yoko Ano' language='Thai, Japanese' exchange_rate='1 Yen = 0.28 Baht' shopping_rate='350 Baht' link="2"></VendorCard>
            <VendorCard name='Yoshida' language='Japanese' exchange_rate='1 Yen = 0.3 Baht' shopping_rate='400 Baht' link="3"></VendorCard>
            <VendorCard name='Miyawaki Sakura' language='Japanese' exchange_rate='1 Yen = 0.3 Baht' shopping_rate='400 Baht' link="4"></VendorCard>
          </div>
          {/* <div className="flex justify-center bg-test">
            <div className="flex flex-col m-6">
              <div className="md:w-5/6">
                <h3 className="md:text-xl xs:text-xs bg-background p-2 rounded-t-lg">
                  Vendor
                </h3>
                <ul className="grid justify-items-center md:grid-cols-2 sm:grid-flow-row sm:auto-rows-auto gap-4 overflow-x-auto overflow-contain p-10 bg-background rounded-b-lg">
                  {vendors.map((vendor) => (
                    <VendorCard
                      name={vendor.name}
                      language={vendor.language}
                      exchange_rate={vendor.exchange_rate}
                      shopping_rate={vendor.shopping_rate}
                      link={vendor.id}
                    ></VendorCard>
                  ))}
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}


// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:3001/feed')
//   const feed = await res.json()
//   return {
//     props: { feed },
//   }
// }