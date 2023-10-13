import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  newItem: any = { name: '', description: '', price: null, category: 'All' };
  nameError: string = '';
  descriptionError: string = '';
  itemsPerPage: number = 5;
  currentPage: number = 1;
  totalItems: number = 0;
  searchText: string = '';
  filteredItemCount: number = 0;
  totalPages: number = 0; // New variable to store total pages

  constructor(private itemService: ItemService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.items = this.itemService.getItems();
    this.totalItems = this.items.length;
    this.paginate();
  }

  paginate() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.items = this.itemService.getItems().slice(startIndex, endIndex);
    this.updateFilteredItemCount();
    this.calculateTotalPages(); // Calculate total pages when paginating
  }

  updateFilteredItemCount() {
    this.filteredItemCount = this.itemService.getItems().filter((item) => {
      const categoryMatch = this.newItem.category === 'All' || item.category === this.newItem.category;
      const searchMatch =
        item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchText.toLowerCase());
      return categoryMatch && searchMatch;
    }).length;
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.paginate();
  }

  applyFilter() {
    this.currentPage = 1;
    this.loadItems();
  }

  addItem() {
    this.nameError = '';
    this.descriptionError = '';

    if (!this.newItem.name || this.newItem.name.trim() === '') {
      this.nameError = 'Name is required';
      return;
    }

    if (!this.newItem.description || this.newItem.description.trim() === '') {
      this.descriptionError = 'Description is required';
      return;
    }

    if (this.newItem.name && this.newItem.description && this.newItem.price && this.newItem.category) {
      this.itemService.addItem(this.newItem);
      this.newItem = { name: '', description: '', price: null, category: 'All' };
      this.loadItems();
    }
  }

  openConfirmationDialog(item: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.removeItem(item);
      }
    });
  }

  removeItem(item: any): void {
    this.items = this.items.filter((i) => i !== item);
    this.itemService.removeItem(item);
  }

  onRateChange(item: any, newRating: number) {
    item.rating = newRating;
    this.calculateAverageRating(item);
  }

  calculateAverageRating(item: any) {
    const ratings = this.items.filter((i) => i.name === item.name).map((i) => i.rating);
    const total = ratings.reduce((acc, rating) => acc + rating, 0);
    item.averageRating = total / ratings.length;
  }

  // New method to calculate total pages
  calculateTotalPages() {
    return Math.ceil(this.filteredItemCount / this.itemsPerPage);
  }
}
