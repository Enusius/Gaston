import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly users: AngularFireList<any>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  public getAll() {
    return this.users.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => ({key: a.key, ...a.payload.val()}))
      )
    );
  }

  add(user: any) {
    this.users.push(user);
  }

  getUser(id: string): Observable<any> {
    return this.database.object('users/' + id).valueChanges();
  }
}
