import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  newItem: string = '';
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  editingIndex: number = -1;

  addItem() {
    if (this.newItem) {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  editItem(index: number) {
    this.editingIndex = index;
  }

  saveItem(index: number) {
    this.editingIndex = -1; // Exit edit mode
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}

