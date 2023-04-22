import Image from "next/image"
import P from "../components/text/P"
import React from "react"
import { useState } from "react"
import BlueHoodie from "../pages/assets/blue-hoodie.jpg"
import PurpleShirt from "../pages/assets/purple-shirt.jpg"
import RedChair from "../pages/assets/red-chair.jpg"


interface Hero {
  pic1?: string
  pic2?: string
  pic3?: string
  pic4?: string
  pic5?: string
}

const Hero: React.FunctionComponent<Hero> = ({
  pic1,
  pic2,
  pic3,
  pic4,
  pic5
}) => {
    let picSize = 300

    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <Image className="w-full mx-14" src={RedChair} alt="product pic temp" width={picSize} height={picSize} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-black">❮</a> 
                    <a href="#slide2" className="btn btn-circle bg-black">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <Image className="w-full mx-14" src={RedChair} alt="product pic temp" width={picSize} height={picSize}/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-black">❮</a> 
                    <a href="#slide2" className="btn btn-circle bg-black">❯</a>
                </div>
            </div> 
            
        </div>
    )
}

export default Hero