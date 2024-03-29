
import DropDown from '@/components/DropDown'
import ProductCard from '@/components/ProductCard'
import InitialNavbar from '@/components/InitialNavbar'
import Footer from '@/components/Footer'
import VerticalFilter from '@/components/VerticalFilter'
import EventsSearch from '@/components/events/events-search'
// import EventList from '@/components/events/event-list'
import EventList from '@/components/events/event-list-supa'
import { useRouter } from 'next/router'
import {PRODUCTS, getFilteredProducts, getProductByCategory} from "../../../../dummy-data"
import { supabase } from "lib/supabaseClient"
import { useEffect, useState } from 'react'

export default function Handbag(){

    const router = useRouter();
    const [products, setProducts] = useState([""])
    let brandChoice = []
    let categoryChoice = []

    let thisPageUpper = "Handbag"
    let thisPageLower = "handbag"

    function findFilterHandler(brand, category, sortPrice){
        const fullPath = `/products/bags/${thisPageLower}/${brand}/${category}/${sortPrice}`;
        // const fullPath = `/products/clothing/${brand}/${category}`;

        router.push(fullPath)
    }

    useEffect(() => {
        async function loadData(){
            const {data, error} = await supabase
                .from('Product')
                .select()
                .eq('category', thisPageLower)
                // .in('category', ['Albania', 'Algeria'])

            if(data == null){
                console.log("pass");
            }else {
                setProducts(data)
            }

            if (error) {
                console.log(JSON.stringify(error))
            }

        }

        loadData()
    }, [])

    products.map((p) => {
        if(!brandChoice.includes(p.brand)){
            brandChoice.push(p.brand)
        }
    })


    return (
        <>
            <InitialNavbar></InitialNavbar>
            <div className='flex flex-col justify-center bg-test pt-40 w-screen'>
                <div className='flex flex-col gap-y-10 bg-background p-20 w-full mb-8 min-h-screen'>

                    <div className="text-md breadcrumbs">
                        <ul>
                            <li><a href='/'>Home</a></li> 
                            <li><a href='/bags/bags'>Bags</a></li> 
                            <li>{thisPageUpper}</li>
                        </ul>
                    </div>
                    <h2 className='text-3xl font-bold text-center'>{thisPageUpper}</h2>
                    <div className='flex flex-col justify-center'>
                        <EventsSearch onFilter={findFilterHandler} brand={brandChoice} category={categoryChoice}/>
                        {/* <EventList items={filterProducts}/> */}
                        <EventList items={products}/>
                    </div>

                </div>
                <Footer></Footer>
            </div>
            

            
            
        </>
    )
}