
import DropDown from '@/components/DropDown'
import ProductCard from '@/components/ProductCard'
import {
  CloseOutlined,
  
} from '@ant-design/icons';
import InitialNavbar from '@/components/InitialNavbar'
import VerticalFilter from '@/components/VerticalFilter'
import VendorCard from '@/components/vendors/VendorCard'
import { useState } from 'react';

export default function Search(){

    // let searchKey = "Celine" // if a product
    let searchKey = "Yoko Ano" // if a vendor

    // send api and check whether searchKey is product or vendor, then setIsProduct
    const [isProduct, setIsProduct] = useState(false) // simply test first, change this boolean


    return (
        <>
            <InitialNavbar></InitialNavbar>
            <div className='flex justify-center bg-test pt-40 h-fit min-h-screen'>
                <div className='flex flex-col gap-y-8 bg-background p-10 w-5/6 h-fit'>

                    <div className="text-md breadcrumbs">
                        <ul>
                            <li><a href='/'>Home</a></li> 
                            <li>Search Results</li>
                        </ul>
                    </div>

                    <div>
                        <label className='text-md'>Here are your results for</label>
                        <h2 className='text-3xl font-bold '>'{searchKey}'</h2>
                    </div>
                    
                    <div className='flex flex-row justify-center'>

                        {(!isProduct) && 
                            <VerticalFilter
                            title1="Country"
                            option11="USA"
                            option12="Japan"
                            option13="South Korea"
                            option14="UK"

                            title2="City"
                            option21="New York"
                            option22="Los Angeles"
                            option23="Tokyo"
                            option24="South Korea"
                            option25="London"

                            
                            title3="Price Rate"
                            option31="Low to High"
                            option32="High to Low"
                            
                            >

                            </VerticalFilter>
                        }

                        {(isProduct) && 
                            <VerticalFilter
                            title1="Brand"
                            option11="Ambush"
                            option12="Christian Dior"
                            option13="Gucci"
                            option14="Bottega Venetta"
                            option15="Prada"

                            title2="Size"
                            option21="S"
                            option22="M"
                            option23="L"
                            option24="XL"
                            // option25="2XL"

                            
                            title3="Sleeve length"
                            option31="Short sleeve"
                            option32="Long sleeve"
                            option33="Sleeveless"
                            
                            >

                            </VerticalFilter>
                        }
                        

                        <div className='flex flex-col justify-center gap-8 w-5/6'>
                            {(!isProduct) &&
                                <div className='flex flex-col'>
                                    <VendorCard name='Yoko Ano' language='Thai, Japanese' exchange_rate='1 Yen = 0.28 Baht' shopping_rate='350 Baht' link="2"></VendorCard>
                                    {/* <VendorCard name='Yoko Pham' language='Thai, Japanese' exchange_rate='1 Yen = 0.28 Baht' shopping_rate='350 Baht' link="2"></VendorCard> */}
                                </div>
                            }

                            {(isProduct) && 
                            
                                <div className="grid grid-cols-4 gap-4">
                                    <ProductCard title='Saint Laurent' body='pointed collar Western denim shirt'></ProductCard>
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
                            }

                        </div>

                    </div>

                </div>
            </div>
            
        </>
    )
}