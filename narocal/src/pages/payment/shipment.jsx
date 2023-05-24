export default function Shipment(){

    function handleConfirm(){ // not sure about button at the very bottom of code
        console.log("Handle purchase");
    }



    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center mb-8">Shipment</h2>
            <form className="flex flex-col items-center font-sans" onSubmit={handleConfirm}>
                <div className="flex flex-col items-center gap-5">
                    <div className="flex flex-col items-center gap-5 w-full px-72">

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Order ID</label>
                            <div className="justify-self-end select-text inline-flex text-center bg-white text-slate-400 font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                                1234-5678-9999
                            </div>
                        </div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Delivery address</label>
                            <div className="justify-self-end select-text inline-flex text-center bg-white text-slate-400 font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                                LS Building, Ring 34, Saturn
                            </div>
                        </div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Vendor</label>
                            <div className="justify-self-end select-text inline-flex text-center bg-white text-slate-400 font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                                Jose Toronto
                            </div>
                        </div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Customer</label>
                            <div className="justify-self-end select-text inline-flex text-center bg-white text-slate-400 font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                                Anna Scoth
                            </div>
                        </div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Tracking Number</label>
                            <input type="text" placeholder="JP123456789TH" className="input input-bordered text-md rounded-lg text-black placeholder-slate-800" />
                        </div>
                    </div>


                    
                </div>
                <button className="btn btn-secondary text-white sm:btn-sm md:btn-lg mt-10">Confirm</button>
            </form>
            

            

        </div>

        
    )
}