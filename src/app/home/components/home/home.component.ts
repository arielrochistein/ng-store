import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProducts$()
      .pipe()
      .subscribe((data) => {
        console.log('all products', data);
        this.products = data;
      });
    this.productService.fetchProducts();
  }

  ngOnDestroy(): void {}

  /*
  1. add input to app-card component
  2. inside app card display all product fields
  */
}
