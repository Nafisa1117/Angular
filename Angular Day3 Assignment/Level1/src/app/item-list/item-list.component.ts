// item-list.component.ts
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items: any[] = [];
  selectedCategory: string = '';
  searchTerm: string = '';
  filteredItems: any[] = []; // Initialize it here

  constructor() {
    // Exercise 2: Populating Items
    this.items = [
      {
        name: 'Product 1',
        description: 'This is the description of Product 1.',
        price: 99.99,
        category: 'Electronics'
      },
      {
        name: 'Product 2',
        description: 'Description for Product 2 goes here.',
        price: 49.99,
        category: 'Clothing'
      },
      {
        name: 'Product 3',
        description: 'Product 3 is an amazing item.',
        price: 149.99,
        category: 'Furniture'
      }
    ];

    // Initialize filteredItems
    this.filteredItems = this.items;
  }

  // Exercise 6: Add Item Categories
  get uniqueCategories(): string[] {
    return [...new Set(this.items.map(item => item.category))];
  }

  filterItemsByCategory() {
    this.filteredItems = this.selectedCategory
      ? this.items.filter(item => item.category === this.selectedCategory)
      : this.items;
    
    if (this.searchTerm) {
      this.filterItemsBySearch();
    }
  }

 // Exercise 7: Item Search
filterItemsBySearch() {
  this.filteredItems = this.selectedCategory
    ? this.items.filter(item => item.category === this.selectedCategory)
    : this.items;

  if (this.searchTerm) {
    this.filteredItems = this.filteredItems.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

}
