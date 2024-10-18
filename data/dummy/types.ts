export type PhysicalProperties = {
    length?: string;
    width?: string;
    height?: string;
    diameter?: string;
    dimensions?: string;
    thickness?: string;
    weight?: string;
    volume?: string;
    capacity?: string;
    viscosity?: string;
    color?: string;
    voltage?: string;
    power?: string;
    density?: string;
    rotorDiameter? : string;
  };
  
  export type ChemicalProperties = {
    zincCoating?: string;
    pH?: number;
    carbonContent?: string;
    [key: string]: string | number | undefined; // Allows flexibility for other properties
  };
  
  export type Review = {
    reviewerName: string;
    date: string;  // ISO format "YYYY-MM-DD"
    starRating: number;  // Between 1 to 5
    review: string;
  };
  
  export type Discount = {
    percentage: number;
    validTill: string;  // ISO format "YYYY-MM-DD"
  };
  
  export type Seller = {
    name: string;
    contactInfo: string;
    phone: string;
    address: string;
  };
  
  export type Product = {
    productType: string;
    productId: string;  // Unique alphanumeric ID
    productName: string;
    productIdentification: string;
  
    physicalProperties?: PhysicalProperties;  // Optional
    chemicalProperties?: ChemicalProperties;  // Optional
    purityComposition?: string;
  
    currentQuantity: number;
    unit: string;
    price: number;
    currency: string;
  
    seller: Seller;
    rating: number;  // Average rating (1 to 5)
    reviews: Review[];
  
    category: string;
    subCategory: string;
  
    minimumOrderQuantity: number;
    availabilityStatus: "In Stock" | "Out of Stock";
    location: string;
    deliveryTime: string;
  
    discount?: Discount;  // Optional
    images?: string[];  // Optional array of URLs
  
    manufactureDate?: string;  // ISO format "YYYY-MM-DD", Optional
    expiryDate?: string | null;  // Optional
  
    shippingCost?: number;  // Optional
  };
  