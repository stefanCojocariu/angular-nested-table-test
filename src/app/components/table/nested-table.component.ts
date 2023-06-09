import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { IPerson } from 'src/app/models/person/person.model';

@Component({
  selector: 'nested-table',
  templateUrl: './nested-table.component.html',
  styleUrls: ['./nested-table.component.scss']
})
export class NestedTableComponent implements OnInit {
  @Input() rowData: IPerson[] = [];
  filteredRowData: IPerson[] = [];

  showDeleteMultipleButton = false;
  
  searchText = '';
  private searchQuerySubject = new Subject<string>();
  private readonly debounceTimeMs = 700;

  selectAll = false;

  ngOnInit() {
    this.filteredRowData = this.rowData;

    this.searchQuerySubject.pipe(
      debounceTime(this.debounceTimeMs),
      distinctUntilChanged()
    ).subscribe((query: string) => {
      this.filteredRowData = this.filterRows(query);
    });
  }

  toggleRowExpansion(row: IPerson): void {
    row.expanded = !row.expanded;
  }

  toggleRowSelection(row: IPerson): void {
    row.selected = !row.selected;
  }

  toggleSelectAll(): void {
    this.rowData.forEach(row => {
      row.children?.forEach(child => (child.selected = !this.selectAll));
      row.selected = !this.selectAll;
    });
    
    this.updateShowDeleteMultipleButtonFlag(true);
  }

  onRowCheckboxChange(person: IPerson, isFirstLevel: boolean = false): void {
    // Check to see if more than 1 first level row are selected
    this.updateShowDeleteMultipleButtonFlag(isFirstLevel);

    // Select all children for that person
    // person.children?.forEach(child => {
    //   child.selected = person.selected;
    //   if(child.children) {
    //     child.children.forEach(childOfChild => (this.onRowCheckboxChange(child)));
    //   }
    // });
  }

  updateShowDeleteMultipleButtonFlag(isFirstLevel: boolean = false) {
    if(isFirstLevel) {
      let numberOfFirstLevelRowsSelected = 0;
      this.rowData.forEach(row => {
        if(row.selected) {
          numberOfFirstLevelRowsSelected++;
        }
      });
      this.showDeleteMultipleButton = numberOfFirstLevelRowsSelected > 1;
    }
  }

  onSearchInput(): void {
    this.searchQuerySubject.next(this.searchText);
  }

  filterRows(query: string): IPerson[] {
    // Filter the rowData based on the search query
    return this.rowData.filter((row) => {
      // Check if the row or any of its children match the search query
      return this.doesRowMatchQuery(row, query);
    });
  }

  doesRowMatchQuery(person: IPerson, query: string): boolean {
    query = query.toLowerCase();
    // Check if the row matches the search query
    if (person.name.toLowerCase().includes(query)) {
      return true;
    }
  
    // Check if any of the children match the search query
    if (person.children) {
      for (const child of person.children) {
        const childMatch = this.doesRowMatchQuery(child, query);
        if (childMatch) {
          return true;
        }
      }
    }
  
    return false;
  }
}
