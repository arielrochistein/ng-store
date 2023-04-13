import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  public id: number = 0;
  public product: IProduct = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.sub.add(
      this.activatedRoute.params.subscribe((data) => {
        this.id = data['id'];
        console.log(this.id);

        this.product = this.productService.getProductById(this.id);
        console.log(this.product);
        // this.productService
        //   .getSingleProductById$(data['id'])
        //   .subscribe((data) => {
        //     console.log('product', data);
        //   });
      })
    );
  }

  ngOnDestroy() {
    console.log("I'm Destroyed!!!!");
    this.sub.unsubscribe();
  }
}
