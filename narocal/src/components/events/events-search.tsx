import Button from "../Button";
import { useEffect, useRef, useState } from 'react'
import { supabase } from "lib/supabaseClient"

export default function EventsSearch(props) {

    // const {brand} = props;

    const brandInputRef = useRef();
    const categoryInputRef = useRef();
    const priceSortInputRef = useRef();

    function submitHandler(event){
        event.preventDefault(); // don't want to reload our page

        let selectedBrand = brandInputRef.current?.value;

        let selectedCategory = categoryInputRef.current?.value;

        let selectedPriceSort = priceSortInputRef.current?.value;

        if(selectedBrand === undefined){
            selectedBrand = "None"
        }
        if(selectedCategory === undefined){
            selectedCategory = "None"
        }
        if(selectedPriceSort === undefined){
            selectedPriceSort = "None"
        }

        props.onFilter(selectedBrand, selectedCategory, selectedPriceSort);

        
    }
    
    

    return  (
        <form className="flex justify-center mb-8" onSubmit={submitHandler}>
            <div className="flex justify-center mb-8">
                {/* <div>
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
                </div> */}

                { (props.brand) && <div>
                    <label htmlFor='brand' className="mx-3">Brand</label>
                    <select id="brand" className="select select-bordered max-w-xs border-2 border-neutral-300" ref={brandInputRef}>
                        <option value="None">Choose brand</option>

                        { props.brand.map((brand, index) => (
                            <option key={index} value={brand}>{brand}</option>
                        ))}

                        {/* {(props.brand instanceof Array) && props.brand.map((brand, index) => (
                            <option key={index} value={brand}>{brand}</option>
                        ))} */}

                        {/* {
                            props.brand.then(product => {
                                return product.map((brand, index) => (
                                    <option key={index} value={brand}>{brand}</option>
                                ))
                            })
                        } */}

                        {/* { props.brand instanceof Promise ? (
                            props.brand.then((product) => {
                                return product.map((brand, index) => (
                                    <option key={index} value={brand}>{brand}</option>
                                ));
                            })
                        ) : (
                            props.brand.map((brand, index) => (
                                <option key={index} value={brand}>{brand}</option>
                            ))
                        )} */}
                    

                    </select>
                </div>}

                { (props.category) && <div>
                    <label htmlFor='category' className="mx-3">Category</label>
                    <select id="category" className="select select-bordered max-w-xs border-2 border-neutral-300" ref={categoryInputRef}>
                        <option value="None">Choose category</option>

                        { props.category.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}

                    </select>
                </div>}

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