import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomUser } from '../models';
import { RandomUserService } from '../random-user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBuilding, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  randomUsers: RandomUser[] | undefined;

  constructor(
    private router: Router,
    private randomUserService: RandomUserService
  ) {}
  isDisplayDiv: boolean = false;
  faPhone = faPhone;
  faBuilding = faBuilding;

  ngOnInit() {
    this.randomUserService
      .getAll()
      .subscribe((users) => (this.randomUsers = users));
  }

  onDetailClick(randomUser: RandomUser) {
    window.localStorage.setItem('randomUser', JSON.stringify(randomUser));
    this.router.navigate(['/details']);
  }
  mouseEnter(data: any) {
    this.isDisplayDiv = data;
  }

  mouseLeave(data: any) {
    this.isDisplayDiv = data;
  }
}
