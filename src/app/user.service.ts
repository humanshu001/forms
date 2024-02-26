import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private usersSubject = new BehaviorSubject<any[]>([]);
    users = this.usersSubject.asObservable();
    
    constructor(private http: HttpClient) { }
    userDataUrl = 'http://127.0.0.1:8000/users/';



    getAllUsers():Observable<User[]> {
        return this.http.get<User[]>(this.userDataUrl);
    }

   
    postUser(user: User) {
        return this.http.post(this.userDataUrl, JSON.stringify(user));
    }

    deleteUser(id: number) {
        return this.http.delete(this.userDataUrl + id + '/');
    }

    updateUser(user: User) {
        return this.http.put(this.userDataUrl + user.id + '/', JSON.stringify(user));
    }

    getUserById(id: number) {
        return this.http.get(this.userDataUrl + id + '/');
    }
}