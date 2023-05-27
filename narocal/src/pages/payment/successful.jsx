
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
export const revalidate = 60
export default function SuccessfulPayment(){
    const router = useRouter()
    return(
        <div className="flex flex-col items-center h-screen gap-10 mt-10">
            <h2 className="text-center text-3xl font-bold">Payment Successful</h2>
            <button className="btn btn-lg bg-neutral-400 text-black border-none hover:bg-secondary"onClick={() => window.history.go(-2)}>Back to Chat</button>
        </div>
    )
}