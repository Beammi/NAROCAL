import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
import Link from "next/link"
import CustomerNavbar from "@/components/CustomerNavbar"
import InitialNavbar from "@/components/InitialNavbar"

export default function CustomerProfile() {
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
      <CustomerNavbar></CustomerNavbar>
      <br />
      <div className="p-6 pt-40">
        <Link
          href="/customer/edit"
          className="hover:text-secondary md:text-lg sm:text-sm"
        >
          Edit Profile
        </Link>
      </div>
      <div className="p-6">
        <Link
          href="/role"
          className=" hover:text-secondary md:text-lg sm:text-sm"
        >
          Change Role
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
  )
}
