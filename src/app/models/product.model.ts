export interface ProductModel{
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
    status: boolean;
    categoryId: string;
}

export interface CartModel{
    id: string;
    userId: string;
    total: number;
    createdAt: Date;
    productList: string[];
}
