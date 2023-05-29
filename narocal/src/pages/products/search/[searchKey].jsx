import { useRouter } from "next/router"
// import {searchProducts} from "../../../../dummy-data"
import {searchProducts} from "../../api/product-api.ts"
// import EventList from '@/components/events/event-list'
import EventList from '@/components/events/event-list-supa'
import InitialNavbar from '@/components/InitialNavbar'
import EventsSearch from '@/components/events/events-search'
import Footer from '@/components/Footer'
import { supabase } from "lib/supabaseClient"
import { useState, useEffect } from "react"

export default function Search(){
    const router = useRouter();
    const [products, setProducts] = useState([""])

    const searchKey = router.query.searchKey

    let strSearchKey = ""

    if (typeof searchKey === 'string') {
        strSearchKey = searchKey;
    }

    const filterProducts = searchProducts({
        searchKeywords: strSearchKey
    });

    // make select option based on the search result items
    let brandChoice = []
    let categoryChoice = []
    // filterProducts.map((p) => {

    //     // push brand choice
    //     if(!brandChoice.includes(p.brand)){
    //         brandChoice.push(p.brand)
    //     }

    //     // push category choice (push only subCategory)
    //     if (p.category === "shirts" && !categoryChoice.includes("short sleeve")){ // to check not push duplicate
    //         categoryChoice.push("short sleeve", "long sleeve")
    //     }
    //     else if(p.category === "fragrance" && !categoryChoice.includes("parfum")){
    //         categoryChoice.push("eau de toilette", "eau de parfum", "parfum")
    //     }
    // })

    products.map((p) => {
        if(!brandChoice.includes(p.brand)){
            brandChoice.push(p.brand)
        }
        if(!categoryChoice.includes(p.subCategory)){
            categoryChoice.push(p.subCategory)
        }
    })

    useEffect(() => {
        async function loadData(){
            const {data, error} = await supabase
                .from('Product')
                .select()
                .textSearch('name', strSearchKey, {
                    type: 'websearch',
                    config: 'english',
                })

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

    function findFilterHandler(brand, category, sortPrice){
        const fullPath = `/products/search/${strSearchKey}/${brand}/${category}/${sortPrice}`;
        // const fullPath = `/products/clothing/${brand}/${category}`;

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
                    </div>
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

