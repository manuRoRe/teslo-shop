import type { Product } from "./product.interface";

export interface ProductsResponse {
  count: number;
  pages: number;
  products: Product[];
}

/* 

export enum Tag {
    Jacket = "jacket",
    Shirt = "shirt",
}

export enum Email {
    Test1GoogleCOM = "test1@google.com",
}

export enum FullName {
    TestOne = "Test One",
}

export enum Role {
    Admin = "admin",
}
 */
