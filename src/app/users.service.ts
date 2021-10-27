import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsersList() {
    return this.http.get('https://fakestoreapi.com/users', {
      params: {
        limit: '5',
      },
    });
  }


  getSingleUser(userId) {
    return this.http.get(`https://fakestoreapi.com/users/${userId}`);
  }

    setUserList(body) {
    return this.http.post('https://fakestoreapi.com/users', body);
  }
}

