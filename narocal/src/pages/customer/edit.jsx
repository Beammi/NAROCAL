import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
import Label from "@/components/Label"
import CustomerNavbar from "@/components/CustomerNavbar"
import InitialNavbar from "@/components/InitialNavbar"


export const revalidate = 60

export default function CustomerEdit(){
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState(null)
    const [firstname, setFirstName] = useState(null)
    const [lastname, setLastName] = useState(null)
    const [userId, setUserId] = useState(null)
    const [shopping_rate, setShoppingRate] = useState(0)
    const [bio, setBio] = useState(null)
    const [language, setLanguage] = useState(null)
  
    function convertStringFormatt(word) {
      if (word == "" || word == null) {
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
          setEmail(convertStringFormatt(JSON.stringify(userJson.email, null, 2)))
          console.log("from get user email" + email)
        }
      }
  
      async function getPublicUser() {
        console.log("email: " + email)
        const { data, error } = await supabase
          .from("User")
          .select()
          .eq("email", email)
  
        if (error) {
          console.log("Error" + error)
        }
  
        if (data.length != 0) {
          setAddress(convertStringFormatt(JSON.stringify(data[0].address)))
          setFirstName(convertStringFormatt(JSON.stringify(data[0].firstname)))
          setLastName(convertStringFormatt(JSON.stringify(data[0].lastname)))
          setUserId(JSON.stringify(data[0].id, null, 2))
          console.log("user id " + lastname)
          if (data[0].firstname == null) {
            setFirstName("")
          }
          if (data[0].lastname == null) {
            setLastName("")
          }
          if (data[0].address == null) {
            setAddress("")
          }
          if (data[0].id == null) {
            setUserId("")
          }
        }
      }
  
      async function getCustomerProfile() {
        const { data, error } = await supabase
          .from("CustomerProfile")
          .select()
          .eq("userId", userId)
        if (error) {
          console.log("Error Customer Profile:" + error)
        } else if (data[0] == null) {
          console.log("pass")
        } else {
          setBio(convertStringFormatt(JSON.stringify(data[0].bio)))
          // setUserId(JSON.stringify(data[0].id,null,2))
          if (data[0].bio == null) {
            setBio("")
          }
        }
      }
  
      getUserEmail()
      getPublicUser()
      getCustomerProfile()
    }, [email, userId])
  
    async function updateProfile(event) {
      event.preventDefault()
      const { error } = await supabase
        .from("User")
        .update({ firstname: firstname, lastname: lastname, address: address })
        .eq("email", email)
      if (error == null) {
        alert("Updated Complete")
        insertCustomerProfile()
      }
    }
  
    async function insertCustomerProfile() {
      const { data, error } = await supabase
        .from("CustomerProfile")
        .select()
        .eq("userId", userId)
      console.log(JSON.stringify(data))
      console.log(error)
  
      if (JSON.stringify(data).length == 2) {
        const { dataUpSert, errorUpsert } = await supabase
          .from("CustomerProfile")
          .insert([{ userId: userId }], { upsert: true })
      } else {
        const { errorUpdate } = await supabase
          .from("CustomerProfile")
          .update({ bio: bio })
          .eq("userId", userId)
        
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
        <CustomerNavbar></CustomerNavbar>
        <form onSubmit={updateProfile} className="form-widget pt-40">
          <div className="p-t m-8 lg:m-20 lg:p-8 grid phone:gap-2 md:gap-6 md:grid-cols-2 phone:grid-cols-1 justify-items-stretch bg-background shadow-2xl rounded-2xl">
            <div className="md:place-self-center">
              
              <Label label="Email" labelId="email"></Label>
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
              <Label label="Firstname" labelId="firstname"></Label>
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
              <Label label="Lastname" labelId="lastname"></Label>
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
              <Label label="Address" labelId="address"></Label>
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
  
            
  
            <div className="md:place-self-center">
              <Label label="BIO" labelId="bio"></Label>
            </div>
            <div>
              <input
                id="bio"
                type="text"
                value={bio || ""}
                onChange={(e) => setBio(e.target.value)}
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