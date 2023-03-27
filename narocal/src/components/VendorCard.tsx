import Image from "next/image"
import P from "../components/text/P"
import ProfilePicTemp from "../pages/assets/profile_pic_temp.png"

interface VendorCard {
  image?: string | any
  imageAlt?: string

  name: string
  language: string
  exchange_rate: string
  shopping_rate: string
  image_star_rate?: string
}

const VendorCard: React.FunctionComponent<VendorCard> = ({
  image,
  imageAlt,
  name,
  language,
  exchange_rate,
  shopping_rate
}) => {
    return (
        <>
            <div className="card lg:card-side shadow-xl w-5/6 rounded-xl bg-background my-2 ml-16">
                <figure><Image className="mx-8" src={ProfilePicTemp} alt="product pic temp" width={100}/></figure>
                <div className="card-body bg-background rounded-xl">
                    <h2 className="card-title">{name}</h2>
                    <p>Languages: {language}</p>
                    <p>Exchange Rate: {exchange_rate}</p>
                    <p>Shopping Rate: {shopping_rate}</p>
                    <div className="card-actions justify-start rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default VendorCard