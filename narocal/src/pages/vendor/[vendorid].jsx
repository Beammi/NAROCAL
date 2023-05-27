import VendorNavBar from "@/components/vendors/VendorNavBar"
import Image from "next/image"
import P from "@/components/text/P"
import ProductCard from "@/components/ProductCardSupa"
import ProfileVendorMock from "../../pages/assets/vendor_profile_mock.png"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
export const revalidate = 60

export default function VendorProfile() {
  const router = useRouter()
  console.log(router.query.vendorid)

  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState(null)
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState(null)
  const [userId, setUserId] = useState(0)
  const [shopping_rate, setShoppingRate] = useState(0)
  const [bio, setBio] = useState(null)
  const [language, setLanguage] = useState(null)
  const [vendorId, setVendorId] = useState(null)
  const [products, setProducts] = useState([])
  const [len, setLen] = useState(0)
  const [cusId, setCusId] = useState(null)
  const [venRealId, setVenRealId] = useState(0)
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
      // console.log("cus id" + JSON.stringify(data[0].id, null, 2))
      console.log("cus id" + email)

      if (error) {
        console.log("Error" + error)
      }

      if (data.length != 0) {
        setUserId(JSON.stringify(data[0].id, null, 2))
        if (data[0].id == null) {
          setUserId("")
        }
      }
    }

    async function getCustomerId() {
      const { data, error } = await supabase
        .from("CustomerProfile")
        .select()
        .eq("userId", userId)
      if (error) {
        console.log("Error in customer id")
      } else if (data == null) {
        console.log("Customer id pass")
      } else {
        console.log("cus id" + JSON.stringify(data[0].id, null, 2))
        const { data: Customer, error } = await supabase
          .from("User")
          .select()
          .eq("id", data[0].id)
        setCusId(JSON.stringify(Customer[0].id, null, 2))
      }
    }
    async function getVendorName() {
      let slug = router.query

      console.log("email: " + email)
      const { data, error } = await supabase
        .from("VendorProfile")
        .select()
        .eq("id", slug.vendorid)

      if (error) {
        console.log("Error" + error)
      }

      if (data != null) {
        setVendorId(JSON.stringify(data[0].userId, null, 2))
        const { data: User, error } = await supabase
          .from("User")
          .select()
          .eq("id", vendorId)

        if (User == null) {
          console.log("pass")
        } else {
          // console.log(JSON.stringify(User[0].firstname))

          // setFirstName(JSON.stringify(User[0].firstname))
          console.log("firstname " + firstname)
          if (data[0].firstname == null) {
            setFirstName("")
          }
        }
      }
    }

    async function getVendorProfile() {
      let slug = router.query

      const { data, error } = await supabase
        .from("VendorProfile")
        .select()
        .eq("id", slug.vendorid)
      if (error) {
        console.log("Error Vendor Profile:" + error)
      } else if (data[0] == null) {
        console.log("pass")
      } else {
        setShoppingRate(JSON.stringify(data[0].shpRate))
        setBio(convertStringFormatt(JSON.stringify(data[0].bio)))
        setLanguage(convertStringFormatt(JSON.stringify(data[0].language)))
        // setVendorId(JSON.stringify(data[0].id, null, 2))
        const { data: VenUser, error } = await supabase
          .from("User")
          .select()
          .eq("id", data[0].userId)
        if(VenUser==null){
          console.log("Ven user null")
        }else{
          console.log("see"+JSON.stringify(data[0].userId))
          setVenRealId(VenUser[0].id)
        }
        
        if (data[0].bio == null) {
          setBio("")
        }
      }
    }

    // async function isExisted() {
    //   let slug = router.query
    //   console.log("check " + userId + vendorId)
    //   const { data, error } = await supabase
    //     .from("Chat")
    //     .select()
    //     .eq("customer", cusId)
    //     .eq("vendor", slug.vendor)
    //   if (data == null) {
    //     insertChat()
    //     console.log("null" + data)
    //   } else if (error) {
    //     console.log(error)
    //   } else {
    //     console.log(JSON.stringify(data))

    //     router.push("/chat")
    //   }
    // }
    // async function insertChat() {
    //   let slug = router.query
    //   console.log("check " + cusId + vendorId)

    //   const { data, error } = await supabase
    //     .from("Chat")
    //     .upsert([{ vendor: slug.vendorid, customer: cusId }])
    //   if (error) {
    //     console.log("error in insert chat")
    //   }
    // }
    async function getProducts() {
      let slug = router.query
      const { data, error } = await supabase
        .from("Product")
        .select()
        .eq("authorId", slug.vendorid)
      // setProducts(data)
      if (data == null) {
        console.log("pass")
      } else {
        setProducts(data) // products ***
        setLen(Object.keys(data).length)
        // setProducts(JSON.parse(data))
        console.log("Products " + Object.keys(data).length)
      }

      if (error) {
        console.log(JSON.stringify(error))
      }
    }

    getUserEmail()
    getPublicUser()
    getVendorName()
    getVendorProfile()
    // isExisted()
    getProducts()
    // getCustomerId()
  }, [email, userId, venRealId, cusId])

  const insertChat = async () => {
    let slug = router.query
    console.log("check " + cusId + venRealId)

    const { data, error } = await supabase
      .from("Chat")
      .upsert([{ vendor: venRealId, customer: userId }])
    if (error) {
      console.log("error in insert chat")
    }
  }
  const clickChat = async () => {
    let slug = router.query
    console.log("check " + userId + vendorId)
    const { data, error } = await supabase
      .from("Chat")
      .select()
      .eq("vendor", venRealId)
      .eq("customer", userId)
    if (data == null || data.length == 0) {
      insertChat()
      console.log("null" + data)
      router.push("/chat/" + userId+"/"+venRealId)
    } else if (error) {
      console.log(error)
    } else {
      console.log(JSON.stringify(data))
      router.push("/chat/" + userId+"/"+venRealId)
    }
  }
  const renderProduct = () => {
    let li = []
    for (let i = 0; i < len; i++) {
      console.log("render pass")
      li.push(
        <ProductCard
          title={products[i].name}
          body={products[i].description}
        ></ProductCard>
      )
    }
    return li
  }
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
              text={shopping_rate}
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
          <div className="flex md:flex-row space-x-2 p-4">
            <input
              type="button"
              value="Contact Vendor"
              className="btn btn-outline btn-secondary"
              onClick={clickChat}
            />
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
              {renderProduct()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
