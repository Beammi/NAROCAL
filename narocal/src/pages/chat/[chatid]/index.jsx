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
  const [address, setAddress] = useState(null)
  const [firstname, setFirstName] = useState(null)
  const [lastname, setLastName] = useState(null)
  const [userId, setUserId] = useState(null)
  const [shopping_rate, setShoppingRate] = useState(0)
  const [bio, setBio] = useState(null)
  const [language, setLanguage] = useState(null)
  const [vendorId, setVendorId] = useState(null)
  const [chats, setChats] = useState(null)
  const [len, setLen] = useState(0)

  useEffect(() => {
    async function getChatsAccordingToCustomer() {
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
        setLen(Object.keys(Chat).length)
        console.log("len"+len)

      }
    }

    // getUserEmail()
    // getPublicUser()
    // getVendorProfile()
    getChatsAccordingToCustomer()
  }, [router,len])
  const renderChat = () => {
    let li = []

    if(chats==null||chats.length==0){
        return <p>No Chat yet</p>
    }

    else{
        let slug = router.query.chatid
        
        for (let i = 0; i < len; i++) {
            console.log("render pass" + JSON.stringify(chats[i].vendor))
            slug = slug + "/" + JSON.stringify(chats[i].vendor)
            li.push(
                <ChatChannel
                receiver={JSON.stringify(chats[i].vendor)}
                channel={slug}></ChatChannel>
              
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
