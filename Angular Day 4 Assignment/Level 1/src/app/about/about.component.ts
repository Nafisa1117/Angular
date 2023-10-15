import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  isAdmin: boolean=false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const type = params['type'];

      if (type === 'admin') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });
  }
}
