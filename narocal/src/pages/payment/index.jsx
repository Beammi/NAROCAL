import Link from "next/link"
import ProductPicTemp from "../../pages/assets/bank-transfer.jpg"
import Image from "next/image"

export default function PaymentHome() {
  return (
    <div className="flex flex-col items-center h-screen gap-10 mt-10">
            <h2 className="text-center text-3xl font-bold">Pay Here</h2>
            <figure><Image src={ProductPicTemp} alt="product pic temp" className="pt-2" width={280}/></figure>
            <Link className="btn btn-lg bg-neutral-400 text-black border-none hover:bg-secondary" href="/payment/successful">Confirm</Link>
        </div>
  )
}
