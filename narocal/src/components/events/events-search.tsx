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
        <form className="md:flex md:justify-center sm:flex-col md:flex-row" onSubmit={submitHandler}>
            <div className="md:flex md:justify-center sm:mb-6">
        {/* // <form className="grid grid-cols-2" onSubmit={submitHandler}>
        //     <div className="grid grid-rows-1"> */}
        {/* // <form className="flex sm:flex-col sm:w-10/12 md:flex-row md:justify-center md:mb-8" onSubmit={submitHandler}>
        //     <div className="flex sm:flex-col sm:w-10/12 md:flex-row md:justify-center md:mb-8 md:pl-14 md:w-max"> */}

                { (props.brand) && <div>
                    <label htmlFor='brand' className="mx-3">Brand</label>
                    <select id="brand" className="select select-bordered max-w-xs border-2 border-neutral-300" ref={brandInputRef}>
                        <option value="None">Choose brand</option>

                        { props.brand.map((brand, index) => (
                            <option key={index} value={brand}>{brand}</option>
                        ))}             

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