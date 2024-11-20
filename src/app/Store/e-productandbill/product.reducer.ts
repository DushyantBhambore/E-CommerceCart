import { createReducer, on } from "@ngrx/store";
import { Products } from "../../Modules/Products";
import { loadProducts } from "./products.action";
import { state } from "@angular/animations";


export const initialState:Products[] = []

export const productreducer = createReducer(
    initialState,
    on(loadProducts,(state)=>[
    { id: 1, name: 'T-shirt', price: 500, category: 'Mens Wear', quantity: 1 },
    { id: 2, name: 'Jeans', price: 1200, category: 'Mens Wear', quantity: 1 },
    { id: 3, name: 'Doll', price: 400, category: 'Kids', quantity: 1 },
    { id: 4, name: 'Laptop', price: 55000, category: 'Electronics', quantity: 1 },
    { id: 5, name: 'Rice', price: 50, category: 'Groceries', quantity: 1 },
    ]
)
);