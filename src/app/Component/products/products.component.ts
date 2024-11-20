import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Products } from '../../Modules/Products';
import { Store } from '@ngrx/store';
import { selectProductsByCategory } from '../../Store/e-productandbill/product.selector';
import { addToCart, removeFromCart } from '../../Store/e-productandbill/products.action';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  categories = ['Men\'s Wear', 'Kids', 'Girls', 'Groceries', 'Electronics'];
  productsByCategory: { [key: string]: Observable<Products[]> } = {};

  constructor(private store: Store) {
    this.categories.forEach((category) => {
      this.productsByCategory[category] = this.store.select(selectProductsByCategory(category));
    });
  }

  addProductToCart(product: Products) {
    this.store.dispatch(addToCart({ product }));
  }

  removeProductFromCart(product: Products) {
    this.store.dispatch(removeFromCart({ productId: product.id }));
  }

}
