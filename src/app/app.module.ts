import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { UserService } from './user.service';
import { ShowuserComponent } from './showuser/showuser.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowuserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),HttpClient,User
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
