import Image from "next/image"
import P from "../text/P"
import ProfilePicTemp from "../../pages/assets/profile_pic_temp.png"
import Link from "next/link"
// import { Url } from "url"

interface VendorCard {
  image?: string | any
  imageAlt?: string
  link?: string
  name: string
  language: []
  exchange_rate: string
  shopping_rate: string
  image_star_rate?: string
}

const VendorCard: React.FunctionComponent<VendorCard> = ({
  image,
  imageAlt,
  link,
  name,
  language,
  exchange_rate,
  shopping_rate
}) => {
    return (
        <>
            <Link href={{pathname:'/vendor/[slug]', query: {slug: link, name: name}}}>
                <div className="card lg:card-side sm:card-compact shadow-xl md:w-5/6 rounded-xl bg-background p-4 m-4">
                    <figure><Image className="mx-8 sm:pt-2" src={ProfilePicTemp} alt="product pic temp" width={100}/></figure>
                    <div className="card-body bg-background rounded-xl">
                        <h2 className="card-title sm:text-ellipsis sm:text-xs md:text-xl">{name}</h2>
                        <p className="sm:text-ellipsis sm:text-xs md:text-base">Languages: {language}
                        {/* .map(l => (
                        <p className="font-light md:text-sm m:text-xs p-2">{l}</p>)) */}
                        </p>
                        {/* <p className="sm:text-ellipsis sm:text-xs md:text-base">Exchange Rate: {exchange_rate}</p> */}
                        <p className="sm:text-ellipsis sm:text-xs md:text-base">Shopping Rate: {shopping_rate}</p>
                        <div className="card-actions justify-start rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </Link>
            
            
        </>
    )
}

export default VendorCard