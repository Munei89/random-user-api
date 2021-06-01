import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomUser } from './models/RandomUser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  static readonly API_URL = 'https://randomuser.me/api/?results=5&nat=us';

  getAll(): Observable<RandomUser[]> {
    const rsp = this.http.get(RandomUserService.API_URL);
    return rsp.pipe(
      map((data: any) => {
        const users = [];
        for (const userInfo of data.results) {
          users.push(this.createRandomUser(userInfo));
        }
        return users;
      })
    );
  }

  createRandomUser(userInfo: any): RandomUser {
    const firstName = userInfo.name.first;
    const lastName = userInfo.name.last;
    const name = `${firstName} ${lastName}`;

    const email = userInfo.email;

    const location = userInfo.location;
    const address = `${location.street.name}, ${location.street.number}`;
    const city = `${location.city}, ${location.state}, ${location.country}`;

    const photoUrl = userInfo.picture.medium;
    const telephone = userInfo.phone;
    const dateOfBirth = new Date(userInfo.dob.date);

    return new RandomUser(
      photoUrl,
      name,
      email,
      address,
      city,
      telephone,
      dateOfBirth
    );
  }
}
