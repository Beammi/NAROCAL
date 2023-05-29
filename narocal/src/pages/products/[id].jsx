import { useRouter } from "next/router"
import Image from "next/image"
import InitialNavbar from "@/components/InitialNavbar"
import BlackShirt from "../assets/black-shirt.jpg"
import DropDown from "@/components/DropDown"
import ProductCard from "@/components/ProductCard"
import { getProductByID } from "../../../dummy-data"
import { useEffect, useState } from "react"
import { supabase } from "lib/supabaseClient"
import EventList from "../../components/events/event-list-supa.tsx"

export default function ProductPage() {
  const router = useRouter()

  const [product, setProduct] = useState([""])
  const [userId, setUserId] = useState(0)
  const [email, setEmail] = useState("")
  const [recommend, setRecommend] = useState([])

  const [productUsername, setProductUsername] = useState(null)
  const [username, setUsername] = useState("")


  
  function convertStringFormatt(word) {
    if (word == "" || word == null) {
      return ""
    } else {
      let temp = word.slice(1, word.length - 1)
      return temp
    }
  }

  useEffect(() => {
    async function checkUser(){
      const { data: { user } } = await supabase.auth.getUser()

      if (user) {
        console.log("User is logged in:", user)
      } else {
        console.log("No user is currently logged in.")
        router.push("/login")
      }
    }
    async function renderInformation() {
      const { data, error } = await supabase
        .from("Product")
        .select()
        .eq("id", router.query.id)

      if (data == null) {
        console.log("pass")
      } else {
        setProduct(data)
      }

      if (error) {
        console.log(JSON.stringify(error))
      }
    }
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

    async function loadRecommendProduct() {
      const { data, error } = await supabase
        .from("Product")
        .select()
        .eq("brand", product[0].brand)
        .neq("id", product[0].id)
      // .in('category', ['Albania', 'Algeria'])

      if (data == null) {
        console.log("pass")
      } else {
        setRecommend(data)
      }

      if (error) {
        console.log(JSON.stringify(error))
      }
    }

    async function fetchUsername() {
      const { data, error } = await supabase
        .from("Product")
        .select()
        .eq("id", router.query.id)
      if (error) console.log("Error" + error)
      if (data == null) {
        console.log("null")
        return
      }
      const productData = data[0]

      setProductUsername(productData)

      const { data: vendorData } = await supabase
        .from("VendorProfile")
        .select()
        .eq("id", productData.authorId)
      const userId = vendorData[0].userId

      const { data: userData } = await supabase
        .from("User")
        .select()
        .eq("id", userId)
      setUsername(userData[0].firstname)
    }
    checkUser()
    fetchUsername()
    loadRecommendProduct()
    renderInformation()
    getUserEmail()
    getPublicUser()
  }, [userId, email])

  const insertChat = async () => {
    let slug = router.query
    let vendorId = 0

    product.map((p) => {
      vendorId = p.vendorId
    })

    // const { data: vendorData, error: errorVendor } = await supabase
    //     .from("User")
    //     .select()
    //     .eq("id", vendorId);

    console.log("check " + vendorId)

    const { data, error } = await supabase
      .from("Chat")
      .upsert([{ vendor: vendorId, customer: userId }])
    if (error) {
      console.log("error in insert chat")
    }
  }

  const clickChat = async () => {
    let slug = router.query
    let vendorId = 0

    product.map((p) => {
      vendorId = p.authorId
    })

    const { data, error } = await supabase
      .from("User")
      .select()
      .eq("id", vendorId)

    console.log("check " + userId + vendorId)

    const { data: chat, error: chatError } = await supabase
      .from("Chat")
      .select()
      .eq("vendor", vendorId)
      .eq("customer", userId)

    // if (chat == null || chat.length == 0) {
    //   insertChat();
    //   console.log("null" + chat);
    //   router.push("/chat/" + userId);
    // } else if (chatError) {
    //   console.log(chatError);
    // } else {
    //   console.log(JSON.stringify(chat));
    //   router.push("/chat/" + userId);
    // }

    const { data: vendorData, error: errorVendor } = await supabase
      .from("VendorProfile")
      .select()
      .eq("id", vendorId)

    let venderUserId = vendorData[0].userId

    if (chat == null || chat.length == 0) {
      insertChat()
      console.log("null" + chat)
      router.push("/chat/" + userId + "/" + venderUserId)
    } else if (error) {
      console.log(error)
    } else {
      console.log(JSON.stringify(chat))
      router.push("/chat/" + userId + "/" + venderUserId)
    }
  }

  return (
    <>
      {product.map((p) => {
        return (
          <div>
            <InitialNavbar></InitialNavbar>
            <div className="flex flex-col justify-center gap-10">
              <div className="flex md:flex-row justify-center pt-40 sm:flex-col">
                <Image
                  className="mx-14"
                  src={p.image}
                  alt="PRODUCT PICTURE"
                  width={450}
                  height={640}
                />
                <div className="flex flex-col w-2/5 sm:ml-14">
                  <p className="text-xl font-bold">{p.brand}</p>
                  <p className="text-lg">{p.model}</p>
                  <label className="text-md text-emerald-500 font-semibold mt-8">
                    Offered by {username}
                  </label>
                  <p className="text-2xl pb-10">{p.price?.toLocaleString()}฿</p>
                  <select className="select w-full max-w-xs">
                    <option disabled selected>
                      Select size
                    </option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>

                  {/* <button className="btn btn-primary my-10 w-40" href="">CHAT</button> */}
                  {/* <label className="text-md text-emerald-500 font-semibold mt-8">Offered by {username} </label> */}
                  <input
                    type="button"
                    value="Contact Vendor"
                    className="btn btn-primary my-8 w-40 hover:btn-secondary"
                    onClick={clickChat}
                  />

                  <div className="flex flex-col gap-2">
                    <div className="underline underline-offset-4 decoration-2">
                      Description
                    </div>
                    <div>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Iure magnam libero quibusdam ipsa adipisci ullam, quia
                      facere dignissimos ex temporibus deleniti molestias quidem
                      ipsam, maxime voluptas atque maiores numquam repellat?
                    </div>
                  </div>
                </div>
              </div>

              {recommend.length != 0 && (
                <div className="flex flex-col gap-2 justify-center px-10 py-5">
                  <div className="divider text-center underline underline-offset-4 decoration-2">
                    Recommend Items
                  </div>
                  <EventList items={recommend} />
                </div>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}
