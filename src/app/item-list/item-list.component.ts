import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{

  items= ['Buy  groceries', 'Finish homework', 'Call mom'];

  constructor(){}

  ngOnInit():void{

  }
}
