import { useState, useRef } from "react"
import Button from "../../components/Button"

export default function Payment(){

    const paymentMethod = useRef()

    function handlePurchase(){ // not sure about button at the very bottom of code
        console.log("Handle purchase");
    }



    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center mb-2">Payment</h2>
            <form className="flex flex-col items-center font-sans" onSubmit={handlePurchase}>
                <div className="flex flex-col items-center gap-5">
                    <div className="flex flex-col items-center gap-5 w-full px-72">
                        <h2 className="text-xl mt-6 font-semibold">Information</h2>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Order ID</label>
                            <div className="justify-self-end select-text inline-flex text-center bg-white text-slate-400 font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                                1234-5678-9999
                            </div>
                        </div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Delivery address</label>
                            <input type="text" placeholder="Type your address" className="input input-bordered w-full text-md rounded-lg text-black placeholder-slate-800" />
                        </div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Seller's name</label>
                            <div className="justify-self-end select-text inline-flex text-center bg-white text-slate-400 font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                                Jose Toronto
                            </div>
                        </div>
                    </div>


                    <h2 className="text-xl mt-8 font-semibold">Product</h2>
                    <div className="flex flex-col items-center gap-5 w-full px-72">
                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Dior Sauvage Eau de Toilette</label>
                            <label className="justify-self-end">3500 Yen</label>
                        </div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Exchange rate</label>
                            <label className="justify-self-end">x 0.3</label>
                        </div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Price in Baht</label>
                            <label className="justify-self-end">1050 Baht</label>
                        </div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Shopping rate</label>
                            <label className="justify-self-end">300 Baht</label>
                        </div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Payment option</label>
                            <select  className="select select-bordered border-2 border-neutral-300 ml-8" ref={paymentMethod}>
                                <option value={undefined}>Select payment method</option>
                                <option value="credit card">Credit card</option>
                                <option value="debit card">Debit card</option>
                                <option value="pay with k plus">Pay with K PLUS</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Merchandise subtotal</label>
                            <label className="justify-self-end">13500 Baht</label>
                        </div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Shipping rate</label>
                            <label className="justify-self-end">100 Baht</label>
                        </div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24 text-2xl font-semibold">
                            <label className="justify-self-start">Total payment</label>
                            <label className="justify-self-end">1450 Baht</label>
                        </div>


                    </div>

                </div>
                <button className="btn btn-secondary text-white sm:btn-sm md:btn-lg mt-10">Purchase Order</button>
            </form>
            

            

        </div>

        
    )
}