
import DropDown from '@/components/DropDown'
import ProductCard from '@/components/ProductCard'
import InitialNavbar from '@/components/InitialNavbar'
import VerticalFilter from '@/components/VerticalFilter'

export default function Shirts(){
    return (
        <>
            <InitialNavbar></InitialNavbar>
            <div className='flex justify-center bg-test pt-40'>
                <div className='flex flex-col gap-y-10 bg-background p-10 w-5/6'>

                    <div className="text-md breadcrumbs">
                        <ul>
                            <li><a href='/'>Home</a></li> 
                            <li><a href='/clothing/clothing'>Clothing</a></li> 
                            <li>Shirts</li>
                        </ul>
                    </div>
                    <h2 className='text-3xl font-bold '>Shirts</h2>
                    <div className='flex flex-row justify-center'>
                        {/* <div className='flex flex-col'>
                            <p>Brand</p>
                        </div> */}
                        <VerticalFilter
                            title1="Brand"
                            option11="Ambush"
                            option12="Christian Dior"
                            option13="Gucci"
                            option14="Valentino"
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
                        <div className="grid grid-cols-4 gap-4 bg-background">
                            <ProductCard title='Saint Laurent' body='pointed collar Western denim shirt'></ProductCard>
                            <ProductCard title='Gucci' body='Jackie 1961 small shoulder bag'></ProductCard>
                            <ProductCard title='TOM FORD' body='straight-leg jeans'></ProductCard>
                            <ProductCard title='Dolce & Gabbana' body='ripped-detail straight-leg jeans'></ProductCard>
                            <ProductCard title='Diesel' body='straight-leg 1995 jeans'></ProductCard>
                            <ProductCard title='Prada' body='Double Match cotton shirt'></ProductCard>
                            <ProductCard title='Balenciaga' body='logo-print zip-up jacket'></ProductCard>
                            <ProductCard title='Maison Margiela' body='double-breasted tailored coat'></ProductCard>
                            <ProductCard title='Kenzo' body='logo-print belt bag'></ProductCard>
                            <ProductCard title='Nike' body='Dunk Low Retro Panda'></ProductCard>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}