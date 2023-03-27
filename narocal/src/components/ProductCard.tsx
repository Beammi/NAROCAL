import Image from "next/image"
import P from "../components/text/P"
import ProductPicTemp from "../pages/assets/product_pic_temp.png"


interface ProductCard {
  image?: string | any
  imageAlt?: string
  title: string
  body: string
}

const ProductCard: React.FunctionComponent<ProductCard> = ({
  image,
  imageAlt,
  title,
  body,
}) => {

    return (
        <>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <Image src={ProductPicTemp} alt="product pic temp" width={120}/>
                <div className="pt-6 space-y-4">
                    <blockquote>
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-lg font-medium">
                        {body}
                    </p>
                    </blockquote>

                    <figcaption className="font-medium">
                    <div className="text-slate-700 dark:text-slate-500">
                        500฿
                    </div>
                    </figcaption>
                </div>
            </figure>
            
        </>
    )
}

export default ProductCard