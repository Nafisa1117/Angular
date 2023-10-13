import { TestBed } from '@angular/core/testing';
import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an item to the list', () => {
    const item = { name: 'Test Item', description: 'Test Description', price: 99.99, category: 'Test' };
    service.addItem(item);
    const items = service.getItems();
    expect(items).toContain(item);
  });

  it('should remove an item from the list', () => {
    const item = { name: 'Test Item', description: 'Test Description', price: 99.99, category: 'Test' };
    service.addItem(item);
    service.removeItem(item);
    const items = service.getItems();
    expect(items).not.toContain(item);
  });
});
