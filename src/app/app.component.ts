import { Component, Input, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { User } from './user';
import { UserService } from './user.service';
import { OnInit,OnChanges } from '@angular/core';
import { ShowuserComponent } from './showuser/showuser.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService]
})
export class AppComponent {
  title = 'forms';

  @ViewChild(ShowuserComponent) childComponent!: ShowuserComponent;

  constructor(private http: HttpClient, private userService: UserService) { }

  onSubmit(form: NgForm) {
    const user = form.value;
    this.userService.postUser(user).subscribe((response) => {
      console.log(response);
      this.refreshChild();
    });
  }

  refreshChild() {
    // Call a method on the child component to trigger a refresh
    if (this.childComponent) {
      this.childComponent.refreshUsers();
    }
  }
}