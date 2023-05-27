import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { supabase } from "lib/supabaseClient";
import VendorNavBar from "@/components/vendors/VendorNavBar";
import ChatChannel from "@/components/chat/ChatChannel";
import CustomerNavbar from "@/components/CustomerNavbar";
import Label from "@/components/Label"

const useFetchUser = (setEmail, setRole) => {
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setEmail(data?.user?.email || "");

      const { data: users, error } = await supabase
        .from("User")
        .select()
        .eq("email", data?.user?.email);

      if (error) {
        console.error(error);
        return;
      }

      setRole(users[0]?.role || "");
    };

    fetchUser();
  }, []);
};

const useFetchChats = (role, setChats, router) => {
  useEffect(() => {
    const fetchChats = async () => {
      const { data: chats, error } = await supabase
        .from("Chat")
        .select("*")
        .eq(role.toLowerCase(), router.query.chatid);

      if (error) {
        console.error(error);
        return;
      }

      setChats(chats || []);
    };

    if (role) {
      fetchChats();
    }
  }, [role]);
};



export default function Chat() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [chats, setChats] = useState([]);

  useFetchUser(setEmail, setRole);
  useFetchChats(role, setChats, router);

  const renderChat = chats.map((chat) => {
    const receiverId = role === "VENDOR" ? chat.customer : chat.vendor;
    const channel = `${router.query.chatid}/${receiverId}`;

    return (
      <ChatChannel
        key={channel}
        receiverId={receiverId} // You'll have to fetch the name separately
        channel={channel}
      />
    );
  });

  const Navbar = role === "CUSTOMER" ? CustomerNavbar : VendorNavBar;

  return (
    <div>
      <Navbar />
      <div className="p-6 md:text-lg phone:text-sm justify-self-center">Chat</div>
      <div className="divide-y-2">{renderChat}</div>
    </div>
  );
}
