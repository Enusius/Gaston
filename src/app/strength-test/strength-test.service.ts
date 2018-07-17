import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StrengthTestService {


  constructor(private database: AngularFireDatabase) {
  }

  add(userId: string, strengthTest: any) {
    this.database.list('users/' + userId + '/strength-tests').push(strengthTest);
  }

  getByUserId(userId: string) {
    return this.database.list('users/' + userId + '/strength-tests').valueChanges();
  }
}
