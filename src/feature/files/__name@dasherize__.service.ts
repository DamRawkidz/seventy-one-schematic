import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BaseService } from 'seventy-one-base';
export interface <%= classify(name) %> {
  
}

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service  extends BaseService {
  constructor() {
    super('/<%= underscore(name) %>')
   }
}
