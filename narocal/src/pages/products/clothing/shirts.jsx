
import DropDown from '@/components/DropDown'
import ProductCard from '@/components/ProductCard'
import InitialNavbar from '@/components/InitialNavbar'
import Footer from '@/components/Footer'
import VerticalFilter from '@/components/VerticalFilter'
import EventsSearch from '@/components/events/events-search'
import EventList from '@/components/events/event-list'
import { useRouter } from 'next/router'
import {PRODUCTS, getFilteredProducts, getProductByCategory} from "../../../../dummy-data"

export default function Shirts(){

    const router = useRouter();

    // function findSearchHandler(searchKey){
    //     const fullPath = `/products/${searchKey}`
    //     router.push(fullPath)
    // }

    function findFilterHandler(brand, category, sortPrice){
        const fullPath = `/products/clothing/shirts/${brand}/${category}/${sortPrice}`;
        // const fullPath = `/products/clothing/${brand}/${category}`;

        router.push(fullPath)
    }

    console.log("Path name: ", router.pathname);

    const filterProducts = getFilteredProducts({
        brand: "None",
        category: "shirts",
        subCategory: "None",
        price: "None",
        searchKeywords: "None"
    });

    let brandChoice = []
    let categoryChoice = ["short sleeve", "long sleeve"]

    filterProducts.map((p) => {

        // push brand choice
        if(!brandChoice.includes(p.brand)){
            brandChoice.push(p.brand)
        }
    })

    // const brand = getProductByCategory({category: "shirts"})
    // brand.map((p) => {
    //     brandChoice.push(p.brand)
    // })

    return (
        <>
            <InitialNavbar></InitialNavbar>
            <div className='flex flex-col justify-center bg-test pt-40 w-screen'>
                <div className='flex flex-col gap-y-10 bg-background p-20 w-full mb-8'>

                    <div className="text-md breadcrumbs">
                        <ul>
                            <li><a href='/'>Home</a></li> 
                            <li><a href='/clothing/clothing'>Clothing</a></li> 
                            <li>Shirts</li>
                        </ul>
                    </div>
                    <h2 className='text-3xl font-bold text-center'>Shirts</h2>
                    <div className='flex flex-col justify-center'>
                        <EventsSearch onFilter={findFilterHandler} brand={brandChoice} category={categoryChoice}/>
                        <EventList items={filterProducts}/>
                    </div>

                </div>
                <Footer></Footer>
            </div>
            

            
            
        </>
    )
}