import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
homeval: string;
  public imagesUrl;
  ngOnInit() {
    this.imagesUrl = [
      'Image1.jpg',
      'Image2.jpg',
      'Image3.jpg',
      'Image4.jpg',
      'Image5.jpg',
      'Image6.jpg',
      'Image7.jpg',
      ];

      this.homeval= this.route.snapshot.params['obj'];
  }

}
