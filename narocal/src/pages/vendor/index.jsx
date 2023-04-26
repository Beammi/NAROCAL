import VendorNavBar from '@/components/VendorNavBar'
import Image from "next/image"
import P from "@/components/text/P"
import ProductCard from "@/components/ProductCard"
import ProfileVendorMock from "../../pages/assets/vendor_profile_mock.png"
export default function VendorMain(){
    // const router = useRouter();
    return(
        <div>
            <VendorNavBar></VendorNavBar>
            <div className='flex justify-center p-4 bg-test min-h-screen'>
                <div className='relative felx flex-row m-6 items-center bg-background shadow-2xl rounded-2xl md:flex md:flex-col md:space-y-0 md:m-0 md:mx-auto md:w-5/6'>
                    <figure className='pt-4'><Image src={ProfileVendorMock} alt="Vendor's Profile" width={200}/></figure>
                    <div>
                        <h3 className='md:text-2xl xs:text-xs'>Marie Shop</h3>
                        
                    </div>
                    <div className="rating rating-md p-2">
                        <input type="radio" name="rating" className="mask mask-star-2 bg-secondary" />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-secondary" />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-secondary" />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-secondary" />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-secondary" />
                    </div>
                    
                    <div className='flex flex-row space-x-2 p-4'>
                        <P text="Language:" style='font-light md:text-sm xs:text-xs p-2'></P>
                        <P text="English" style='font-light bg-secondary text-white rounded-xl md:text-sm xs:text-xs p-2'></P>
                        <P text="Japanese" style='font-light bg-secondary text-white rounded-xl md:text-sm xs:text-xs p-2'></P>

                    </div>
                    <div className='flex flex-row space-x-2 p-4'>
                        <P text="Shopping Rate:" style='font-light md:text-sm xs:text-xs p-2'></P>
                        <P text="300 Baht" style='font-light bg-secondary text-white rounded-xl md:text-sm xs:text-xs p-2'></P>
                    </div>
                    <div className='flex flex-row space-x-2 p-4'>
                        <P text="Currency Rate:" style='font-light md:text-sm xs:text-xs p-2'></P>
                        <P text="1 US Dollar = 35 Baht" style='font-light bg-secondary text-white rounded-xl md:text-sm xs:text-xs p-2'></P>
                        <P text="1 Yen = 0.3 Baht" style='font-light bg-secondary text-white rounded-xl md:text-sm xs:text-xs p-2'></P>

                    </div>
                </div>
   
            </div>

            <div className='flex justify-center bg-test'>
                <div className='flex flex-col m-6'>
                    <div>
                        <h3 className='md:text-xl xs:text-xs bg-background p-2 rounded-t-lg'>Product</h3>
                        <div className='grid grid-cols-4 gap-4 overflow-x-auto overflow-contain h-[50vh] p-10 bg-background rounded-b-lg space-x-4 pt-4'>
                            <ProductCard title='Gucci' body='Jackie 1961 small shoulder bag'></ProductCard>
                            <ProductCard title='TOM FORD' body='straight-leg jeans'></ProductCard>
                            <ProductCard title='Dolce & Gabbana' body='ripped-detail straight-leg jeans'></ProductCard>
                            <ProductCard title='Diesel' body='straight-leg 1995 jeans'></ProductCard>
                            <ProductCard title='Nike' body='Dunk Low Retro Panda'></ProductCard>
                            <ProductCard title='Prada' body='Double Match cotton shirt'></ProductCard>
                            <ProductCard title='Balenciaga' body='logo-print zip-up jacket'></ProductCard>
                            <ProductCard title='Maison Margiela' body='double-breasted tailored coat'></ProductCard>
                            <ProductCard title='Kenzo' body='logo-print belt bag'></ProductCard>
                        </div>
                    </div>
                    
                </div>
                
            </div>

            
        </div>
    );
}