import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"
import VendorNavBar from "@/components/vendors/VendorNavBar"
import { supabase } from "lib/supabaseClient"
import Auth from "@/components/Authtentication/auth"
import VendorEditProfile from "./edit"

export default function VendorProfileMainPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const [user, setUser] = useState()

  useEffect(() => {
    async function getProfile() {
      const { data } = await supabase.auth.getUser()
      setUser(data)
      let userJson = data.user.email
      setEmail(userJson)
      // alert(JSON.stringify(userJson))
    }
    getProfile()
  }, [])
  async function signOut() {
    const { error } = await supabase.auth.signOut()
    router.push("/login")
  }
  return (
    <div>
      <VendorNavBar></VendorNavBar>

      {/* <button onClick={handleSubmit}>Edit Profile</button> */}

      <div className="divide-y-2">
        <div className="p-6">
          <Link
            href="/vendor/edit"
            className=" hover:text-secondary md:text-lg sm:text-sm"
          >
            Edit Profile
          </Link>
        </div>
        <div className="p-6">
          <Link
            href="/vendor/products"
            className=" hover:text-secondary md:text-lg sm:text-sm"
          >
            Product
          </Link>
        </div>
        <div className="p-6">
          <button
            type="button"
            onClick={signOut}
            className=" hover:text-secondary md:text-lg sm:text-sm"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
