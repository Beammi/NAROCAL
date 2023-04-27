import VendorNavBar from '@/components/VendorNavBar'
import Image from "next/image"
import P from "@/components/text/P"
import ProductCard from "@/components/ProductCard"
import ProfileVendorMock from "../../pages/assets/vendor_profile_mock.png"
import Link from 'next/link'
import VendorCard from '@/components/VendorCard'


export default function VendorsMain(){
    // const router = useRouter();
    const vendors = [
        {id: "1", name: "Chris Evan", language: "English", exchange_rate: "1 pound = 40 Baht", shopping_rate: "300 Baht" },
        {id: "2", name: "Yoko Ano", language: "English", exchange_rate: "1 pound = 40 Baht", shopping_rate: "300 Baht"},
        {id: "3", name: "Yoshida", language: "English", exchange_rate: "1 pound = 40 Baht", shopping_rate: "300 Baht"},
        {id: "4", name: "Miyawaki Sakura", language: "English", exchange_rate: "1 pound = 40 Baht", shopping_rate: "300 Baht"}
    ]
    return(
        <div>
            <VendorNavBar></VendorNavBar>
            
            <div className='flex justify-center bg-test'>
                <div className='flex flex-col m-6'>
                    <div className='md:w-5/6'>
                        <h3 className='md:text-xl xs:text-xs bg-background p-2 rounded-t-lg'>Vendor</h3>
                        <ul className='grid justify-items-center md:grid-cols-2 sm:grid-flow-row sm:auto-rows-auto gap-4 overflow-x-auto overflow-contain p-10 bg-background rounded-b-lg'>
                                {vendors.map((vendor) =>(
                                    <VendorCard name={vendor.name} language={vendor.language} exchange_rate={vendor.exchange_rate} shopping_rate={vendor.shopping_rate} link={vendor.id}></VendorCard>
                                ))}
                                
                        </ul>
                    </div>
                    
                </div>
                
            </div>

            
        </div>
    );
}