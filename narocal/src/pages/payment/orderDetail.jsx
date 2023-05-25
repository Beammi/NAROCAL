export default function orderDetail(){

    function handleConfirm(){ // not sure about button at the very bottom of code
        console.log("Confirm order detail");
    }



    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center mb-8">Order Details</h2>
            <form className="flex flex-col items-center font-sans" onSubmit={handleConfirm}>
                <div className="flex flex-col items-center gap-5">
                    <div className="flex flex-col items-center gap-2 w-full px-72">

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start text-xl font-semibold">Tracking Number</label>
                        </div>
                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">EMS - JP12345678TH</label>
                            <label className="justify-self-end btn btn-sm text-white bg-green-400 border-none">VIEW STATUS</label>
                            
                        </div>
                        <div className="border-t-2 my-5 border-slate-500 w-full"></div>


                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start text-xl font-semibold">Delivery Address</label>
                        </div>
                        <div className="grid grid-cols-1 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Natthapong L.</label>
                            <label className="justify-self-start">+668157XXX</label>
                            <label className="justify-self-start">LS Building, Ring 34, Saturn</label>                            
                        </div>
                        <div className="border-t-2 my-5 border-slate-500 w-full"></div>


                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start text-xl font-semibold">Product</label>
                        </div>
                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Product Name 1</label>
                            <label className="justify-self-end">5000 Baht</label>                            
                        </div>
                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Product Name 2</label>
                            <label className="justify-self-end">4000 Baht</label>                            
                        </div>
                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Shopping rate</label>
                            <label className="justify-self-end">300 Baht</label>                            
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
                            <label className="justify-self-start text-xl font-semibold">Payment Method</label>
                        </div>
                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start">Pay with K PLUS</label>                            
                        </div>
                        <div className="border-t-2 my-5 border-slate-500 w-full"></div>

                        <div className="grid grid-cols-2 justify-items-stretch items-center w-full mx-24">
                            <label className="justify-self-start text-xl font-semibold">Order ID</label>
                            <label className="justify-self-end">XXXX-XXXX-XXX</label>
                            
                        </div>
                    </div>
                    
                </div>
                <button className="btn btn-secondary text-white sm:btn-sm md:btn-lg mt-10">Confirm</button>
            </form>
            

            

        </div>

        
    )
}