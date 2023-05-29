
import DropDown from '@/components/DropDown'
import ProductCard from '@/components/ProductCard'
import InitialNavbar from '@/components/InitialNavbar'
import Footer from '@/components/Footer'
import VerticalFilter from '@/components/VerticalFilter'
import EventsSearch from '@/components/events/events-search'
// import EventList from '@/components/events/event-list'
import EventList from '@/components/events/event-list-supa'
import { useRouter } from 'next/router'
import {PRODUCTS, getFilteredProducts} from "../../../../dummy-data"
import { supabase } from "lib/supabaseClient"
import { useEffect, useState } from 'react'

export default function Clothing(){

    const router = useRouter()
    const [products, setProducts] = useState([""])
    let brandChoice = []
    let categoryChoice = []

    let thisPageUpper = "Shoes"
    let thisPageLower = "shoes"

    function findFilterHandler(brand, category, sortPrice){
        const fullPath = `/products/${thisPageLower}/${thisPageLower}/${brand}/${category}/${sortPrice}`;

        router.push(fullPath)
    }

    products.map((p) => {
        if(!brandChoice.includes(p.brand)){
            brandChoice.push(p.brand)
            // console.log(brandChoice);
        }
    })

    useEffect(() => {
        async function loadData(){
            const {data, error} = await supabase
                .from('Product')
                .select()
                .eq('category', thisPageLower)
                // .in('category', ["shirts", "dress", "blouse", "hoodie"])

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

    return (
        <>
            <InitialNavbar></InitialNavbar>
            <div className='flex flex-col justify-center bg-test pt-40'>
                <div className='flex flex-col gap-y-10 bg-background p-20 w-full mb-8 min-h-screen'>

                    <div className="text-md breadcrumbs">
                        <ul>
                            <li><a href='/'>Home</a></li> 
                            <li>{thisPageUpper}</li> 
                        </ul>
                    </div>
                    <h2 className='text-3xl font-bold text-center'>{thisPageUpper}</h2>
                    <div className='flex flex-col justify-center'>
                        <EventsSearch onFilter={findFilterHandler} brand={brandChoice} category={categoryChoice}/>
                        <EventList items={products}/>
                    </div>

                </div>
                <Footer></Footer>
            </div>
            
        </>
    )
}