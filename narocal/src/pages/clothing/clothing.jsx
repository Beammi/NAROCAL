
import DropDown from '@/components/DropDown'
import ProductCard from '@/components/ProductCard'
import InitialNavbar from '@/components/InitialNavbar'
import Footer from '@/components/Footer'
import VerticalFilter from '@/components/VerticalFilter'
import EventsSearch from '@/components/events/events-search'
import { useRouter } from 'next/router'

export default function Clothing(){

    const router = useRouter()

    function findEventsHandler(year){
        const fullPath = `/clothing/${year}`;

        router.push(fullPath)
    }

    return (
        <>
            <InitialNavbar></InitialNavbar>
            <div className='flex flex-col justify-center bg-test pt-40'>
                <div className='flex flex-col gap-y-10 bg-background p-10 w-full'>

                    <div className="text-md breadcrumbs">
                        <ul>
                            <li><a href='/'>Home</a></li> 
                            <li>Clothing</li> 
                        </ul>
                    </div>
                    <h2 className='text-3xl font-bold text-center'>Clothing</h2>
                    <div className='flex flex-col justify-center'>
                        <EventsSearch onSearch={findEventsHandler}/>
                        <div className="grid grid-cols-4 gap-4 bg-background">
                            <ProductCard title='Louis Vuitton' body='Monogram Bandana shirt'></ProductCard>
                            <ProductCard title='Balenciaga' body='logo-print zip-up jacket'></ProductCard>
                            <ProductCard title='Dolce & Gabbana' body='Printed cotton V-neck T-shirt'></ProductCard>
                            <ProductCard title='Saint Laurent' body='pointed collar Western denim shirt'></ProductCard>
                            <ProductCard title='Gucci' body='Striped cotton shirt with embroidery'></ProductCard>
                            <ProductCard title='Prada' body='Double Match cotton shirt'></ProductCard>
                            <ProductCard title='Maison Margiela' body='double-breasted tailored coat'></ProductCard>
                        </div>
                    </div>

                </div>
                <Footer></Footer>
            </div>
            
        </>
    )
}