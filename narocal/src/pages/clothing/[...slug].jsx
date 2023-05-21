import { useRouter } from "next/router"
import {getFilteredProducts} from "../../../dummy-data"
import {getProductByBrand} from "../../../dummy-data"
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

    const filteredBrand = filterData[0];
    // const filteredBrand = filterData && filterData.length > 0 ? filterData[0] : null;

    const filterProducts = getFilteredProducts({
        brand: filteredBrand,
    });


    if(!filterProducts || filterProducts.length === 0){
        return <p className="text-center text-lg">No products for these chosen filters</p>;
    }

    // console.log("O: ", filterProducts);

    function findEventsHandler(year){
        const fullPath = `/clothing/${year}`;

        router.push(fullPath)
    }

    return (
        <>
            <InitialNavbar></InitialNavbar>
            <div className='flex flex-col justify-center bg-test pt-40 w-screen'>
                <div className='flex flex-col gap-y-10 bg-background p-10 w-full h-screen'>

                    <div className="text-md breadcrumbs">
                        <ul>
                            <li><a href='/'>Home</a></li> 
                            <li>Clothing</li> 
                        </ul>
                    </div>
                    <h2 className='text-3xl font-bold text-center'>Filter by {filteredBrand}</h2>
                    <div className='flex flex-col justify-center'>
                        <EventsSearch onSearch={findEventsHandler}/>
                        <EventList items={filterProducts}/>
                    </div>

                </div>
                <Footer></Footer>

            </div>
            
        </>
    )
}

