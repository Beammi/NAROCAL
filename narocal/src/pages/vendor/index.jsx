import VendorNavBar from "@/components/vendors/VendorNavBar"
import Image from "next/image"
import P from "@/components/text/P"
import ProductCard from "@/components/ProductCardSupa"
import ProfileVendorMock from "../../pages/assets/vendor_profile_mock.png"
import Link from "next/link"
import VendorCard from "@/components/vendors/VendorCard"
import VendorList from "@/components/vendors/VendorList"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
export const revalidate = 60

export default function VendorsMain() {
  // const router = useRouter();
  const [vendors, setVendors] = useState([])
  const [len, setLen] = useState(0)
  const [vendorName, setVendorName] = useState(null)


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
        console.log(JSON.stringify(vendors))
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

    getAllVendors()
    matchVendors()
  }, [len])

  const renderVendors = () => {
    let li = []
    if(vendorName==null){
        console.log("pass")
    }else{
        for (let i = 0; i < len; i++) {
            console.log("render pass")
            let j = vendors[i].userId
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
  return (
    <div>
      <VendorNavBar></VendorNavBar>

      <div className="flex justify-center bg-test">
        <div className="flex flex-col m-6 items-center">
          <div className="md:w-5/6 justify-items-center">
            <h3 className="md:text-xl xs:text-xs bg-background p-2 rounded-t-lg">
              Vendor
            </h3>
            <ul className="grid justify-items-center sm:justify-items-center md:grid-cols-2 sm:grid-flow-row sm:auto-rows-auto gap-4 overflow-x-auto overflow-contain bg-background rounded-b-lg">
              {/* {vendorsTemp.map((vendor) => (
                <VendorCard
                  name={vendor.name}
                  language={vendor.language}
                  exchange_rate={vendor.exchange_rate}
                  shopping_rate={vendor.shopping_rate}
                  link={vendor.id}
                ></VendorCard>
              ))} */}
              {renderVendors()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
