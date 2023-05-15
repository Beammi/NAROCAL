import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
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
    if(word == ""){
      return ""
    }else{
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
      if(data[0].firstname == null){
        setFirstName("")
      }
      if(data[0].lastname == null){
        setLastName("")
      }
      if(data[0].address == null){
        setAddress("")
      }


    }
  }
  async function insertVendorProfile(){
    const { data, error } = await supabase
        .from("VendorProfile")
        .select()
        .eq("id", userId)
    
    if(JSON.stringify(data).length == 2){
      const { dataUpSert, errorUpsert } = await supabase
        .from("VendorProfile")
        .upsert([{ userId: userId, shpRate:  shopping_rate}], { upsert: true })
    }
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut()
    router.push('/login')
  }
  // getPublicUser()
  // insertVendorProfile()
  return (

    <div>
      <form onSubmit={updateProfile} className="form-widget">
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={email} disabled />
        </div>
        <div>
          <label htmlFor="firstname">Firstname</label>
          <input
            id="firstname"
            type="text"
            required
            value={firstname || ""}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          <input
            id="lastname"
            type="text"
            value={lastname || ""}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="adress"
            type="text"
            value={address || ""}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <button className="button block primary" type="submit">
            Update
          </button>
        </div>

        <div>
          <button
            className="button block"
            type="button"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      </form>
    </div>
  )
}
