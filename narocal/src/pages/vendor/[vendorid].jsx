import VendorNavBar from "@/components/vendors/VendorNavBar"
import Image from "next/image"
import P from "@/components/text/P"
import ProductCard from "@/components/ProductCard"
import ProfileVendorMock from "../../pages/assets/vendor_profile_mock.png"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"

export default function VendorProfile() {
  const router = useRouter()
  const [role, setRole] = useState(null)
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState()
  console.log(router.query.vendorid)
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
    getProfile()
  })

  return (
    <div>
      <VendorNavBar></VendorNavBar>
      <div className="flex justify-center p-4 bg-test min-h-screen min-w-fit">
        <div className="relative felx flex-row md:items-center sm:justify-center bg-background shadow-2xl rounded-2xl md:flex md:flex-col md:space-y-0 md:m-0 md:mx-auto md:w-3/4 sm:min-w-fit">
          <figure className="pt-4 sm:w-24 md:w-40">
            <Image src={ProfileVendorMock} alt="Vendor's Profile" width={200} />
          </figure>
          <div>
            <h3 className="md:text-2xl xs:text-xs p-2">{router.query.name}</h3>
          </div>
          <div className="rating rating-md p-2">
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-secondary"
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-secondary"
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-secondary"
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-secondary"
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-secondary"
            />
          </div>

          <div className="flex md:flex-row space-x-2 p-4">
            <P
              text="Language:"
              style="font-light md:text-sm sm:text-xs p-2"
            ></P>
            <P
              text="English"
              style="font-light bg-secondary text-white rounded-xl md:text-sm sm:text-xs p-2"
            ></P>
            <P
              text="Japanese"
              style="font-light bg-secondary text-white rounded-xl md:text-sm sm:text-xs p-2"
            ></P>
          </div>
          <div className="flex md:flex-row space-x-2 p-4">
            <P
              text="Shopping Rate:"
              style="font-light md:text-sm sm:text-xs p-2"
            ></P>
            <P
              text="300 Baht"
              style="font-light bg-secondary text-white rounded-xl md:text-sm sm:text-xs p-2"
            ></P>
          </div>
          <div className="flex md:flex-row space-x-2 p-4">
            <P
              text="Currency Rate:"
              style="font-light md:text-sm sm:text-xs p-2"
            ></P>
            <P
              text="1 US Dollar = 35 Baht"
              style="font-light bg-secondary text-white rounded-xl md:text-sm sm:text-xs p-2"
            ></P>
            <P
              text="1 Yen = 0.3 Baht"
              style="font-light bg-secondary text-white rounded-xl md:text-sm sm:text-xs p-2"
            ></P>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-test">
        <div className="flex flex-col m-6 md:w-3/4">
          <div>
            <h3 className="md:text-xl xs:text-xs bg-background p-2 rounded-t-lg">
              Product
            </h3>
            <div className="grid md:grid-cols-4 sm:grid-flow-row sm:auto-rows-auto gap-4 overflow-x-auto overflow-contain h-[50vh] p-10 bg-background rounded-b-lg space-x-4 pt-4">
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
              <ProductCard
                title="Nike"
                body="Dunk Low Retro Panda"
              ></ProductCard>
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
              <ProductCard
                title="Kenzo"
                body="logo-print belt bag"
              ></ProductCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
