import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  newItemName: string;
  newItemDescription: string;
  newItemPrice: number;
  formSubmitted: boolean = false;

    items: any[] = [];

  constructor() {
    // Assign initial values in the constructor
    this.newItemName = '';
    this.newItemDescription = '';
    this.newItemPrice = 0;
  }

  addItem() {
    // Capture the input values
    const itemName = this.newItemName;
    const itemDescription = this.newItemDescription;
    const itemPrice = this.newItemPrice;

  // Description validation
  if (itemDescription.length > 200) {
    // Handle description validation error
    console.log('Description should not exceed 200 characters.');
    this.formSubmitted = true; // Set a flag to display error messages
    return;
  }

  // Price validation
  if (itemPrice < 0 || itemPrice > 1000) {
    // Handle price validation error
    console.log('Price should be between 0 and 1000.');
    this.formSubmitted = true; // Set a flag to display error messages
    return;
  }

  // Add the item to the list if validation passes
  this.items.push({
    name: itemName,
    description: itemDescription,
    price: itemPrice
  });

    // Clear the input fields after adding the item
    this.newItemName = '';
    this.newItemDescription = '';
    this.newItemPrice = 0;

     // Reset the formSubmitted flag
    this.formSubmitted = false;

    // Optionally, you can also log the array to the console to see the items added.
    console.log('Items:', this.items);
  }
}
