import { useRouter } from "next/router"
import {getFilteredProducts} from "../../../../dummy-data"
import EventList from '@/components/events/event-list'
import InitialNavbar from '@/components/InitialNavbar'
import EventsSearch from '@/components/events/events-search'
import Footer from '@/components/Footer'

export default function ProductFilter(){
    const router = useRouter();

    const filterData = router.query.slug

    if(!filterData){
        return <p className="text-center text-lg">Loading...</p>; // run for the first time, may be data not load
    }

    let thisPage = filterData[0];
    let filteredBrand = filterData[1];
    let filteredSelectCategory = filterData[2]; // shirt, dress ||| short sleeve
    let filteredSortPrice = filterData[3];
    // const filteredBrand = filterData && filterData.length > 0 ? filterData[0] : null;

    let filteredCategory = ""
    let categoryChoice = []
    let brandChoice = []

    if(thisPage == "shirts"){
        categoryChoice.push("short sleeve", "long sleeve")
        filteredCategory = "shirts" // <- thisPage == filteredCategory
    }
    else  if(thisPage == "clothing"){ // big category at Navbar
        categoryChoice.push("shirts", "dress", "blouse")
        filteredCategory = ["shirts", "dress", "blouse"]
        filteredSelectCategory = "None"
    }

    console.log("1: ", filteredBrand, ", 2: ", filteredCategory, ", 3: ", filteredSelectCategory, ", 4: ", filteredSortPrice);

    const filterProducts = getFilteredProducts({
        brand: filteredBrand,
        category: filteredCategory,
        subCategory: filteredSelectCategory,
        price: filteredSortPrice,
        searchKeywords: "None"
    });

    filterProducts.map((p) => {
        // push brand choice
        if(!brandChoice.includes(p.brand)){
            brandChoice.push(p.brand)
        }
    })



    let thisPageText = thisPage.charAt(0).toUpperCase() + thisPage.slice(1);

    function findFilterHandler(brand, category, sortPrice){
        const fullPath = `/products/clothing/${thisPage}/${brand}/${category}/${sortPrice}`;

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
                            <li>{thisPageText}</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold text-center'>{thisPageText}</h3>
                        <h3 className='text-xl text-center mt-2'>
                            filtered by { filteredBrand == "None" ? "" : (filteredBrand + " ")} 
                            {/* {Array.isArray(filteredCategory) ? "" : (filteredCategory + " ")} */}
                            { (Array.isArray(filteredCategory) || filteredSelectCategory == "None") ? "" : ((filteredCategory === thisPage) ? filteredSelectCategory : filteredCategory)}
                            { filteredSortPrice == "None" ? "" : (filteredSortPrice + " ")}
                        </h3>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <EventsSearch onFilter={findFilterHandler} brand={brandChoice} category={categoryChoice}/>
                        {/* <EventList items={filterProducts}/> */}
                        {((!filterProducts || filterProducts.length === 0) ? 
                            <p className="text-center text-2xl font-semibold">No products for these chosen filters</p>
                            : <EventList items={filterProducts}/>)}
                    </div>

                </div>
                <Footer></Footer>

            </div>
            
        </>
    )
}

