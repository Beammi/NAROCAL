import Image from "next/image"
import Link from "next/link"
import ProductPicTemp from "../pages/assets/product_pic_temp.png"

interface IChatBubbleSender {
  message: string
  timestamp: string
  role: string
  name: string
}

const ChatBubbleSender: React.FunctionComponent<IChatBubbleSender> = ({
  message,
  timestamp,
  role,
  name,
}) => {
  return (
    <>
        
        <div className="chat chat-end">
          <div className="chat-header">
             {name}
            <time className="text-xs opacity-50">{timestamp}</time>
          </div>
          <div className="chat-bubble chat-bubble-secondary">{message}</div>
        </div>
    </>
  )
}

export default ChatBubbleSender
