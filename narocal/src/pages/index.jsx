import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import InitialNavbar from "@/components/InitialNavbar"
import ProductCard from "@/components/ProductCard"
import VendorCard from "@/components/VendorCard"
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
            
            

            {/* <div className="my-3 w-5/6">
              <div className="relative flex w-full flex-wrap items-stretch">
                <input
                  type="text"
                  className="relative m-0 block w-5/6 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-5 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2" />
                  
                <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div> */}

          </div>
          <Hero></Hero>

          <div className="grid grid-cols-5 gap-4 bg-background overflow-y-auto h-[70vh] overscroll-contain">
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
