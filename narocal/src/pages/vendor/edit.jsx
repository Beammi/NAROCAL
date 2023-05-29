import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
import VendorNavBar from "@/components/vendors/VendorNavBar"
import Label from "@/components/Label"
import TextInput from "@/components/TextInput"

export const revalidate = 60

export default function VendorEditProfile() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState(null)
  const [firstname, setFirstName] = useState(null)
  const [lastname, setLastName] = useState(null)
  const [userId, setUserId] = useState(null)
  const [shopping_rate, setShoppingRate] = useState(0)
  const [bio, setBio] = useState(null)
  const [currency, setCurrency] = useState("")
  const [yen, setYen] = useState(0)
  const [yuan, setYuan] = useState(0)
  const [dollar, setDollar] = useState(0)
  const [euro, setEuro] = useState(0)
  const [vendorId, setVendorId] = useState(0)
  const [won, setWon] = useState(0)
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

    async function getVendorProfile() {
      const { data, error } = await supabase
        .from("VendorProfile")
        .select()
        .eq("userId", userId)
      const { data: language, error: languageError } = await supabase
        .from("VendorProfile")
        .select("languages")
        .eq("userId", userId)

      if (error || languageError) {
        console.log("Error Vendor Profile:" + error)
      } else if (data[0] == null) {
        console.log("pass")
      } else {
        setShoppingRate(JSON.stringify(data[0].shpRate))
        setBio(convertStringFormatt(JSON.stringify(data[0].bio)))
        setLanguage(convertStringFormatt(JSON.stringify(language[0].languages)))
        
        setVendorId(JSON.stringify(data[0].id, null, 2))
        const { data: currency, error: currencyError } = await supabase
          .from("Currency")
          .select()
          .eq("vendorId", vendorId)
          if(currency[0] == null || currencyError){
            console.log("Currency null")
          }else if(currency[0].currency=="yen"){
            setYen(JSON.stringify(currency[0].rate))

          }else if(currency[0].currency=="dollar"){
            setDollar(JSON.stringify(currency[0].rate))
          }
        console.log(JSON.stringify(currency))
        if (data[0].bio == null) {
          setBio("")
        }
      }
    }

    getUserEmail()
    getPublicUser()
    getVendorProfile()
  }, [email, userId,vendorId])

  async function updateProfile(event) {
    event.preventDefault()
    const { error } = await supabase
      .from("User")
      .update({ firstname: firstname, lastname: lastname, address: address })
      .eq("email", email)
    if (error == null) {
      alert("Updated Complete")
      insertVendorProfile()
      insertCurrencyYen()
      insertCurrencyDollar()
    }
  }
  async function insertCurrencyYen() {
    const { data, error } = await supabase
      .from("Currency")
      .select()
      .eq("vendorId", vendorId)
    console.log(JSON.stringify(data))
    console.log(error)
    if (JSON.stringify(data).length == 2) {
      const { dataYen, errorYen } = await supabase
        .from("Currency")
        .insert([{ vendorId: vendorId, rate: yen, currency: "yen" }], {
          upsert: true,
        })
        
    } else{
      const { error } = await supabase
        .from("Currency")
        .update({ rate: yen, currency: "yen" })
        .eq("vendorId", vendorId)
      
      
    }
  }
  async function insertCurrencyDollar(){
    const { data, error } = await supabase
      .from("Currency")
      .select()
      .eq("vendorId", vendorId)
    console.log(JSON.stringify(data))
    console.log(error)
    if (JSON.stringify(data).length == 2) {
      
        const { dataDollar, errorDollar } = await supabase
        .from("Currency")
        .insert([{ vendorId: vendorId, rate: dollar, currency: "dollar" }], {
          upsert: true,
        })
    } else{
      
      const { error:errorDollar } = await supabase
        .from("Currency")
        .update({ rate: dollar, currency: "dollar" })
        .eq("vendorId", vendorId)
      
    }
  }

  async function insertVendorProfile() {
    const { data, error } = await supabase
      .from("VendorProfile")
      .select()
      .eq("userId", userId)
    console.log(JSON.stringify(data))
    console.log(error)

    if (JSON.stringify(data).length == 2) {
      const { dataUpSert, errorUpsert } = await supabase
        .from("VendorProfile")
        .insert(
          [{ userId: userId, shpRate: shopping_rate, languages: [language] }],
          { upsert: true }
        )
    } else {
      const { errorUpdate } = await supabase
        .from("VendorProfile")
        .update({ shpRate: shopping_rate, bio: bio, languages: [language] })
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
      <VendorNavBar></VendorNavBar>
      <form onSubmit={updateProfile} className="form-widget">
        <div className="p-2 m-8 lg:m-20 lg:p-8 grid phone:gap-2 md:gap-6 md:grid-cols-2 phone:grid-cols-1 justify-items-stretch bg-background shadow-2xl rounded-2xl">
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
            <Label label="Shopping Rate (THB)" labelId="shopping_rate"></Label>
          </div>
          <div>
            <input
              id="shopping_rate"
              type="number"
              value={shopping_rate || ""}
              onChange={(e) => setShoppingRate(e.target.value)}
              className="input input-secondary w-full max-w-xs"
            />
          </div>
          {/* <div className="md:place-self-center">
            <Label label="Yen" labelId="yen"></Label>
          </div>
          <div>
            <input
              id="yen"
              type="number"
              value={yen || ""}
              onChange={(e) => setYen(e.target.value)}
              className="input input-secondary w-full max-w-xs"
            />
          </div> */}
          <div className="md:place-self-center">
            <Label label="Dollar" labelId="dollar"></Label>
          </div>
          <div>
            <input
              id="dollar"
              type="number"
              value={dollar || ""}
              onChange={(e) => setDollar(e.target.value)}
              className="input input-secondary w-full max-w-xs"
            />
          </div>
          <div className="md:place-self-center">
            <Label label="Language" labelId="language"></Label>
          </div>
          <div>
            <input
              id="language"
              type="text"
              value={language || ""}
              onChange={(e) => setLanguage(e.target.value)}
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
