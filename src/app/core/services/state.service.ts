import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  dev: Subject<Boolean> = new Subject();

  constructor() {
    this.setDev();
  }

  setDev() {
    this.dev.next(!environment.production);
  }

  getDev(){
    return this.dev.asObservable();
  }




}
