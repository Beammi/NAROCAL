import { useRouter } from "next/router";
import Image from "next/image"
import InitialNavbar from '@/components/InitialNavbar'
import BlackShirt from "../assets/black-shirt.jpg"
import DropDown from '@/components/DropDown'
import ProductCard from '@/components/ProductCard'
import {getProductByID} from "../../../dummy-data"

export default function ProductPage(){
    const router = useRouter();
    let picSize = 700;

    const prod = getProductByID({id: router.query.id});

    return(
        <>
            <div>
                <InitialNavbar></InitialNavbar>
                <div className="flex flex-col justify-center gap-10">
                    <div className="flex flex-row justify-center pt-40">
                        <Image className="mx-14" src={BlackShirt} alt="product pic temp" width={450} height={640}/>
                        <div className="flex flex-col w-2/5">
                            <p className="text-xl font-bold">{prod?.brand}</p>
                            <p className="text-lg">{prod?.model}</p>
                            <p className="text-2xl py-10">{prod?.price}</p>
                            <select className="select w-full max-w-xs">
                                <option disabled selected>Select size</option>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>

                            <button className="btn btn-primary my-10 w-40">CHAT</button>

                            <div className="flex flex-col gap-2">
                                <div className="underline underline-offset-4 decoration-2">
                                    Description
                                </div>
                                <div>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure magnam libero quibusdam ipsa adipisci ullam, quia facere dignissimos ex temporibus deleniti molestias quidem ipsam, maxime voluptas atque maiores numquam repellat?
                                </div>
                            </div>
                            

                        </div>

                    </div>

                    <div className="flex flex-col gap-2 justify-center">
                        <div className="divider text-center underline underline-offset-4 decoration-2">
                            Recommend Items
                        </div>
                        <div className="flex flex-row gap-5 w-full justify-center">
                            <ProductCard title='Prada' body='Double Match cotton shirt'></ProductCard>
                            <ProductCard title='Louis Vuitton' body='Monogram Bandana shirt'></ProductCard>
                            <ProductCard title='Balenciaga' body='logo-print zip-up jacket'></ProductCard>
                            <ProductCard title='Maison Margiela' body='double-breasted tailored coat'></ProductCard>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}