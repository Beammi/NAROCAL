import VendorNavBar from '@/components/VendorNavBar'
import Image from "next/image"
import P from "@/components/text/P"
import ProfileVendorMock from "../../pages/assets/vendor_profile_mock.png"
export default function VendorMain(){
    // const router = useRouter();
    return(
        <div>
            <VendorNavBar></VendorNavBar>
            <div className='flex justify-center p-4'>
                <div className='felx flex-col items-center'>
                    <figure><Image src={ProfileVendorMock} alt="Vendor's Profile" width={200}/></figure>
                    <P text="Marie Shop" style='text-base xs:text-xs'></P>
                    <div className="rating rating-md p-2">
                        <input type="radio" name="rating" className="mask mask-star-2 bg-secondary" />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-secondary" />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-secondary" />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-secondary" />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-secondary" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}