import Image from "next/image"
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

    return (
        <>
            {/* <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <Image src={ProductPicTemp} alt="product pic temp" width={180}/>
                <div className="pt-6 space-y-4">
                    <blockquote>
                    <div className="font-bold text-base w-40">{title}</div>
                    <p className="font-medium text-sm w-40 xs:text-xs">
                        {body}
                    </p>
                    </blockquote>

                    <figcaption className="font-medium">
                    <div className="text-slate-700 dark:text-slate-500">
                        500฿
                    </div>
                    </figcaption>
                </div>
            </figure> */}
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
            
        </>
    )
}

export default ProductCard