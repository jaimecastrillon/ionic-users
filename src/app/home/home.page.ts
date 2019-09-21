import { Component, OnInit } from '@angular/core';
import { UsersService } from '../api/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  users: any = [];
  hasError = false;
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => {
      this.hasError = false;
      this.users = users;
    }, error => {
      this.hasError = true;
    });
  }


}
