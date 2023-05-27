import { supabase } from "lib/supabaseClient"

export async function getFilteredProducts(productFilter) {
    const { brand, model, category, subCategory, country, color, gender, price, searchKeywords } = productFilter; // prototype for brand only ***
    
    const {data, error} = await supabase
        .from('Product')
        .select()
    
    const PRODUCTS = data

    const searchKeywordsArray = searchKeywords?.toLowerCase().split(" ");

    let filteredProducts = PRODUCTS.filter((product) => {
        return (brand == "None" || brand === product.brand) 
        && ( category == "None" || category === product.category || (Array.isArray(category) && category.includes(product.category)))
        && ( subCategory == "None" || subCategory === product.subCategory)
        // && ( color == "None" || color === product.color)
        // && ( gender == "None" || gender === product.gender)
        && (price === "LowToHigh" || price === "None" || (price === "HighToLow" && product.price >= 0))
        
        && (searchKeywords == "None" || (searchKeywordsArray.every((keyword) =>
            product.brand.toLowerCase().includes(keyword) ||
            product.model.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword) ||
            product.subCategory.toLowerCase().includes(keyword) 
        ) || searchKeywordsArray.every((keyword) =>
            // product.category.toLowerCase().includes(keyword) ||
            // product.subCategory.toLowerCase().includes(keyword) ||
            (product.color && product.color.toLowerCase().includes(keyword))
        )));
    });

    if (price === "LowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (price === "HighToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // console.log("back: ", filteredProducts.length);
    
    return filteredProducts;
    
}

export async function searchProducts(productFilter) {
    const { searchKeywords } = productFilter;

    const searchKeywordsArray = searchKeywords.toLowerCase().split(" ");
    console.log("S: ", searchKeywordsArray);

    const {data, error} = await supabase
        .from('Product')
        .select()
    
    const PRODUCTS = data
  

    // correct but I input wrong it give answer
    let filteredSearchProducts = PRODUCTS.filter((product) => {
        return searchKeywordsArray.every((keyword) =>
        product.brand.toLowerCase().includes(keyword) ||
        product.model.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword) ||
        product.subCategory.toLowerCase().includes(keyword) 
        ) || searchKeywordsArray.every((keyword) =>
        // product.category.toLowerCase().includes(keyword) ||
        // product.subCategory.toLowerCase().includes(keyword) ||
        (product.color && product.color.toLowerCase().includes(keyword))
        );
    });

    return filteredSearchProducts;
}