import Link from "next/link"
import VendorNavBar from "@/components/vendors/VendorNavBar"

export default function VendorProduct() {
    return(
        
        <div>

            <VendorNavBar></VendorNavBar>
            <div className="divide-y-2">
                <div className="p-6">
                    <Link href="products/create" className="hover:text-secondary md:text-lg sm:text-sm">Create Product </Link>
                </div>

            </div>
            
            <p className="p-6">Vendor Product</p>
        </div>
    )
}