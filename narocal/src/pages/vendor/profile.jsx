import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"
import VendorNavBar from '@/components/vendors/VendorNavBar'
import { supabase } from "lib/supabaseClient"
import Auth from '@/components/Authtentication/auth'
import VendorEditProfile from './edit'



export default function VendorEditTemp() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const [user, setUser] = useState()

  useEffect(()=>{
    async function getProfile(){
      const { data } = await supabase.auth.getUser()
      setUser(data)
      let userJson = data.user.email
      setEmail(userJson)
      // alert(JSON.stringify(userJson))

    }
    getProfile()  
  },[])
  // const handleSubmit = async(e) => {
  //   <VendorEditProfile key={email}  />
  //   router.push('vendor/edit')
  // }
  return (
    <div>
      <VendorNavBar></VendorNavBar>

      {/* <button onClick={handleSubmit}>Edit Profile</button> */}
      
      <Link href="/vendor/edit" >Edit Profile</Link>
      <br />
      <Link href="/vendor/products">Product</Link>
    </div>
  )
}
