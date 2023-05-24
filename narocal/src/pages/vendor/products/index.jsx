import Link from "next/link"
import VendorNavBar from "@/components/vendors/VendorNavBar"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
import ProductCard from "@/components/ProductCard"

export default function VendorProduct() {
  const [email, setEmail] = useState("")
  const [authorId, setAuthorId] = useState(null)
  const [userId, setUserId] = useState(null)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [products, setProducts] = useState(null)
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
        console.log("user id " + userId)
        if (data[0].id == null) {
          setUserId("")
        }
      }
    }

    async function getAuthorId() {
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
        setAuthorId(JSON.stringify(data[0].id))
        console.log("vendor id " + authorId)
        if (data[0].id == null) {
          setUserId("")
        }
      }
    }

    async function getProducts() {
      var temp = []
      const { data, error } = await supabase
        .from("Product")
        .select()
        .eq("authorId", authorId)
      setProducts(JSON.stringify(data.name))
      // setProducts(data)
      console.log("Products " + products)
      
      if (error) {
        console.log(error)
      }
    }
    getUserEmail()
    getUserId()
    getAuthorId()
    getProducts()
  }, [email, userId, authorId])
  return (
    <div>
      <VendorNavBar></VendorNavBar>
      <div className="divide-y-2">
        <div className="p-6">
          <Link
            href="products/create"
            className="hover:text-secondary md:text-lg sm:text-sm"
          >
            Create Product{" "}
          </Link>
        </div>
      </div>

      <p className="p-6">Vendor Product</p>
      <ul className="grid justify-items-center md:grid-cols-2 sm:grid-flow-row sm:auto-rows-auto gap-4 overflow-x-auto overflow-contain p-10 bg-background rounded-b-lg">
        {/* {products.map((product) => (
          <ProductCard
            title={product.name}
            body={product.description}
          ></ProductCard>
        ))} */}
      </ul>
    </div>
  )
}
