import { Injectable } from '@angular/core';
import {IPerson} from "../models/person/person";
import {personData} from "../data/person.data";

@Injectable({
  providedIn: 'root'
})
export class PersonRepository {
  private data: IPerson[] = personData;
  constructor() { }

  getPeople(): IPerson[] {
    return this.data;
  }
}
