import { Component, OnInit } from '@angular/core';
import { RandomUser } from '../models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  randomUser!: RandomUser;
  constructor() {}

  ngOnInit() {
    this.randomUser = JSON.parse(
      window.localStorage.getItem('randomUser') || '{}'
    );
  }
}
