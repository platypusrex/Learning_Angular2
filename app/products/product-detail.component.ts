import {Component} from '@angular/core';
import {Router, OnActivate, RouteSegment} from '@angular/router';

import {IProduct} from './product';
import {ProductService} from './product.service';
import {StarComponent} from '../shared/star.component';

@Component({
    templateUrl: 'app/products/product-detail.component.html',
    directives: [StarComponent]

})

export class ProductDetailComponent implements OnActivate {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private productService: ProductService, private router: Router){}

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        this.getProduct(id);
    }

    getProduct(id: number) {
        this.productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error
        )
    }
}