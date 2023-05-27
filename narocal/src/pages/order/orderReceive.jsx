import CustomerNavbar from "@/components/CustomerNavbar"

export default function OrderCustomer() {
  function confirmReceive() {
    alert("Confirm Receive!!!")
  }
  return (
    <div>
      <CustomerNavbar></CustomerNavbar>
      <div className="flex items-center justify-center min-h-screen bg-secondary">
        <div className="relative flex flex-col m-6 bg-background shadow-2xl rounded-2xl md:flex md:flex-row md:space-y-0 md:m-0 md:mx-auto">
          <button onClick={confirmReceive} className="btn btn-secondary">
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}
