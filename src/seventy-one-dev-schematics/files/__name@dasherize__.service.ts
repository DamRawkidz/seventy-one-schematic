import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base-service';


@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service {

  constructor(
    public http: HttpClient
  ) {
    super('',http)
   }
}
