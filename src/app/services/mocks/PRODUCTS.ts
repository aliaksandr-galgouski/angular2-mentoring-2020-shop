import { ProductModel, ProductCategory } from 'src/app/models';

export const DUMMY_PRODUCTS: Array<ProductModel> = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1.',
    category: [ProductCategory.First],
    price: 1,
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2.',
    category: [ProductCategory.First, ProductCategory.Second],
    price: 2,
    isAvailable: false,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3.',
    category: [ProductCategory.Second, ProductCategory.Thrid],
    price: 3,
    isAvailable: true,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description for Product 4.',
    category: [],
    price: 4,
    isAvailable: false,
  },
];
