import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import InitialNavbar from "@/components/InitialNavbar"
import ProductCard from "@/components/ProductCard"
import VendorCard from "@/components/vendors/VendorCard"
import Hero from "@/components/Hero"
const inter = Inter({ subsets: ["latin"] })
import Login from "./login"
import Account from "../components/account"
import { SetStateAction, useRef, useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"

export default function Home() {
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
  return (
    <>
      <InitialNavbar></InitialNavbar>
      <div className="flex justify-center bg-test pt-24">
        <div className="flex flex-col gap-y-10 bg-background p-10 w-5/6">
          <div className="flex justify-center gap-x-10 bg-background">
            {/* <a className="btn btn-outline btn-secondary py-2 px-4" href='/searchproduct'>Product</a>
            <a className="btn btn-outline btn-secondary py-2 px-4">Vendor</a> */}
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-5/6 mt-7 bg-gray-200"
            />
          </div>
          <Hero></Hero>

          <div className="grid grid-cols-5 gap-4 bg-background overflow-y-auto h-[50vh] overscroll-contain">
            <ProductCard
              title="Gucci"
              body="Jackie 1961 small shoulder bag"
            ></ProductCard>
            <ProductCard
              title="TOM FORD"
              body="straight-leg jeans"
            ></ProductCard>
            <ProductCard
              title="Dolce & Gabbana"
              body="ripped-detail straight-leg jeans"
            ></ProductCard>
            <ProductCard
              title="Diesel"
              body="straight-leg 1995 jeans"
            ></ProductCard>
            <ProductCard title="Nike" body="Dunk Low Retro Panda"></ProductCard>
            <ProductCard
              title="Prada"
              body="Double Match cotton shirt"
            ></ProductCard>
            <ProductCard
              title="Balenciaga"
              body="logo-print zip-up jacket"
            ></ProductCard>
            <ProductCard
              title="Maison Margiela"
              body="double-breasted tailored coat"
            ></ProductCard>
            <ProductCard title="Kenzo" body="logo-print belt bag"></ProductCard>
          </div>

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
      </div>
    </>
  )
}
