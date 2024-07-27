import { DataSource} from '@angular/cdk/collections';
import { Products } from '../../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourceProduct extends DataSource<Products>{

    data = new BehaviorSubject<Products[]>([])
    originalData: Products[] = []

    connect() : Observable<Products[]> {
        return this.data
    }

    init(products: Products[]) {
        this.originalData = products;
        this.data.next(products);
    }

    getTotal(){
        const product = this.data.getValue();
        return product
            .map(item => item.price)
            .reduce((price, total) => price + total, 0);
    }

    update(id: Products['id'], change: Partial<Products>){
        const products = this.data.getValue();
        const productIndex = products.findIndex(item => item.id === id); 
        if(productIndex !== -1){
            products[productIndex] = {
                ...products[productIndex],
                ...change,
            }
            this.data.next(products);
        }
    }

    find(query: string) {
        const newProducts = this.originalData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
        this.data.next(newProducts);
    }

    disconnect() {}
}