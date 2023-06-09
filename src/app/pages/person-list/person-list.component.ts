import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/models/person/person.model';
import { PersonService } from 'src/app/services/person/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  people: IPerson[] = [];

  constructor(private readonly personService: PersonService) {
  }

  ngOnInit(): void {
    this.people = this.personService.getPeople();
    this.addPropertiesRecursively(this.people);
    console.log(this.people);
  }

  addPropertiesRecursively(persons: IPerson[], isFirstLevel: boolean = true, isSelected: boolean = false) {
    persons.forEach((person, index) => {
      person.selected = isFirstLevel ? index === 0 : isSelected;
      person.expanded = false;
  
      if (person.children) {
        this.addPropertiesRecursively(person.children, false, person.selected);
      }
    });
  }
}
