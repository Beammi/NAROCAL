import Image from "next/image"
import Link from "next/link"
import P from "../components/text/P"
// import ProductPicTemp from "../pages/assets/product_pic_temp.png"
// import {getProductByID} from "../../dummy-data"
import { useEffect, useState } from "react"
import { supabase } from "lib/supabaseClient"


interface ProductCardSupa {
  image?: string | any
  imageAlt?: string
  title?: string
  body?: string
  link: string
  price?: string
  authorId?: string
}

const ProductCardSupa: React.FunctionComponent<ProductCardSupa> = ({
  image,
  imageAlt,
  link,
  title,
  body,
  authorId
}) => {

    // const prod = getProductByID({id: link});

    const [product, setProduct] = useState([""]);

    useEffect(() => {
        async function renderInformation(){
            const { data, error } = await supabase
                .from("Product")
                .select()
                .eq("id", link)
            
            if(data == null){
                console.log("pass");
            }else{
                setProduct(data)
                
            }

            if (error) {
                console.log(JSON.stringify(error))
            }
            
        }
        if(product.image != undefined){
            console.log(product.image);
        }
        
        renderInformation()
    })


    return (
        <>
            <Link href={{pathname:'/products/[slug]', query: {slug: link}}}>
                <div className="card sm:card-compact bg-base-100 shadow-xl">
                    {/* <figure><Image src={ProductPicTemp} alt="product pic temp" className="pt-2" width={100}/></figure> */}
                    { product.map((p) => {
                        if(p.image != null){
                            return <figure><Image src={p.image} alt="product image" className="pt-2" width={200} height={300} /></figure>
                        }                        
                    })}

                    <div className="card-body">
                        <p className="card-title sm:text-ellipsis sm:text-xs md:text-xl">
                        {title}
                        </p>
                        <div className="badge badge-secondary sm:text-ellipsis sm:text-xs">NEW</div>
                        <p className="sm:text-ellipsis sm:text-xs md:text-sm ">{body}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline sm:text-ellipsis sm:text-xs md:text-sm">Fashion</div>
                            <div className="badge badge-outline sm:text-ellipsis sm:text-xs md:text-sm">Products</div>
                        </div>
                    </div>
                </div>
            </Link>
            
        </>
    )
}

export default ProductCardSupa