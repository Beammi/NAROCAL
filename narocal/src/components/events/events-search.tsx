import Button from "../Button";
import { useRef } from 'react'

function EventsSearch(props) {

    const brandInputRef = useRef();

    function submitHandler(event){
        event.preventDefault(); // don't want to reload our page

        const selectedBrand = brandInputRef.current.value;

        props.onSearch(selectedBrand);

    }

    return  (
        <form className="flex justify-center mb-8" onSubmit={submitHandler}>
            <div className="flex">
                <div>
                    <label htmlFor='brand' className="mx-3">Brand</label>
                    <select id="brand" className="select select-bordered max-w-xs border-2 border-neutral-300" ref={brandInputRef}>
                        <option disabled selected>Choose brand</option>
                        <option value='Louis Vuitton'>Louis Vuitton</option>
                        <option value='Maison Margiela'>Maison Margiela</option>
                        <option value='Prada'>Prada</option>
                        <option value='Gucci'>Gucci</option>
                        <option value='Balenciaga'>Balenciaga</option>
                        <option value='Dolce & Gabbana'>Dolce & Gabbana</option>
                    </select>
                </div>

            </div>
            <Button>Search Filter</Button>
        </form>
    );
}

export default EventsSearch