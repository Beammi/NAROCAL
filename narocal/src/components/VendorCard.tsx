import Image from "next/image"
import P from "../components/text/P"

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
            <div className="card lg:card-side shadow-xl w-5/6 rounded-xl bg-background my-4 ml-16">
                <figure><img src={image} alt="Album"/></figure>
                <div className="card-body bg-background rounded-xl">
                    <h2 className="card-title">{name}</h2>
                    <p>Languages: {language}</p>
                    <p>Exchange Rate: {exchange_rate}</p>
                    <p>Shopping Rate: {shopping_rate}</p>
                    <div className="card-actions justify-start rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default VendorCard