import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dynamicContent: string='';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Use ActivatedRoute to retrieve route parameters
    this.route.params.subscribe((params) => {
      // Assuming the route parameter is named "content"
      this.dynamicContent = params['content'];
    });
  }
}
