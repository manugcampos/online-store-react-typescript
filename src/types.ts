export interface Rating {
    rate: number;
    count: number;
  }
  
  export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity?: number;
    rating: Rating;  // Added rating property
  }
  