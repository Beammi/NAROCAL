import ProductCard from '@/components/ProductCardSupa';
import { useState, useEffect } from 'react';

export default function EventList(props) {
  const { items } = props;
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    if (Array.isArray(items)) {
      setProductItems(items);
    } else {
      items
        .then((data) => {
          setProductItems(data);
        })
        .catch((error) => {
          console.error("Error occurred while handling items promise:", error);
          // Handle the error gracefully
          setProductItems([]);
        });
    }
  }, [items]);

  return (
    <div className='grid md:grid-cols-4 gap-4 bg-none sm:grid-cols-2'>
      {productItems.map((product) => (
        <ProductCard
          link={product.id}
          title={product.brand}
          body={product.model}
          authorId={product.authorId}
        ></ProductCard>
      ))}
    </div>
  );
}