import VendorNavBar from '@/components/VendorNavBar'
import Image from "next/image"
import P from "@/components/text/P"
import ProductCard from "@/components/ProductCard"
import ProfileVendorMock from "../../pages/assets/vendor_profile_mock.png"
export default function VendorsMain(){
    // const router = useRouter();
    return(
        <div>
            <VendorNavBar></VendorNavBar>
            

            <div className='flex justify-center bg-test'>
                <div className='flex flex-col m-6'>
                    <div>
                        <h3 className='md:text-xl xs:text-xs bg-background p-2 rounded-t-lg'>Product</h3>
                        <div className='grid grid-cols-4 gap-4 overflow-x-auto overflow-contain h-[200vh] p-10 bg-background rounded-b-lg space-x-4 pt-4'>
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