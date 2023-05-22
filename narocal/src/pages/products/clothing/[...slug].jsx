import { useRouter } from "next/router"
import {getFilteredProducts} from "../../../../dummy-data"
import EventList from '@/components/events/event-list'
import InitialNavbar from '@/components/InitialNavbar'
import EventsSearch from '@/components/events/events-search'
import Footer from '@/components/Footer'

export default function ProductFilter(){
    const router = useRouter();

    const filterData = router.query.slug

    console.log(filterData)

    if(!filterData){
        return <p className="text-center text-lg">Loading...</p>; // run for the first time, may be data not load
    }

    let thisCategoryPage = filterData[0];
    let filteredBrand = filterData[1];
    let filteredCategory = filterData[2];
    let filteredSortPrice = filterData[3];
    // const filteredBrand = filterData && filterData.length > 0 ? filterData[0] : null;

    thisCategoryPage = thisCategoryPage.charAt(0).toUpperCase() + thisCategoryPage.slice(1);

    let categoryChoice = [""]
    if(thisCategoryPage == "Shirts"){
        categoryChoice = ["short sleeve", "long sleeve"]

        if(filteredCategory == "None"){
            filteredCategory = "shirts"
        }
    }
    else  if(thisCategoryPage == "Clothing"){
        categoryChoice = ["shirts", "dress", "blouse"]

        if(filteredCategory == "None"){
            filteredCategory = ["shirts", "dress", "blouse"]
        }
        
    }

    const filterProducts = getFilteredProducts({
        brand: filteredBrand,
        category: filteredCategory,
        price: filteredSortPrice,
    });


    if(!filterProducts || filterProducts.length === 0){
        return <p className="text-center text-lg">No products for these chosen filters</p>;
    }

    // console.log("O: ", filterProducts);

    function findEventsHandler(brand, category, sortPrice){
        const fullPath = `/products/clothing/${thisCategoryPage}/${brand}/${category}/${sortPrice}`;

        router.push(fullPath)
    }

    return (
        <>
            <InitialNavbar></InitialNavbar>
            <div className='flex flex-col justify-center bg-test pt-40 w-screen'>
                <div className='flex flex-col gap-y-10 bg-background p-20 w-full h-screen'>

                    <div className="text-md breadcrumbs">
                        <ul>
                            <li><a href='/'>Home</a></li> 
                            <li><a href='/products/clothing/clothing'>Clothing</a></li>
                            <li>{thisCategoryPage}</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold text-center'>{thisCategoryPage}</h3>
                        <h3 className='text-xl text-center mt-2'>
                            filtered by { filteredBrand == "None" ? "" : filteredBrand} 
                            {Array.isArray(filteredCategory) ? "" : (filteredCategory + " ")}
                            { filteredSortPrice == "None" ? "" : (filteredSortPrice + " ")}
                        </h3>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <EventsSearch onSearch={findEventsHandler} category={categoryChoice}/>
                        <EventList items={filterProducts}/>
                    </div>

                </div>
                <Footer></Footer>

            </div>
            
        </>
    )
}

