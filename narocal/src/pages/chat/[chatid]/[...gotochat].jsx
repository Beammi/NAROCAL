import { useRouter } from "next/router"
import { useEffect } from "react"
import { useState } from "react"
import { supabase } from "lib/supabaseClient"
import VendorNavBar from "@/components/vendors/VendorNavBar"
import CustomerNavbar from "@/components/CustomerNavbar"
import ChatBubbleSender from "@/components/chat/ChatBubbleSender"
import ChatBubbleReceiver from "@/components/chat/ChatBubbleReceiver"
export const revalidate = 60

export default function ChatSpecific() {
  const [slugs, setSlugs] = useState([])
  const [role, setRole] = useState("")
  const [email, setEmail] = useState("")
  const [userId, setUserId] = useState(0)
  const [isCustomer, setIsCustomer] = useState(false)
  const [isVendor, setIsVendor] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [chatId, setChatId] = useState(0)
  const [sender, setSender] = useState(0)
  const [receiver, setReceiver] = useState(0)
  const [messagesLen, setMessagesLen] = useState(0)
  const [firstname, setFirstName] = useState("")
  const [anotherUserName, setAnotherUserName] = useState("")
  const [anotherId,setAnotherId] = useState("")
  const [newBubble, setNewBubble] = useState("")
  const router = useRouter()

  function convertStringFormatt(word) {
    if (word == "" || word == null) {
      return ""
    } else {
      let temp = word.slice(1, word.length - 1)
      return temp
    }
  }

  useEffect(() => {
    const getSlugs = () => {
      const slug = router.query.gotochat
      if (slug && slug.length > 0) {
        // Check if 'slug[0]' has a property 'id'
        if (slug) {
          console.log(slug)
          setSlugs(slug)
          return slug
        } else {
          console.log("Error: slug does not exist in 'slug'")
          // You can set some default value here, if needed
        }
      } else {
        console.log("Error: 'slug' is undefined or empty")
        // You can set some default value here, if needed
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

      if (error) {
        console.log("Error" + error)
      }

      if (data.length != 0) {
        setRole(convertStringFormatt(JSON.stringify(data[0].role)))
        setUserId(JSON.stringify(data[0].id, null, 2))
        setFirstName(convertStringFormatt(JSON.stringify(data[0].firstname)))

        if (role == "CUSTOMER") {
          setIsCustomer(true)
        }
        if (role == "VENDOR") {
          setIsVendor(true)
        }
      }
    }
    // async function checkUser(){
    //   if(isCustomer){
    //     setSender()
    //   }
    // }
    async function getChatId() {
      if (slugs.length == 1) {
        const { data, error } = await supabase
          .from("Chat")
          .select()
          .eq("customer", userId)
          .eq("vendor", slugs[0])
        if (error) {
          console.log("Error in get chat id")
        } else if (data == null) {
          console.log("no chat")
          return
        } else {
          console.log("nai"+JSON.stringify(data[0].id))
          setChatId(JSON.stringify(data[0].id))
        }
      } else {
        const { data, error } = await supabase
          .from("Chat")
          .select()
          .eq("customer", slugs[0])
          .eq("vendor", slugs[1])
        if (error) {
          console.log("Error in get chat id")
        } else if (data == null) {
          console.log("no chat")
        } else {
          console.log(data[0].id)
          setChatId(data[0].id)
        }
      }
    }
    async function fetchMessages() {
      const { data, error } = await supabase
        .from("Message")
        .select()
        .eq("chatId", chatId)
      if (data != null) {
        setMessages(data)
        setMessagesLen(Object.keys(data).length)
        console.log("message" + JSON.stringify(messages))
      } else {
        console.log("Error in fetch messages")
      }
    }
    async function getAnotherUser() {
      if (isVendor) {
        if (slugs.length == 1) {
          let { data: Vendor, error } = await supabase
            .from("VendorProfile")
            .select()
            .eq("id", slugs[0])
          if (error) {
            console.log(JSON.stringify(error))
          } else {
            let { data: UserName, error } = await supabase
              .from("User")
              .select()
              .eq("id", Vendor.userId)
              setAnotherUserName(
                convertStringFormatt(JSON.stringify(UserName[0].firstname))
              )
            setAnotherId(JSON.stringify(UserName[0].id))
            console.log(anotherUserName)
          }
        } else {
          let { data: Vendor, error } = await supabase
            .from("VendorProfile")
            .select()
            .eq("id", slugs[1])
          if (error) {
            console.log(JSON.stringify(error))
          } else {
            let { data: UserName, error } = await supabase
              .from("User")
              .select()
              .eq("id", Vendor.userId)
              setAnotherUserName(
                convertStringFormatt(JSON.stringify(UserName[0].firstname))
              )
            setAnotherId(JSON.stringify(UserName[0].id))

            console.log(anotherUserName)
          }
        }
      } else {
        if (slugs.length == 1) {
          let { data: Vendor, error } = await supabase
            .from("VendorProfile")
            .select()
            .eq("userId", slugs[0])
          if (error) {
            console.log(JSON.stringify(error))
          } else {
            let { data: UserName, error } = await supabase
              .from("User")
              .select()
              .eq("id", Vendor[0].userId)
            if (UserName != null) {
              setAnotherUserName(
                convertStringFormatt(JSON.stringify(UserName[0].firstname))
              )
              setAnotherId(JSON.stringify(UserName[0].id))

              console.log("Another " + anotherUserName)
            }
          }
        } else {
          let { data: Vendor, error } = await supabase
            .from("VendorProfile")
            .select()
            .eq("userId", slugs[1])
          if (error || Vendor == null) {
            console.log(JSON.stringify(error))
            return
          } else {
            let { data: UserName, error } = await supabase
              .from("User")
              .select()
              .eq("userId", Vendor[0].userId)
            console.log("user" + JSON.stringify(UserName[0].firstname))
            if (UserName != null) {
              setAnotherUserName(
                convertStringFormatt(JSON.stringify(UserName[0].firstname))
              )
              setAnotherId(JSON.stringify(UserName[0].id))

              console.log("Another " + anotherUserName)
            }
          }
        }
      }
    }

    getSlugs()
    getUserEmail()
    getPublicUser()
    getChatId()
    fetchMessages()
    getAnotherUser()
  }, [role, email, supabase, chatId, anotherUserName])

  useEffect(() => {
    const Message = supabase
      .channel("real-time-chat")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Message" },
        (payload) => {
          console.log("Change received!", payload)
          setNewBubble(payload.new)
          setMessages((messages) => [...messages, payload.new])
        }
      )
      .subscribe()
    return () => {
      supabase.removeChannel(Message)
    }
  }, [chatId])

  async function sendMessage() {
    if (slugs.length == 1) {
      await supabase.from("Message").insert([
        {
          text: newMessage,
          sender: userId,
          receiver: anotherId,
          chatId: chatId,
        },
      ])
      setNewMessage("")
    } else {
      await supabase.from("Message").insert([
        {
          text: newMessage,
          sender: userId,
          receiver: anotherId,
          chatId: chatId,
        },
      ])
      setNewMessage("")
    }
  }
  const generateChatBubble = () => {
    let li = []
    if (messages == null || messages.length == 0) {
      return <p>No Message yet</p>
    } else {
      for (let i = 0; i < messagesLen; i++) {
        if (slugs[0] == messages[i].sender) {
          console.log("render pass" + JSON.stringify(messages[i].message))
          li.push(
            <ChatBubbleSender
              message={JSON.stringify(messages[i].text)}
              timestamp={JSON.stringify(messages[i].timestamp)}
              name={firstname}
            />
          )
        } else {
          li.push(
            <ChatBubbleReceiver
              message={JSON.stringify(messages[i].text)}
              timestamp={JSON.stringify(messages[i].timestamp)}
              name={anotherUserName}
            />
          )
        }
      }
      return li
    }
  }
  const chooseNavBar = () => {
    if (role == "CUSTOMER") {
      return <CustomerNavbar />
    }
    if (role == "VENDOR") {
      return <VendorNavBar />
    }
  }
  const buttonFunction = () =>{
    if (role == "CUSTOMER") {
      let li = [
        <button>Order</button>,<button>Pay</button>
      ]
      return li
    }
    if (role == "VENDOR") {
      let li = [
        <button>Create Order</button>,<button>Shipment</button>
      ]
      return li 
    }
  }

  return (
    <div className="bg-test min-h-screen">
      {chooseNavBar()}
      <h1>Post: {slugs}</h1>
      <div className="flex-col p-6 w-4/5 mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="p-6">{generateChatBubble()}</div>
        <div className="flex flex-row">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
        <div className="flex flex-row">
          {buttonFunction()}
        </div>
      </div>

      <div></div>
    </div>
  )
}
