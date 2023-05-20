import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
import VendorNavBar from "@/components/vendors/VendorNavBar"

import e from "cors"
// var email = ""

export default function VendorEditProfile() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState(null)
  const [firstname, setFirstName] = useState(null)
  const [lastname, setLastName] = useState(null)
  const [userId, setUserId] = useState(null)
  const [shopping_rate, setShoppingRate] = useState(null)

  function convertStringFormatt(word) {
    if (word == "") {
      return ""
    } else {
      let temp = word.slice(1, word.length - 1)
      return temp
    }
  }

  useEffect(() => {
    async function getUserEmail() {
      const { data } = await supabase.auth.getUser()

      let userJson = data.user

      // alert(JSON.stringify(data.user.email))
      // alert(JSON.stringify(userJson.email))

      if (userJson != null) {
        // let temp = convertStringFormatt(JSON.stringify(userJson.email))
        setEmail(JSON.stringify(data.user.email))
      }
    }

    getUserEmail()
  }, [])

  async function updateProfile(event) {
    event.preventDefault()
    getUserEmail()
    let temp = convertStringFormatt(email)

    const { dataUpSert, errorUpsert } = await supabase
      .from("User")
      .update({ firstname: firstname, lastname: lastname, address: address })
      .eq("email", temp)
  }

  async function getPublicUser() {
    let temp = convertStringFormatt(email)
    // setEmail(temp)

    const { data, error } = await supabase
      .from("User")
      .select()
      .eq("email", temp)

    // if (error) {
    //   // alert("Error" + error)
    // }
    if (data.length != 0) {
      setAddress(convertStringFormatt(JSON.stringify(data[0].address)))
      setFirstName(convertStringFormatt(JSON.stringify(data[0].firstname)))
      setLastName(convertStringFormatt(JSON.stringify(data[0].lastname)))
      setUserId(convertStringFormatt(JSON.stringify(data[0].id)))
      if (data[0].firstname == null) {
        setFirstName("")
      }
      if (data[0].lastname == null) {
        setLastName("")
      }
      if (data[0].address == null) {
        setAddress("")
      }
    }
  }
  async function insertVendorProfile() {
    const { data, error } = await supabase
      .from("VendorProfile")
      .select()
      .eq("id", userId)

    if (JSON.stringify(data).length == 2) {
      const { dataUpSert, errorUpsert } = await supabase
        .from("VendorProfile")
        .upsert([{ userId: userId, shpRate: shopping_rate }], { upsert: true })
    }
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut()
    router.push("/login")
  }
  // getPublicUser()
  // insertVendorProfile()
  return (
    <div className="bg-secondary min-h-screen">
      <VendorNavBar></VendorNavBar>
      <form onSubmit={updateProfile} className="form-widget">
        <div className="p-2 m-8 lg:m-20 lg:p-8 grid phone:gap-2 md:gap-6 md:grid-cols-2 phone:grid-cols-1 justify-items-stretch bg-background shadow-2xl rounded-2xl">
          <div className="md:place-self-center">
            <label htmlFor="email" className="md:text-lg phone:text-sm">
              Email
            </label>
          </div>
          <div>
            <input
              id="email"
              type="text"
              value={email}
              disabled
              className="input input-secondary w-full max-w-xs disabled:bg-slate-50 disabled:text-secondary disabled:border-slate-200"
            />
          </div>
          <div className="md:place-self-center">
            <label htmlFor="firstname" className="md:text-lg phone:text-sm">
              Firstname
            </label>
          </div>
          <div>
            <input
              id="firstname"
              className="input input-secondary w-full max-w-xs"
              type="text"
              required
              value={firstname || ""}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="md:place-self-center">
            <label htmlFor="lastname" className="md:text-lg phone:text-sm">
              Lastname
            </label>
          </div>
          <div>
            <input
              id="lastname"
              type="text"
              value={lastname || ""}
              onChange={(e) => setLastName(e.target.value)}
              className="input input-secondary w-full max-w-xs"
            />
          </div>
          <div className="md:place-self-center">
            <label htmlFor="address" className="md:text-lg phone:text-sm">
              Address
            </label>
          </div>
          <div>
            <input
              id="adress"
              type="text"
              value={address || ""}
              onChange={(e) => setAddress(e.target.value)}
              className="input input-secondary w-full max-w-xs"
            />
          </div>

          <div className="md:place-self-end">
            <button
              className="btn btn-outline btn-secondary md:text-base phone:text-xs"
              type="submit"
            >
              Update
            </button>
          </div>

          <div className="md:place-self-start">
            <button
              className="btn btn-outline btn-secondary md:text-base phone:text-xs"
              type="button"
              onClick={signOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
