import { ProductCategory } from './product-category.enum';

export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public description: string = null,
    public category: Array<ProductCategory> = [],
    public price: number,
    public isAvailable: boolean
  ) {}
}
