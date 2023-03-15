import Image from "next/image"
import P from "../components/text/P"

interface ICard {
  image?: string | any
  imageAlt?: string
  title: string
  body: string
}

const Card: React.FunctionComponent<ICard> = ({
  image,
  imageAlt,
  title,
  body,
}) => {
  return (
    <>
      <div className="card card-compact bg-base-100 shadow-lg w-full">
        <div className="card-body bg-secondary">
            <h2 className="card-title">{title}</h2>
            <P text={body}></P>

        </div>

      </div>
    </>
  )
}

export default Card
