import Image from "next/image"
import P from "../components/text/P"

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
                <img className="w-24 h-24 rounded-full mx-auto" src={image} alt="" width="384" height="512" />
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