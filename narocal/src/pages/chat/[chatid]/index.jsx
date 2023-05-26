import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
import VendorNavBar from "@/components/vendors/VendorNavBar"
import ChatChannel from "@/components/chat/ChatChannel"

export const revalidate = 60

export default function Chat() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [chats, setChats] = useState(null)
  const [lenCus, setLenCus] = useState(0)
  const [lenVen, setLenVen] = useState(0)
  const [role, setRole] = useState("")
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
        // let temp = convertStringFormatt(JSON.stringify(userJson.email))
        setEmail(convertStringFormatt(JSON.stringify(data.user.email, null, 2)))

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
        console.log("Error here" + error)
      }

      if (data.length != 0) {
        setRole(convertStringFormatt(JSON.stringify(data[0].role)))
        console.log("role:" + role)
      }
    }
    async function getChatsAccordingToRole() {
      console.log("pass mai")
      if (role == "CUSTOMER") {
        let slug = router.query
        console.log("Customer id" + slug.chatid)
        let { data: Chat, error } = await supabase
          .from("Chat")
          .select("*")
          .eq("customer", slug.chatid)
        if (error) {
          console.log("Error in Chat" + JSON.stringify(error))
        }
        if (Chat == null) {
          console.log("no chat yet")
        } else {
          setChats(Chat)
          console.log(JSON.stringify(Chat))
          setLenCus(Object.keys(Chat).length)
          // console.log("len" + len)
        }
      }
      if (role == "VENDOR") {
        let slug = router.query
        console.log("Customer id" + slug.chatid)
        let { data: Chat, error } = await supabase
          .from("Chat")
          .select("*")
          .eq("vendor", slug.chatid)
        if (error) {
          console.log("Error in Chat" + JSON.stringify(error))
        }
        if (Chat == null) {
          console.log("no chat yet")
        } else {
          setChats(Chat)
          console.log(JSON.stringify(Chat))
          setLenVen(Object.keys(Chat).length)
          // console.log("len" + len)
        }
      }
    }
    getChatsAccordingToRole()
    getUserEmail()
    getPublicUser()
  }, [email,role, router,lenCus, lenVen])

  

  const renderChat = () => {
    let li = []

    if (chats == null || chats.length == 0) {
      return <p>No Chat yet</p>
    } else {
      let slug = router.query.chatid
      let temp
      if(lenCus){
        temp = lenCus
      }
      if(lenVen){
        temp = lenVen
      }
      for (let i = 0; i < temp; i++) {
        console.log("render pass" + JSON.stringify(chats[i].vendor))
        slug = slug + "/" + JSON.stringify(chats[i].vendor)
        li.push(
          <ChatChannel
            receiver={JSON.stringify(chats[i].vendor)}
            channel={slug}
          ></ChatChannel>
        )
      }
      return li
    }
  }
  return (
    <div>
      <VendorNavBar></VendorNavBar>
      <div className="divide-y-2">
        {/* <p>Chat {router.query.chatid}</p> */}
        {renderChat()}
      </div>
    </div>
  )
}
