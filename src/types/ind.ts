export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    slug: string;
    description: string;
    [key: string]: any; // Cho phép thêm thuộc tính khác
  }