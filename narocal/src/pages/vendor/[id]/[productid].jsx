import { useRouter } from "next/router";

export default function ProductsOfVendor(){
    const router = useRouter();
    return(
        <div>
            <h1>Products that vendor has</h1>
        </div>
    );
}