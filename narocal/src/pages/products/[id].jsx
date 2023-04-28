import { useRouter } from "next/router";
import Image from "next/image"
import InitialNavbar from '@/components/InitialNavbar'
import BlackShirt from "../assets/black-shirt.jpg"
import DropDown from '@/components/DropDown'

export default function ProductPage(){
    const router = useRouter();
    let picSize = 700;

    return(
        <>
            <div>
                <InitialNavbar></InitialNavbar>
                <div className="flex flex-row justify-center pt-40">
                    <Image className="mx-14" src={BlackShirt} alt="product pic temp" width={450} height={640}/>
                    <div className="flex flex-col">
                        <p className="text-xl font-bold">Saint Laurent</p>
                        <p className="text-lg">pointed collar Western denim shirt</p>
                        <p className="text-2xl py-10">14,000฿</p>
                        <select className="select w-full max-w-xs">
                            <option disabled selected>Select size</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>

                        <button className="btn btn-primary mt-10">CHAT</button>
                        

                    </div>

                </div>

            </div>
        </>
    );
}