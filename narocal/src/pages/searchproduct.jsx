
import DropDown from '@/components/DropDown'
import ProductCard from '@/components/ProductCard'
import {
  CloseOutlined,
  
} from '@ant-design/icons';
import InitialNavbar from '@/components/InitialNavbar'

export default function SearchProduct(){
    return (
        <>
            <InitialNavbar></InitialNavbar>
            <div className="flex flex-col items-center h-screen gap-8">
                
                <input type="text" placeholder="Search product" className="input input-bordered w-3/6 mt-7" />

                <div className="flex flex-row p-2 gap-5">
                    <DropDown title="Country" option1="USA" option2="Japan" option3="South Korea"></DropDown>
                    <DropDown title="City" option1="New York" option2="Tokyo" option3="Seoul"></DropDown>
                    <DropDown title="Price" option1="low to high" option2="high to low"></DropDown>

                </div>

                <div className="grid grid-cols-4 gap-4 bg-background overflow-y-auto h-[70vh]">
                    <ProductCard title='Gucci' body='Gucci Belt'></ProductCard>
                    <ProductCard title='Hermes' body='Hermes Birkin'></ProductCard>
                    <ProductCard title='Onitsuka' body='Onitsuka trainer'></ProductCard>
                    <ProductCard title='Saint Laurent' body='Saint Laurent Bag'></ProductCard>
                    <ProductCard title='Prada' body='Prada Backpack'></ProductCard>
                    <ProductCard title='Celine' body='Celine wallet'></ProductCard>
                    <ProductCard title='Gucci' body='Gucci Belt'></ProductCard>
                    <ProductCard title='Hermes' body='Hermes Birkin'></ProductCard>
                    <ProductCard title='Onitsuka' body='Onitsuka trainer'></ProductCard>
                    <ProductCard title='Gucci' body='Gucci Belt'></ProductCard>
                    
                </div>

            </div>
            
        </>
    )
}