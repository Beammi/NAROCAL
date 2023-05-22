import Button from "../Button";
import { useRef } from 'react'

function EventsSearch(props) {

    const brandInputRef = useRef();
    const categoryInputRef = useRef();
    const priceSortInputRef = useRef();

    function submitHandler(event){
        event.preventDefault(); // don't want to reload our page

        const selectedBrand = brandInputRef.current.value;
        const selectedCategory = categoryInputRef.current.value;

        const selectedPriceSort = priceSortInputRef.current.value;

        props.onSearch(selectedBrand, selectedCategory, selectedPriceSort);

    }
    

    return  (
        <form className="flex justify-center mb-8" onSubmit={submitHandler}>
            <div className="flex justify-center mb-8">
                <div>
                    <label htmlFor='brand' className="mx-3">Brand</label>
                    <select id="brand" className="select select-bordered max-w-xs border-2 border-neutral-300" ref={brandInputRef}>
                        <option value="None">Choose brand</option>
                        <option value='Louis Vuitton'>Louis Vuitton</option>
                        <option value='Maison Margiela'>Maison Margiela</option>
                        <option value='Prada'>Prada</option>
                        <option value='Gucci'>Gucci</option>
                        <option value='Balenciaga'>Balenciaga</option>
                        <option value='Dolce & Gabbana'>Dolce & Gabbana</option>
                    </select>
                </div>

                <div>
                    <label htmlFor='category' className="mx-3">Category</label>
                    <select id="category" className="select select-bordered max-w-xs border-2 border-neutral-300" ref={categoryInputRef}>
                        <option value="None">Choose category</option>

                        { props.category && props.category.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}

                    </select>
                </div>

                <div>
                    <label htmlFor='sortPrice' className="mx-3">Sort price</label>
                    <select id="sortPrice" className="select select-bordered max-w-xs border-2 border-neutral-300" ref={priceSortInputRef}>
                        <option value="None">Not Selected</option>
                        <option value='LowToHigh'>LowToHigh</option>
                        <option value='HighToLow'>HighToLow</option>
                    </select>
                </div>

            </div>
            <Button>Show Result</Button>
        </ form>
    );
}

export default EventsSearch