import Image from "next/image"
import Link from "next/link"
import ProductPicTemp from "../pages/assets/product_pic_temp.png"
import { useState, useEffect } from "react";
import { supabase } from "lib/supabaseClient";

// interface IChatChannel {
//   receiver: string
//   latestMessage: string
//   channel: string
// }
const useFetchName = (receiverId:any, setName:any) => {
  useEffect(() => {
    const fetchName = async () => {
      const { data: users, error } = await supabase
        .from("User")
        .select("firstname")
        .eq("id", parseInt(receiverId));
      
      if (error) {
        console.error(error);
        return;
      }

      setName(users[0]?.firstname || "");
    };

    if (receiverId) {
      fetchName();
    }
  }, [receiverId]);
};


interface IChatChannel {
  receiverId: string
  latestMessage: string
  channel: string
}

const ChatChannel: React.FunctionComponent<IChatChannel> = ({
  receiverId,
  latestMessage,
  channel,
}) => {
  const [name, setName] = useState("");
  useFetchName(receiverId, setName);

  return (
    <div className="p-6">
      <Link href={channel} className="hover:text-secondary md:text-lg sm:text-sm">
        {name}
      </Link>
    </div>
  );
};

export default ChatChannel;
