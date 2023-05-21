const VENDORS = [
    {id: "1", name: "Chris Evan", language: ["English ","Spanish "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "300 Baht", image:"images/profile_pic_temp.png" },
    {id: "2", name: "Yoko Ano", language: ["English ","Japanese "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "350 Baht", image:"images/profile_pic_temp.png"},
    {id: "3", name: "Yoshida", language: ["English ","Japanese "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "200 Baht", image:"images/profile_pic_temp.png"},
    {id: "4", name: "Miyawaki Sakura", language: ["English ","Japanese "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "250 Baht", image:"images/profile_pic_temp.png"},
    {id: "5", name: "John Doe", language: ["English ","Chinese "], exchange_rate: "1 Yuan = 0.55 Baht", shopping_rate: "250 Baht", image:"images/profile_pic_temp.png"}
]

const PRODUCTS = [
    {brand:'Louis Vuitton', body:'Monogram Bandana shirt'},
    {brand: 'Balenciaga', body:'logo-print zip-up jacket'},
    {brand:'Dolce & Gabbana', body:'Printed cotton V-neck T-shirt'},
    {brand:'Saint Laurent', body:'pointed collar Western denim shirt'},
    {brand:'Gucci', body:'Striped cotton shirt with embroidery'},
    {brand:'Prada', body:'Double Match cotton shirt'},
    {brand:'Maison Margiela', body:'double-breasted tailored coat'},
    {brand: 'Saint Laurent', body: 'side-stripe tapered trousers'},

    {brand: 'Louis Vuitton', body: '2006 Florin bi-fold wallet'},
    {brand: 'Louis Vuitton', body: '1994 Keepall 60 travel bag'},
    {brand: 'Louis Vuitton', body: 'Vinyl Keepall travel bag'},
    {brand:'Maison Margiela', body:'Replica By the Fireplace'},
    {brand:'Prada', body:'Luna Rossa Ocean Eau de Toilette'},
    {brand:'Gucci', body:'Guilty Eau de Parfum Pour Homme'}
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
  const { brand } = productFilter; // prototype for brand only ***
  console.log("B: ", brand);


  let filteredProducts = PRODUCTS.filter((product) => {
    const prodTitle = product.brand;
    return brand === prodTitle;
  });

  return filteredProducts;
}

export function getProductByBrand(brand) {
  return PRODUCTS.find((product) => product.brand === brand);
}

