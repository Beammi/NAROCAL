import Image from "next/image"
import P from "@/components/text/P"
import ProductCard from "@/components/ProductCardSupa"
import ProfileVendorMock from "../../pages/assets/vendor_profile_mock.png"
import Link from "next/link"
import VendorCard from "@/components/vendors/VendorCard"
import VendorList from "@/components/vendors/VendorList"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
import CustomerNavbar from "@/components/CustomerNavbar"
import Hero from "@/components/Hero"

export const revalidate = 60

export default function CustomerHome() {
  const [vendors, setVendors] = useState([])
  const [len, setLen] = useState(0)
  const [vendorName, setVendorName] = useState(null)
  const [products, setProducts] = useState([])
  const [productLen,setProductLen] = useState(0)

  useEffect(() => {
    async function getAllVendors() {
      let { data: VendorProfile, error } = await supabase
        .from("VendorProfile")
        .select("*")

      if (error) {
        console.log("Error Vendor Profile:" + error)
      } else if (VendorProfile == null) {
        console.log("can't find vendors")
      } else {
        setVendors(VendorProfile)
        setLen(Object.keys(VendorProfile).length)
        // console.log(JSON.stringify(vendors[0].userId))
        console.log(JSON.stringify(vendors[0]))
      }
    }
    async function matchVendors() {
      let { data: VendorsName, error } = await supabase.from("VendorProfile")
        .select(`
              userId,
                  User (
                      firstname,lastname
              )
          `)
      if (error) {
        console.log("Error in match vendors" + JSON.stringify(error))
      } else {
        // console.log(JSON.stringify(VendorsName[0].User.firstname))
        console.log(JSON.stringify(VendorsName))
        setVendorName(VendorsName)
      }
    }

    async function getProducts() {
      let { data, error } = await supabase.from("Product").select("*")
      console.log(JSON.stringify(data))

      if (error) {
        console.log(JSON.stringify(error))
      } else if (data == null) {
        console.log("Product null")
      } else {
        setProducts(data) // products ***
        console.log(JSON.stringify(products[0]))
        setProductLen(Object.keys(data).length)
      }
    }

    getAllVendors()
    matchVendors()
    getProducts()
  }, [len,productLen])

  const renderVendors = () => {
    let li = []
    if(vendorName==null){
        console.log("pass")
        return
    }else{
        for (let i = 0; i < len; i++) {
            console.log("render pass")
            // let j = vendors[i].userId
            li.push(
              <VendorCard
                name={vendorName[i].User.firstname}
                language={"English"}
                exchange_rate={"1 Dollar = 35 Baht"}
                shopping_rate={vendors[i].shpRate}
                link={vendors[i].id}
              ></VendorCard>
            )
          }
          return li
    }
  }
  const renderProduct = () => {
    if (products == null) {
      console.log("Products null")
    } else {
      let li = []
      for (let i = 0; i < productLen; i++) {
        console.log("render pass")
        li.push(
          <ProductCard
            title={products[i].name}
            body={products[i].description}
          ></ProductCard>
        )
      }
      return li
    }
  }
  return (
    <>
      <CustomerNavbar></CustomerNavbar>
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

          <div className="grid md:grid-cols-5 sm:grid-cols-1 gap-4 bg-background overflow-y-auto h-[50vh] overscroll-contain">
            {/* <ProductCard
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
            <ProductCard title="Kenzo" body="logo-print belt bag"></ProductCard> */}
            {renderProduct()}
          </div>

          <div className="grid grid-cols-1 gap-5 bg-secondary overflow-y-auto h-[80vh] p-8 overscroll-contain">
            {renderVendors()}
          </div>
        </div>
      </div>
    </>
  )
}
