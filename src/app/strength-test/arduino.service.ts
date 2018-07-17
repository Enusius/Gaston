import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import * as socketIo from 'socket.io-client/dist/socket.io.slim.js';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {

  private socket;

  constructor() { }

  public initSocket(): void {
    this.socket = socketIo('localhost:3000');
  }

  public onMessage(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('arduino', (data: string) => observer.next(data));
    });
  }
}
