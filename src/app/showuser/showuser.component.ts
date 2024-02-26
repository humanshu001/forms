import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrl: './showuser.component.css'
})
export class ShowuserComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[] = [];

  ngOnInit() {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response as User[];
    });
  }
  ngOnChanges(changes: any) {
    // Handle changes to the input property
    if (changes.data) {
      this.refreshUsers();
    }
  }
  
  refreshUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response as User[];
    });
  }
  
  
  onDelete(id: number) {
    if(confirm("Are you sure to delete this user?")){
      this.userService.deleteUser(id).subscribe((response) => {
        console.log(response);
        this.refreshUsers();
      });
    }
  }
  
}
