import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: any[] = [
    {
      name: 'Laptop',
      description: 'Powerful laptop for work and play',
      price: 999.99,
      category: 'Electronics',
      rating: 4,
      averageRating: 4.0,
    },
    {
      name: 'T-shirt',
      description: 'Comfortable cotton t-shirt',
      price: 19.99,
      category: 'Clothing',
      rating: 3,
      averageRating: 3.0,
    },
    {
      name: 'Sofa',
      description: 'Elegant leather sofa',
      price: 599.99,
      category: 'Furniture',
      rating: 5,
      averageRating: 5.0,
    },
    {
      name: 'Smartphone',
      description: 'High-end smartphone with a great camera',
      price: 799.99,
      category: 'Electronics',
      rating: 4,
      averageRating: 4.0,
    },
    {
      name: 'Dress',
      description: 'Stylish evening dress',
      price: 49.99,
      category: 'Clothing',
      rating: 3,
      averageRating: 3.0,
    },
    {
      name: 'Coffee Table',
      description: 'Modern coffee table for your living room',
      price: 149.99,
      category: 'Furniture',
      rating: 4,
      averageRating: 4.0,
    },
  ];

  constructor() {}

  getItems() {
    return this.items;
  }

  addItem(item: any) {
    this.items.push(item);
  }

  removeItem(item: any) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
