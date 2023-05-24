
import DropDown from '@/components/DropDown'
import ProductCard from '@/components/ProductCard'
import InitialNavbar from '@/components/InitialNavbar'
import Footer from '@/components/Footer'
import VerticalFilter from '@/components/VerticalFilter'
import EventsSearch from '@/components/events/events-search'
import EventList from '@/components/events/event-list'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation';
import {PRODUCTS, getFilteredProducts} from "../../../../dummy-data"

export default function BagsSubCategory(){

    const router = useRouter();

    let thisSubCategory = router.query.subCategory
    console.log("Q: ", router.query);
    console.log("My: ", thisSubCategory);

    function findFilterHandler(brand, category, sortPrice){
        const fullPath = `/products/bags/${thisSubCategory}/${brand}/${category}/${sortPrice}`;
        // const fullPath = `/products/clothing/${brand}/${category}`;

        router.push(fullPath)
    }

    // make uppercase first letter
    let strSubCategory = ""

    if (typeof thisSubCategory === 'string') {
        strSubCategory = thisSubCategory;
        
    }

    const filterProducts = getFilteredProducts({
        brand: "None",
        category: "bags",
        subCategory: strSubCategory,
        price: "None",
        searchKeywords: "None"
    });

    let brandChoice = []
    let categoryChoice = ["handbag", "shoulder bag", "crossbody bag", "backpack"]
    filterProducts.map((p) => {

        // push brand choice
        if(!brandChoice.includes(p.brand)){
            brandChoice.push(p.brand)
        }
    })



    strSubCategory = strSubCategory.charAt(0).toUpperCase() + strSubCategory.slice(1);
    

    return (
        <>
            <InitialNavbar></InitialNavbar>
            <div className='flex flex-col justify-center bg-test pt-40 w-screen'>
                <div className='flex flex-col gap-y-10 bg-background p-20 w-full mb-8'>

                    <div className="text-md breadcrumbs">
                        <ul>
                            <li><a href='/'>Home</a></li> 
                            <li><a href='/clothing/bags'>Bags</a></li> 
                            <li>{strSubCategory}</li>
                        </ul>
                    </div>
                    <h2 className='text-3xl font-bold text-center'>{strSubCategory}</h2>
                    <div className='flex flex-col justify-center'>
                        <EventsSearch onFilter={findFilterHandler} brand={brandChoice}/>
                        <EventList items={filterProducts}/>
                    </div>

                </div>
                <Footer></Footer>
            </div>
            

            
            
        </>
    )
}