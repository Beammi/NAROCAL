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
    const [username, setUsername] = useState("")
    const [vendor, setVendor] = useState(0)
    // const [user, setUser] = useState("")

    function convertStringFormatt(word) {
      if (word == "" || word == null) {
        return "";
      } else {
        let temp = word.slice(1, word.length - 1);
        return temp;
      }
    }

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
                console.log("o: ", product[0].authorId);
                

                const {data: vendorData, error: errorVendor} = await supabase
                    .from('VendorProfile')
                    .select()
                    .eq('id', product[0].authorId)

                if (error) {
                  console.log("Error" + error);
                }

                // if (vendorData == null) {
                //   setVendor(vendorData[0].userId)
                //   if (vendorData[0].userId == null) {
                //     setVendor(0);
                //   }
                // }
                console.log("v: ", JSON.stringify(vendorData));
                

                if (vendorData && vendorData.length > 0) {
                    // Check if 'data[0]' has a property 'id'
                    if ("userId" in vendorData[0]) {
                        setVendor(JSON.stringify(vendorData[0].userId, null, 2))
                        
                        // console.log("Customer id"+cusId)
                    } else {
                        console.log("Error: 'id' does not exist in 'data[0]'")
                        // You can set some default value here, if needed
                    } 
                    
                }

                
                
                const { data: userData, error: errorUser } = await supabase
                    .from('User')
                    .select()
                    .eq('id', vendor)

                if (userData && userData.length > 0) {
                    // Check if 'data[0]' has a property 'id'
                    if ("firstname" in userData[0]) {
                        setUsername(userData[0].firstname)
                        // console.log("Customer id"+cusId)
                    } else {
                        console.log("Error: 'id' does not exist in 'data[0]'")
                        // You can set some default value here, if needed
                    } 
                    
                }

                
                                
            }

            if (error) {
                console.log(JSON.stringify(error))
            }
            
        }
        
        renderInformation()
    }, [])


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
                        {/* <div className="badge badge-secondary sm:text-ellipsis sm:text-xs">NEW</div> */}
                        <p className="sm:text-ellipsis sm:text-xs md:text-sm ">{body}</p>
                        <div className="card-actions flex justify-end">
                            
                            { product.map((p) => {
                                if(p.price != null){
                                    return (
                                        <div>
                                            <label>{username}</label>
                                            <div className="badge badge-outline sm:text-ellipsis sm:text-xs md:text-sm">{p.price.toLocaleString()}฿</div>                                            
                                        </div>
                                        
                                        )
                                }                        
                            })}        
                        </div>
                        {/* <div className="card-actions justify-end">
                            <div className="badge badge-outline sm:text-ellipsis sm:text-xs md:text-sm">Fashion</div>
                            <div className="badge badge-outline sm:text-ellipsis sm:text-xs md:text-sm">Products</div>
                        </div> */}
                    </div>
                </div>
            </Link>
            
        </>
    )
}

export default ProductCardSupa