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
    async function getChatsAccordingToVendor() {
      let slug = router.query
      console.log("Vendor id" + slug.chatid)
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
        setLen(Object.keys(Chat).length)

      }
    }

    // getUserEmail()
    // getPublicUser()
    // getVendorProfile()
    getChatsAccordingToVendor()
  }, [router])
  const renderChat = () => {
    let li = []

    if(chats==null||chats.length==0){
        return <p>No Chat yet</p>
    }

    else{
        let slug = router.query.chatid
        // slug = slug + "/" + 
        for (let i = 0; i < len; i++) {
            console.log("render pass")
            li.push(
                <ChatChannel
                receiver={chats[i].receiver}
                link={router.query.chatid}></ChatChannel>
              
            )
          }
          return li
    }
    
  }
  return (
    <div>
      <VendorNavBar></VendorNavBar>
      <div className="divide-y-2">
        <p>Chat {router.query.chatid}</p>
        {renderChat()}
        
      </div>
    </div>
  )
}
