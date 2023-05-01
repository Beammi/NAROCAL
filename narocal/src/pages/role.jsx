import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import InitialNavbar from "@/components/InitialNavbar"
import P from "@/components/text/P"
import { supabase } from "lib/supabaseClient"
const inter = Inter({ subsets: ["latin"] })
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Role() {
  const [role, setRole] = useState("Customer")
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState()
  const [userData, setUserData] = useState()
  const [fetchError, setfetchError] = useState(null)
  const [formError, setFormError] = useState(null)
  const router = useRouter()
  useEffect(() => {
    async function getProfile() {
      setLoading(true)
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
      var user = session
      setLoading(false)
    }
    async function getPublicUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      alert(session.user.email)
      const { data, error } = await supabase
        .from("User")
        .select()
        .eq("email", session.user.email)

      if (error) {
        setfetchError("Can't find User")
        setUser(null)
        console.log(error)
      }
      if (data) {
        setUser(data)
        setfetchError(null)
      }
      setUserData(JSON.stringify(data).length)

    }
    getProfile()
    getPublicUser()
  }, [])

  const updateUser = async (e) => {
    // e.preventDefault()
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (userData == 2) {
      const { dataUpSert, errorUpsert } = await supabase
        .from("User")
        .upsert([{ email: session.user.email, role: role.toUpperCase() }], { upsert: true })
      // alert(errorUpsert)
    }
    
    if (!user) {
      setFormError("Something wrong when updating data")
    }

    const { dataUpSert, errorUpsert } = await supabase
      .from("User")
      .update(
        { role: role.toUpperCase() }
      )
      .eq('email', session.user.email)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    updateUser()
    if (!user) {
      setFormError("Something wrong when updating data")
    }

    //Set role in database
    const { data, error } = await supabase
      .from("User")
      .update({ role: role.toUpperCase() })
      .eq("email", session.user.email)

    if (error) {
      console.log("Cant Update")
      setFormError("Cant update")
    }

    if (role.toUpperCase() == "VENDOR") {
      router.push("/vendor")
    }
    if (role.toUpperCase() == "CUSTOMER") {
      router.push("customer")
    }
    console.log(data)
  }
  return (
    <>
      <InitialNavbar></InitialNavbar>
      <div className="flex items-center justify-center min-h-screen bg-secondary">
        <div className="relative flex flex-col m-6 bg-background shadow-2xl rounded-2xl md:flex md:flex-row md:space-y-0 md:m-0 md:mx-auto">
          <div className="p-6 md:p-10">
            <h2 className="mb-5 text-4xl font-bold xs:text-xs">Select Role</h2>
            <div className="flex flex-col md:flex-row p-4">
              <div className="flex flex-col md:flex-row p-4">
                <input
                  type="radio"
                  name="radio-regis"
                  id="vendor"
                  onChange={(e) => setRole("vendor")}
                  value={role}
                  className="flex flex-col md:flex-row radio radio-secondary space-x-2"
                />
                <label
                  htmlFor="vendor"
                  className="flex flex-col md:flex-row md:pl-4 text-secondary"
                >
                  Vendor
                </label>
              </div>
              <div className="flex flex-col md:flex-row p-4">
                <input
                  type="radio"
                  name="radio-regis"
                  id="customer"
                  onChange={(e) => setRole("customer")}
                  value={role}
                  className="flex flex-col md:flex-row radio radio-secondary"
                />
                <label
                  htmlFor="customer"
                  className="flex flex-col md:flex-row md:pl-4 text-secondary"
                >
                  Customer
                </label>
              </div>
            </div>
            <div className="flex flex-row pt-4 items-stretch md:items-center sm:items-center">
              <button className="btn btn-secondary" onClick={handleSubmit}>
                Finish
              </button>
            </div>

            <div className="mt-2 border-b border-mock"></div>
          </div>
        </div>
      </div>
    </>
  )
}
