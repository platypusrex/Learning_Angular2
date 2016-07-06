import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {IProduct} from './product';


@Injectable()

export class ProductService {
    private _productUrl = 'api/products/products.json';
    constructor(private _http: Http) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((res: Response) => <IProduct[]>res.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    private handleError(error: response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}