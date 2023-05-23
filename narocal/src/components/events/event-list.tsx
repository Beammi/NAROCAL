import ProductCard from '@/components/ProductCard'

export default function EventList(props){
    const {items} = props;

    return(
        <div className='grid grid-cols-4 gap-4 bg-background'>
            {items.map((product) => (
                <ProductCard title={product.brand} body={product.model}></ProductCard>
            ))}
        </div>
    );
}