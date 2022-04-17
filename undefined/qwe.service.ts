import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base-service';


@Injectable({
  providedIn: 'root'
})
export class QweService {

  constructor(
    public http: HttpClient
  ) {
    super('',http)
   }
}
