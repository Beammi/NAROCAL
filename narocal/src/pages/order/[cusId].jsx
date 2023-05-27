import { useState,useEffect } from "react"
import { supabase } from "lib/supabaseClient"
import CreateOrderComp from "@/components/order/create"
import { useRouter } from "next/router"
import Label from "@/components/Label"
import VendorNavBar from "@/components/vendors/VendorNavBar"



export default function CreateOrder(){
    const router = useRouter()
  const [name, setName] = useState("")

  const [email, setEmail] = useState("")
  const [vendorId, setVendorId] = useState(null)
  const [userId, setUserId] = useState(null)
  const [price, setPrice] = useState(null)
  const [address,setAddress] = useState("")
  const [vendorName,setVendorName] = useState("")
  const [shopping_rate,setShoppingRate] = useState(0)
  const [status,setStatus] = useState("")
  const [contact,setContect] = useState("")
  const [cusId,setCusId] = useState(0)

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

      if (userJson != null) {
        setEmail(convertStringFormatt(JSON.stringify(userJson.email, null, 2)))
        console.log("from get user email" + email)
      }
    }

    async function getUserId() {
      const { data, error } = await supabase
        .from("User")
        .select()
        .eq("email", email)

      console.log(email)

      if (error) {
        console.log("Error" + error)
      }

      if (data.length != 0) {
        setUserId(JSON.stringify(data[0].id, null, 2))
        setVendorName(convertStringFormatt(JSON.stringify(data[0].firstname)))
        console.log("user id " + userId)
        if (data[0].id == null) {
          setUserId("")
        }
      }
    }

    async function getVendorId() {
      console.log(userId)
      const { data, error } = await supabase
        .from("VendorProfile")
        .select()
        .eq("userId", userId)

      if (error) {
        console.log("Error in vendor profile" + JSON.stringify(error))
      } else if (data[0] == null) {
        console.log("pass")
      } else {
        setVendorId(JSON.stringify(data[0].id))
        setShoppingRate(JSON.stringify(data[0].shpRate))
        console.log("vendor id " + vendorId)
        if (data[0].id == null) {
          setUserId("")
        }
      }
    }
    getUserEmail()
    getUserId()
    getVendorId()
  }, [email, userId,vendorId])

  async function insertOrder(event) {
    event.preventDefault()
    let slug = router.query.cusId
    const {data:Customer,error:CustomerError} = await supabase.from("CustomerProfile").select().eq("userId",slug)
    const { error } = await supabase.from("Order").insert([
      {
        
        vendorId: vendorId,
        customerId: Customer[0].id,
        price:price,
        name:name,
        status:"Create",
        contact:"00000"
        

      },
    ])

    if (error) {
      console.log("Error in insert order")
    } else {
      alert("Order creates successfully!")
      router.push("/chat/"+userId+"/"+slug)
    }
    // return <CreateOrderComp vendorId={1} customerId={3} price={price} name={name}/>

  }
  return (
    <div className="bg-secondary min-h-screen">
        <VendorNavBar></VendorNavBar>
      <form onSubmit={insertOrder} className="form-widget">
        <div className="p-2 m-8 lg:m-20 lg:p-8 grid phone:gap-2 md:gap-6 md:grid-cols-2 phone:grid-cols-1 justify-items-stretch bg-background shadow-2xl rounded-2xl">
          <div className="md:place-self-center">
            <Label label="Name" labelId="name"></Label>
          </div>
          <div>
            <input
              id="name"
              className="input input-secondary w-full max-w-xs"
              type="text"
              required
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="md:place-self-center">
            <Label label="Price" labelId="price"></Label>
          </div>
            <input
              id="price"
              className="input input-secondary w-full max-w-xs"
              type="number"
              step="any"
              required
              value={price || ""}
              onChange={(e) => setPrice(e.target.value)}
            />
          
          
          <div>
          
          </div>
          <div className="md:place-self-end">
            <button
              className="btn btn-outline btn-secondary md:text-base phone:text-xs"
              type="submit"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}