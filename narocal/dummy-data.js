const VENDORS = [
    {id: "1", name: "Chris Evan", language: ["English ","Spanish "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "300 Baht", image:"images/profile_pic_temp.png" },
    {id: "2", name: "Yoko Ano", language: ["English ","Japanese "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "350 Baht", image:"images/profile_pic_temp.png"},
    {id: "3", name: "Yoshida", language: ["English ","Japanese "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "200 Baht", image:"images/profile_pic_temp.png"},
    {id: "4", name: "Miyawaki Sakura", language: ["English ","Japanese "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "250 Baht", image:"images/profile_pic_temp.png"},
    {id: "5", name: "John Doe", language: ["English ","Chinese "], exchange_rate: "1 Yuan = 0.55 Baht", shopping_rate: "250 Baht", image:"images/profile_pic_temp.png"}
]

export const PRODUCTS = [
    // {brand:'Louis Vuitton', model:'Monogram Bandana shirt'},
    // {brand: 'Balenciaga', model:'logo-print zip-up jacket'},
    // {brand:'Dolce & Gabbana', model:'Printed cotton V-neck T-shirt'},
    // {brand:'Saint Laurent', model:'pointed collar Western denim shirt'},
    // {brand:'Gucci', model:'Striped cotton shirt with embroidery'},
    // {brand:'Prada', model:'Double Match cotton shirt'},
    // {brand:'Maison Margiela', model:'double-breasted tailored coat'},
    // {brand: 'Saint Laurent', model: 'side-stripe tapered trousers'},

    // {brand: 'Louis Vuitton', model: '2006 Florin bi-fold wallet'},
    // {brand: 'Louis Vuitton', model: '1994 Keepall 60 travel bag'},
    // {brand: 'Louis Vuitton', model: 'Vinyl Keepall travel bag'},
    // {brand:'Maison Margiela', model:'Replica By the Fireplace'},
    // {brand:'Prada', model:'Luna Rossa Ocean Eau de Toilette'},
    // {brand:'Gucci', model:'Guilty Eau de Parfum Pour Homme'},


    // NEW
    // id, brand, model, category, subCategory, country, color, gender
    // {id: "1", brand: "Burberry", model: "check-print silk shirt", category: "shirt", subCategory: "short sleeve", country: ["London", "Seoul"], color: "blue", gender: "men"},
  {
    id: "1",
    brand: "Balenciaga",
    model: "logo-print hoodie",
    category: "hoodie",
    subCategory: "long sleeve",
    country: "Spain",
    color: "gray",
    gender: "unisex",
    price: 39000
  },
  {
    id: "2",
    brand: "Chanel",
    model: "Coco Mademoiselle Eau de Parfum",
    category: "fragrance",
    subCategory: "eau de parfum",
    country: "France",
    gender: "women",
    price: 7500
  },
  {
    id: "3",
    brand: "Gucci",
    model: "floral-print silk dress",
    category: "dress",
    subCategory: "sleeveless",
    country: "France",
    color: "pink",
    gender: "women",
    price: 18000
  },
  {
    id: "4",
    brand: "Yves Saint Laurent",
    model: "Monogram Envelope Chain Wallet",
    category: "bags",
    subCategory: "wallet",
    country: "Paris",
    color: "black",
    gender: "women",
    price: 18000
  },
  {
    id: "5",
    brand: "Guerlain",
    model: "Shalimar Eau de Parfum",
    category: "fragrance",
    subCategory: "eau de parfum",
    country: "Paris",
    gender: "women",
    price: 7000
  },
  {
    id: "6",
    brand: "Fendi",
    model: "Peekaboo X-Lite Regular Bag",
    category: "bags",
    subCategory: "handbag",
    country: "Rome",
    color: "brown",
    gender: "women",
    price: 48000
  },
  {
    id: "7",
    brand: "Gucci",
    model: "GG Marmont Small Matelassé Shoulder Bag",
    category: "bags",
    subCategory: "shoulder bag",
    country: "Milan",
    color: "black",
    gender: "women",
    price: 74000
  },
  {
    id: "8",
    brand: "Chanel",
    model: "Classic Flap Bag",
    category: "bags",
    subCategory: "shoulder bag",
    country: "Paris",
    color: "beige",
    gender: "women",
    price: 69500
  },
  {
    id: "9",
    brand: "Burberry",
    model: "check-print silk scarf",
    category: "accessory",
    subCategory: "scarf",
    country: ["London"],
    color: "red",
    gender: "unisex",
    price: 18000
  },
  {
    id: "10",
    brand: "Gucci",
    model: "Dionysus Super Mini Bag",
    category: "bags",
    subCategory: "crossbody bag",
    country: ["Florence", "Milan"],
    color: "red",
    gender: "women",
    price: 18000
  },
  {
    id: "11",
    brand: "Fendi",
    model: "FF Logo Wool Sweater",
    category: "sweater",
    subCategory: "long sleeve",
    country: ["Rome"],
    color: "brown",
    gender: "unisex",
    price: 18000
  },
  {
    id: "12",
    brand: "Tom Ford",
    model: "Black Orchid Parfum",
    category: "fragrance",
    subCategory: "parfum",
    country: "New York",
    gender: "unisex",
    price: 11000
  },
  {
    id: "13",
    brand: "Prada",
    model: "Nylon Backpack",
    category: "bags",
    subCategory: "backpack",
    country: ["Milan"],
    color: "black",
    gender: "unisex",
    price: 20000
  },
  {
    id: "14",
    brand: "Hermes",
    model: "Birkin Bag",
    category: "bags",
    subCategory: "handbag",
    country: ["Paris", "Seoul"],
    color: "orange",
    gender: "women",
    price: 1200000
  },
  {
    id: "15",
    brand: "Yves Saint Laurent",
    model: "La Nuit de L'Homme Eau de Toilette",
    category: "fragrance",
    subCategory: "eau de toilette",
    country: ["Paris"],
    gender: "men",
    price: 6500
  },
  {
    id: "16",
    brand: "Gucci",
    model: "logo-print cotton shirt",
    category: "shirts",
    subCategory: "short sleeve",
    country: ["Florence", "Milan", "Seoul"],
    color: "white",
    gender: "unisex",
    price: 25000
  },
  {
    id: "17",
    brand: "Louis Vuitton",
    model: "Neverfull MM Monogram Tote Bag",
    category: "bags",
    subCategory: "tote bag",
    country: "Paris",
    color: "brown",
    gender: "women",
    price: 44000
  },
  {
    id: "18",
    brand: "Valentino",
    model: "lace-trimmed silk blouse",
    category: "blouse",
    subCategory: "short sleeve",
    country: ["Rome"],
    color: "ivory",
    gender: "women",
    price: 18000
  },
  {
    id: "19",
    brand: "Chloe",
    model: "Chloe Eau de Parfum",
    category: "fragrance",
    subCategory: "eau de parfum",
    country: ["Paris"],
    gender: "women",
    price: 4000
  },
  {
    id: "20",
    brand: "Louis Vuitton",
    model: "Keepall Bandoulière Monogram Duffle Bag",
    category: "bags",
    subCategory: "duffle bag",
    country: ["Paris"],
    color: "brown",
    gender: "unisex",
    price: 43000
  },
  {
    id: "21",
    brand: "Givenchy",
    model: "Antigona Small Leather Tote",
    category: "bags",
    subCategory: "tote bag",
    country: ["Paris"],
    color: "black",
    gender: "women",
    price: 18000
  },
  {
    id: "22",
    brand: "Versace",
    model: "Eros Eau de Toilette",
    category: "fragrance",
    subCategory: "eau de toilette",
    country: ["Milan", "Tokyo"],
    gender: "men",
    price: 5000
  },
  {
    id: "23",
    brand: "Prada",
    model: "Saffiano Leather Wallet",
    category: "bags",
    subCategory: "wallet",
    country: ["Milan"],
    color: "black",
    gender: "unisex",
    price: 8000
  },
  {
    id: "24",
    brand: "Burberry",
    model: "cashmere scarf",
    category: "accessory",
    subCategory: "scarf",
    country: ["London", "New York"],
    color: "camel",
    gender: "unisex",
    price: 18000
  },
  {
    id: "25",
    brand: "Guerlain",
    model: "Mon Guerlain Eau de Parfum",
    category: "fragrance",
    subCategory: "eau de parfum",
    country: ["Paris"],
    gender: "women",
    price: 6000
  },
  {
    id: "26",
    brand: "Balenciaga",
    model: "City Small Shoulder Bag",
    category: "bags",
    subCategory: "shoulder bag",
    country: ["Paris"],
    color: "gray",
    gender: "women"
  },
  {
    id: "27",
    brand: "Tom Ford",
    model: "Oud Wood Eau de Parfum",
    category: "fragrance",
    subCategory: "eau de parfum",
    country: ["New York"],
    gender: "unisex",
    price: 6000
  },
  {
    id: "28",
    brand: "Yves Saint Laurent",
    model: "Black Opium Eau de Parfum",
    category: "fragrance",
    subCategory: "eau de parfum",
    country: ["Paris"],
    gender: "women"
  },
  {
    id: "29",
    brand: "Gucci",
    model: "GG Supreme Canvas Belt Bag",
    category: "bags",
    subCategory: "belt bag",
    country: ["Florence", "Milan"],
    color: "beige",
    gender: "unisex"
  },
  {
    id: "30",
    brand: "Dior",
    model: "J'adore Eau de Parfum",
    category: "fragrance",
    subCategory: "eau de parfum",
    country: ["Paris"],
    gender: "women",
    price: 8000
  },

  {
    id: "31",
    brand: "Maison Margiela",
    model: "stripe-print long-sleeve shirt",
    category: "shirts",
    subCategory: "long sleeve",
    country: ["Seoul"],
    color: "beige",
    gender: "unisex",
    price: 17000
  },
  {
    id: "32",
    brand: "Tom Ford",
    model: "long-sleeved cotton shirt",
    category: "shirts",
    subCategory: "long sleeve",
    country: "Florence",
    color: "white",
    gender: "men",
    price: 18000
  },
  {
    id: "33",
    brand: "Saint Laurent",
    model: "silk tonal shirt",
    category: "shirts",
    subCategory: "long sleeve",
    country: ["Florence", "Milan"],
    color: "white",
    gender: "men",
    price: 22000
  },

  {
    id: "34",
    brand: "Burberry",
    model: "check-print silk shirt",
    category: "shirts",
    subCategory: "short sleeve",
    country: ["Florence", "Milan"],
    color: "blue",
    gender: "unisex"
  },

  {
    id: "35",
    brand: "Off-White",
    model: "embroidered-design short-sleeve shirt",
    category: "shirts",
    subCategory: "short sleeve",
    country: ["Florence", "Milan"],
    color: "beige",
    gender: "unisex"
  },

  {
    id: "36",
    brand: "Maison Margiela",
    model: "stripe-print long-sleeve shirt",
    category: "shirts",
    subCategory: "long sleeve",
    country: ["Florence", "Milan"],
    color: "beige",
    gender: "unisex"
  },


]

export function getAllVendors() {
    return VENDORS;
  }
  
export function getFilteredVendors(languageFilter) {
  const { language } = languageFilter;

  let filteredVendors = VENDORS.filter((vendor) => {
    const filteredVendors = vendor.language;
    return filteredVendors === language;
  });

  return filteredVendors;
}

export function getEventById(id) {
  return VENDORS.find((vendor) => vendor.id === id);
}

export function getFilteredProducts(productFilter) {
  const { brand, model, category, subCategory, country, color, gender, price, searchKeywords } = productFilter; // prototype for brand only ***

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


  return filteredProducts;
}

export function getProductByID(chosenId) {
  const { id } = chosenId
  return PRODUCTS.find((product) => id === product.id);
}

export function getProductByCategory(chosenCategory) {
  const { category } = chosenCategory
  return PRODUCTS.find((product) => product.category === category);
}

export function getProductBySubCategory(chosenSubCategory) {
  const { subCategory } = chosenSubCategory
  return PRODUCTS.find((product) => product.subCategory === subCategory);
}

export function searchProducts(productFilter) {
  const { searchKeywords } = productFilter;

  const searchKeywordsArray = searchKeywords.toLowerCase().split(" ");
  console.log("S: ", searchKeywordsArray);
  

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

