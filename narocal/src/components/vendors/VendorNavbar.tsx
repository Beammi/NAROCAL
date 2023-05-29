import React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
export const revalidate = 60
interface INavBar {
  style?: string
  link: string
  text: string
}

function VendorNavbar() {
  const [vendorId, setvendorId] = useState(0)
  const [userId, setUserId] = useState(0)
  const [email, setEmail] = useState("")
  const [link, setLink] = useState("/chat/")
  function convertStringFormatt(word: string) {
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
      // console.log("Hereeeee"+data[0].id)
      if (error) {
        console.log("Error" + error)
      } else if (data == undefined) {
        console.log("pass")
        return
      } else {
        // Check if 'data' is defined and not empty
        if (data && data.length > 0) {
          // Check if 'data[0]' has a property 'id'
          if ("id" in data[0]) {
            setUserId(data[0].id)
            console.log("user id" + userId)
            let temp = "/chat/" + userId
            setLink(temp)
            console.log("Link"+link)
          } else {
            console.log("Error: 'id' does not exist in 'data[0]'")
            // You can set some default value here, if needed
          }
        } else {
          console.log("Error: 'data' is undefined or empty")
          // You can set some default value here, if needed
        }
      }
    }
    // async function getVendorId() {
    //   const { data, error } = await supabase
    //     .from("VendorProfile")
    //     .select()
    //     .eq("userId", userId)
    //   if (error) {
    //     console.log("Error in Vendor id")
    //   } else if (data != null) {
    //     // Check if 'data' is defined and not empty
    //     if (data && data.length > 0) {
    //       // Check if 'data[0]' has a property 'id'
    //       if ("id" in data[0]) {
    //         setvendorId(data[0].id)
    //         // setUserId(data[0].userId)
    //         console.log("User id: " + userId)
    //       } else {
    //         console.log("Error: 'id' does not exist in 'data[0]'")
    //         // You can set some default value here, if needed
    //       }
    //     } else {
    //       console.log("Error: 'data' is undefined or empty")
    //       // You can set some default value here, if needed
    //     }
    //     // console.log("Hereeeee"+data[0].id)
    //     let temp = "/chat/" + userId
    //     setLink(temp)
    //   } else {
    //     console.log("null")
    //   }
    // }
    getPublicUser()
    getUserEmail()
    // getVendorId()
  }, [vendorId, email, userId,link])
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-l text-alternative"
          href="/vendor/profile"
        >
          NAROCAL
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-3">
          {/* <li>
            <a
              className="text-alternative hover:bg-secondary"
              href="/order/orderVendorSide"
            >
              Order
            </a>
          </li> */}
          <li>
            <a className="text-alternative hover:bg-secondary" href={link}>
              Chat
            </a>
          </li>
          <li>
            <a
              className="text-alternative hover:bg-secondary"
              href="/vendor/profile"
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default VendorNavbar
