import { Injectable } from '@angular/core';
import {PersonRepository} from "../../repositories/person.repository";
import {IPerson} from "../../models/person/person.model";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private readonly personRepository: PersonRepository) { }

  getPeople(): IPerson[] {
    return this.personRepository.getPeople();
  }
}
