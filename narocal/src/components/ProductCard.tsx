import Image from "next/image"
import Link from "next/link"
import P from "../components/text/P"
import ProductPicTemp from "../pages/assets/product_pic_temp.png"


interface ProductCard {
  image?: string | any
  imageAlt?: string
  title: string
  body: string
  price?: string
}

const ProductCard: React.FunctionComponent<ProductCard> = ({
  image,
  imageAlt,
  title,
  body,
  price
}) => {

    let productLongName = title + "-" + body
    productLongName = productLongName.replace(/\s+/g, '-')


    return (
        <>
            <Link href={{pathname:'/products/[slug]', query: {slug: productLongName, title: title, body: body}}}>
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
            </Link>
            
        </>
    )
}

export default ProductCard