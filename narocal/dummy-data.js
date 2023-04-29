const VENDORS = [
    {id: "1", name: "Chris Evan", language: ["English ","Spanish "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "300 Baht", image:"images/profile_pic_temp.png" },
    {id: "2", name: "Yoko Ano", language: ["English ","Japanese "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "350 Baht", image:"images/profile_pic_temp.png"},
    {id: "3", name: "Yoshida", language: ["English ","Japanese "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "200 Baht", image:"images/profile_pic_temp.png"},
    {id: "4", name: "Miyawaki Sakura", language: ["English ","Japanese "], exchange_rate: "1 pound = 40 Baht", shopping_rate: "250 Baht", image:"images/profile_pic_temp.png"},
    {id: "5", name: "John Doe", language: ["English ","Chinese "], exchange_rate: "1 Yuan = 0.55 Baht", shopping_rate: "250 Baht", image:"images/profile_pic_temp.png"}
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