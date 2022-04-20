import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base/base-service';


@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service  extends BaseService {
 
  constructor(
    public http: HttpClient
  ) {
    super('',http)
   }
}
