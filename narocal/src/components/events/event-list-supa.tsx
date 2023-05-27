// // import ProductCard from '@/components/ProductCard'
// import ProductCard from '@/components/ProductCardSupa'

// export default function EventList(props){
//     const {items} = props;
//     console.log(items);

//     async function renderEvent(){
//         if (Array.isArray(items)) {
//             return (
//             <div className='grid grid-cols-4 gap-4 bg-background'>
//                 {items.map((product) => (
//                 <ProductCard
//                     key={product.id}
//                     link={product.id}
//                     title={product.brand}
//                     body={product.model}
//                     authorId={product.authorId}
//                 ></ProductCard>
//                 ))}
//             </div>
//             );
//         }
//         else{
//             items.then(productItems => {
//                 productItems.map((product) => {
//                     return <ProductCard link={product.id} title={product.brand} body={product.model} authorId={product.authorId}></ProductCard>
//                 })
//             }).catch(error => {
//                 console.log("In the catch: ", error);
                
//             })
//         }
//     }
    

//     return(
//         <div className='grid grid-cols-4 gap-4 bg-background'>

//             {renderEvent()}
//             {/* {items.map((product) => (
//                 <ProductCard link={product.id} title={product.brand} body={product.model} authorId={product.authorId}></ProductCard>
//             ))} */}

//             {/* {
//                 items.then(productItems => {
//                     productItems.map((product) => {
//                         <ProductCard link={product.id} title={product.brand} body={product.model} authorId={product.authorId}></ProductCard>
//                     })
//                 })
//             } */}

//             {/* { items instanceof Promise ?
//                 (items.then(productItems => {
//                     productItems.map((product) => {
//                         <ProductCard link={product.id} title={product.brand} body={product.model} authorId={product.authorId}></ProductCard>
//                     }).catch((error) => {
//                         console.error("Error occurred while handling items promise:", error);
//                         // Handle the error gracefully
//                         return null;
//                     })
//                 })):
//                 (<h2>Not promise</h2>)
//             } */}
//         </div>
//     );
// }


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
    <div className='grid grid-cols-4 gap-4 bg-background'>
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