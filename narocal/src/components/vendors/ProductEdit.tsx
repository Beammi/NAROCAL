import Image from "next/image"
import Link from "next/link"
import ProductPicTemp from "../../pages/assets/product_pic_temp.png"
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

    const [product, setProduct] = useState(null)
    const [username, setUsername] = useState("")

    useEffect(() => {
        async function fetchData() {
        const { data, error } = await supabase.from("Product").select().eq("id", link)
        if (error) console.log("Error" + error)
        if(data==null){
            console.log("null")
            return
        }
        const productData = data[0]
        
        setProduct(productData)

        const { data: vendorData } = await supabase.from("VendorProfile").select().eq("id", productData.authorId)
        const userId = vendorData[0].userId

        const { data: userData } = await supabase.from("User").select().eq("id", userId)
        setUsername(userData[0].firstname)
        }

        fetchData()
    }, [link])

    return (
      <>
        {/* <Link href={{pathname:'/vendor/products/edit/[slug]', query: {slug: link}}}>
                <div className="card sm:card-compact bg-base-100 shadow-xl">
                    <figure><Image src={ProductPicTemp} alt="product pic temp" className="pt-2" width={100}/></figure>
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
            </Link> */}

        {product && (
          <Link href={{pathname:'/vendor/products/edit/[slug]', query: {slug: link}}}>
            <div className="card sm:card-compact bg-base-100 shadow-xl">
              {product.image && (
                <figure>
                  <Image
                    src={product.image}
                    alt="product image"
                    className="pt-2"
                    width={230}
                    height={100}
                  />
                </figure>
              )}

              <div className="card-body">
                <p className="card-title sm:text-ellipsis sm:text-xs md:text-xl">
                  {title}
                </p>
                <p className="sm:text-ellipsis sm:text-xs md:text-sm ">
                  {body}
                </p>
                <div className="card-actions flex justify-end">
                  {product.price && (
                    <div>
                      <label className="text-md text-emerald-500">
                        Offered by {username}{" "}
                      </label>
                      <div className="badge badge-outline sm:text-ellipsis sm:text-xs md:text-md font-bold">
                        {product.price.toLocaleString()}฿
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        )}
      </>
    );
}

export default ProductCardSupa