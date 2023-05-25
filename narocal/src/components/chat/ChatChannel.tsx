import Image from "next/image"
import Link from "next/link"
import ProductPicTemp from "../pages/assets/product_pic_temp.png"

interface IChatChannel {
  receiver: string
  latestMessage: string
  channel: string
}

const ChatChannel: React.FunctionComponent<IChatChannel> = ({
  receiver,
  latestMessage,
  channel,
}) => {
  return (
    <>
      
        <div className="p-6">
          <Link
            href={channel}
            className="hover:text-secondary md:text-lg sm:text-sm"
          >
            {receiver}
          </Link>
        </div>
    </>
  )
}

export default ChatChannel
