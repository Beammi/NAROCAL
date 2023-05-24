import { useRouter } from "next/router"
import {getFilteredProducts, getProductByCategory} from "../../../../dummy-data"
import EventList from '@/components/events/event-list'
import InitialNavbar from '@/components/InitialNavbar'
import EventsSearch from '@/components/events/events-search'
import Footer from '@/components/Footer'

export default function SearchAndFilter(){
    const router = useRouter();

    const filterData = router.query.slug

    console.log(filterData)

    if(!filterData){
        return <p className="text-center text-lg">Loading...</p>; // run for the first time, may be data not load
    }

    let strSearchKey = filterData[0];
    let filteredBrand = filterData[1];
    let filteredCategory = filterData[2];
    let filteredSortPrice = filterData[3];
    // const filteredBrand = filterData && filterData.length > 0 ? filterData[0] : null;

    const filterProducts = getFilteredProducts({
        brand: filteredBrand,
        category: "None",
        subCategory: filteredCategory,
        price: filteredSortPrice,
        searchKeywords: strSearchKey
    });

    // make select option based on the search result items
    let brandChoice = []
    let categoryChoice = []
    filterProducts.map((p) => {

        // push brand choice
        if(!brandChoice.includes(p.brand)){
            brandChoice.push(p.brand)
        }

        // push category choice (push only subCategory)
        if (p.category === "shirts" && !categoryChoice.includes("short sleeve")){ // to check not push duplicate
            categoryChoice.push("short sleeve", "long sleeve")
        }
        else if(p.category === "fragrance" && !categoryChoice.includes("parfum")){
            categoryChoice.push("eau de toilette", "eau de parfum", "parfum")
        }
    })


    if(!filterProducts || filterProducts.length === 0){
        return <p className="text-center text-lg">No products for these chosen filters</p>;
    }

    // console.log("O: ", filterProducts);

    function findFilterHandler(brand, category, sortPrice){
        const fullPath = `/products/search/${strSearchKey}/${brand}/${category}/${sortPrice}`;

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
                            <li>{strSearchKey}</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold text-center'>Search results for "{strSearchKey}"</h3>
                        <h3 className='text-xl text-center mt-2'>
                            filtered by { filteredBrand == "None" ? "" : filteredBrand} 
                            {Array.isArray(filteredCategory) ? "" : (filteredCategory + " ")}
                            { filteredSortPrice == "None" ? "" : (filteredSortPrice + " ")}
                        </h3>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <EventsSearch onFilter={findFilterHandler} category={categoryChoice}/>
                        <EventList items={filterProducts}/>
                    </div>

                </div>
                <Footer></Footer>

            </div>
            
        </>
    )
}
