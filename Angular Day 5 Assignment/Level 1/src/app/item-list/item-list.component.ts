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

    // Input validation
    if (!itemName || !itemDescription || isNaN(itemPrice) || itemPrice <= 0) {
      // Handle validation errors
      console.log('Validation failed. Please check your input.');
      this.formSubmitted = true; // Set a flag to display error messages
      return;
    }

        // If validation passes, add the item to the array
        this.items.push({
          name: itemName,
          description: itemDescription,
          price: itemPrice
        });

    // Clear the input fields after adding the item
    this.newItemName = '';
    this.newItemDescription = '';
    this.newItemPrice = 0;

    // Optionally, you can also log the array to the console to see the items added.
    console.log('Items:', this.items);
  }
}
