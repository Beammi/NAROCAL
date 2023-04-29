import { useRouter } from "next/router"

export default function VendorFilter(){
    const router = useRouter();
    console.log(router.query.slug)
    return(
        <div>

        </div>
    )
}