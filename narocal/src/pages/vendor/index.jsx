import VendorNavBar from '@/components/VendorNavBar'
import Image from "next/image"
import ProfileVendorMock from "../pages/assets/vendor_profile_mock.png"
export default function VendorMain(){
    const router = useRouter();
    return(
        <div>
            <VendorNavBar></VendorNavBar>
            <div>
                <figure><Image src={ProfileVendorMock} alt="Vendor's Profile"/></figure>

            </div>
        </div>
    );
}