import Image from "next/image"
import Link from "next/link"
import ProductPicTemp from "../pages/assets/product_pic_temp.png"

interface IChatBubbleReceiver {
  message: string
  timestamp: string
  role: string
  name: string
}

const ChatBubbleReceiver: React.FunctionComponent<IChatBubbleReceiver> = ({
  message,
  timestamp,
  role,
  name,
}) => {
  return (
    <>
      <div className="p-6">
        
        <div className="chat chat-start">
          <div className="chat-header">
             {name}
            <time className="text-xs opacity-50">{timestamp}</time>
          </div>
          <div className="chat-bubble chat-bubble-secondary">{message}</div>
        </div>
      </div>
    </>
  )
}

export default ChatBubbleReceiver
