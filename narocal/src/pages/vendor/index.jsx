import VendorNavBar from '@/components/vendors/VendorNavBar'
import Image from "next/image"
import P from "@/components/text/P"
import ProductCard from "@/components/ProductCard"
import ProfileVendorMock from "../../pages/assets/vendor_profile_mock.png"
import Link from 'next/link'
import VendorCard from '@/components/vendors/VendorCard'
import { getAllVendors } from '../../../dummy-data'
import VendorList from '@/components/vendors/VendorList'


export default function VendorsMain(){
    // const router = useRouter();
    const vendors = [
        {id: "1", name: "Chris Evan", language: ["English ","Spanish "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "300 Baht" },
        {id: "2", name: "Yoko Ano", language: ["English ","Japanese "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "350 Baht"},
        {id: "3", name: "Yoshida", language: ["English ","Japanese "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "200 Baht"},
        {id: "4", name: "Miyawaki Sakura", language: ["English ","Japanese "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "250 Baht"},
        {id: "5", name: "John Doe", language: ["English ","Chinese "], exchange_rate: "1 Yuan = 0.55 Baht", shopping_rate: "250 Baht"}
    ]
    const allVendors = getAllVendors();
    return(
        <div>
            <VendorNavBar></VendorNavBar>
            
            <div className='flex justify-center bg-test'>
                <div className='flex flex-col m-6 items-center'>
                    <div className='md:w-5/6 justify-items-center'>
                        <h3 className='md:text-xl xs:text-xs bg-background p-2 rounded-t-lg'>Vendor</h3>
                        <ul className='grid justify-items-center sm:justify-items-center md:grid-cols-2 sm:grid-flow-row sm:auto-rows-auto gap-4 overflow-x-auto overflow-contain bg-background rounded-b-lg'>
                                {vendors.map((vendor) =>(
                                    <VendorCard name={vendor.name} language={vendor.language} exchange_rate={vendor.exchange_rate} shopping_rate={vendor.shopping_rate} link={vendor.id}></VendorCard>
                                ))}
                                
                        </ul>
                        {/* <VendorList vendors = {allVendors}/> */}

                    </div>
                    
                </div>
                
            </div>

            
        </div>
    );
}