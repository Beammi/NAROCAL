import React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
import { useRouter } from "next/router"

// @tsx-nocheck

interface ICreate {
  vendorId: number
  customerId: number
  name: string
  price: number
}
const CreateOrder: React.FunctionComponent<ICreate> = ({
  vendorId,
  customerId,
  name,
  price,
}) => {
  const [vendorName, setVendorName] = useState("")
  const [cusName, setCusName] = useState("")
  const [vendorAddress, setVendorAddress] = useState("")
  const [cusAddress, setCusAddress] = useState("")
  const [shopping_rate,setShoppingRate] = useState(0)
  useEffect(() => {
    async function getNamesAndAddress() {
      const { data: VendorName, error } = await supabase
        .from("User")
        .select()
        .eq("id", vendorId)
      // console.log("Hereeeee"+data[0].id)
      const { data: CustomerName, error: ErrorCustomer } = await supabase
        .from("User")
        .select()
        .eq("id", customerId)
      if (error || ErrorCustomer) {
        console.log("Error" + error)
      } else if (VendorName == undefined || CustomerName == undefined) {
        console.log("pass")
        return
      } else {
        // Check if 'data' is defined and not empty
        if (VendorName && VendorName.length > 0) {
          // Check if 'data[0]' has a property 'id'
          if ("firstname" in VendorName[0]) {
            setVendorName(VendorName[0].firstname)
            setVendorAddress(VendorName[0].address)
            setCusName(CustomerName[0].firstname)
            setCusAddress(CustomerName[0].address)
          } else {
            console.log("Error: 'id' does not exist in 'data[0]'")
            // You can set some default value here, if needed
          }
        } else {
          console.log("Error: 'data' is undefined or empty")
          // You can set some default value here, if needed
        }
      }
    }
    async function getShoppingRate() {
        const { data: VendorName, error } = await supabase
        .from("VendorProfile")
        .select()
        .eq("userId", vendorId)
        if (error) {
            console.log("Error" + error)
          } else if (VendorName == undefined) {
            console.log("pass")
            return
          } else {
            // Check if 'data' is defined and not empty
            if (VendorName && VendorName.length > 0) {
              // Check if 'data[0]' has a property 'id'
              if ("shpRate" in VendorName[0]) {
                setShoppingRate(VendorName[0].shpRate)
              } else {
                console.log("Error: 'shpRate' does not exist in 'data[0]'")
                // You can set some default value here, if needed
              }
            } else {
              console.log("Error: 'VendorName' is undefined or empty")
              // You can set some default value here, if needed
            }
        }    

    }
    getNamesAndAddress()
    getShoppingRate()
  }, [cusName, vendorName, cusAddress, vendorAddress,shopping_rate])

  function handleConfirm() {
    const router = useRouter()
    router.push("/chat/"+vendorId+"/"+customerId)
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Order Details</h2>
      <form
        className="flex flex-col items-center font-sans"
        onSubmit={handleConfirm}
      >
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-2 w-full px-72">
            <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start text-xl font-semibold">
                Customer Name
              </label>
            </div>
            <div className="grid grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">{cusName}</label>
            </div>

            <div className="border-t-2 my-5 border-slate-500 w-full"></div>

            <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start text-xl font-semibold">
                Delivery Address
              </label>
            </div>
            <div className="grid grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start"></label>
              <label className="justify-self-start">+668157XXX</label>
              <label className="justify-self-start">
                {cusAddress}
              </label>
            </div>
            <div className="border-t-2 my-5 border-slate-500 w-full"></div>

            <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start text-xl font-semibold">
                Product
              </label>
            </div>
            <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">{name}</label>
              <label className="justify-self-end">{price}</label>
            </div>
            
            <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Shopping rate</label>
              <label className="justify-self-end">{shopping_rate} Baht</label>
            </div>
            <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Shipping subtotal</label>
              <label className="justify-self-end ">100 Baht</label>
            </div>
            <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Order Total</label>
              <label className="justify-self-end">9400 Baht</label>
            </div>
            <div className="border-t-2 my-5 border-slate-500 w-full"></div>

            <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start text-xl font-semibold">
                Payment Method
              </label>
            </div>
            <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Pay with K PLUS</label>
            </div>
            <div className="border-t-2 my-5 border-slate-500 w-full"></div>

            <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start text-xl font-semibold">
                Order ID
              </label>
              <label className="justify-self-end">XXXX-XXXX-XXX</label>
            </div>
          </div>
        </div>
        <button className="btn btn-secondary text-white sm:btn-sm md:btn-lg mt-10">
          Confirm
        </button>
      </form>
    </div>
  )
}
export default CreateOrder