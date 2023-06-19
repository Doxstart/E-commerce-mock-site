import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchQuery: string = '';

  filterQuery: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchQuery);
  }



  // applyFilterBy(searchQuery: string) {
  //   if (searchQuery === 'starts with') {
  //     const inputValue = this.searchQuery as any as Array<any>
  //     const filteredStrings = inputValue.filter((str: string) =>
  //       str.startsWith(searchQuery)
  //     );
  //   } else if (searchQuery === 'ends with') {
  //     const inputValue = this.searchQuery as any as Array<any>
  //     const filteredStrings = inputValue.filter((str: string) =>
  //       str.endsWith(searchQuery)
  //     );
  //   } else if (searchQuery === 'equals to') {
  //     const inputValue = this.searchQuery as any as Array<any>
  //     const filteredStrings = inputValue.filter((str: string) => str === searchQuery);
  //   } else if (searchQuery === 'includes') {
  //     const inputValue = this.searchQuery as any as Array<any>
  //     const filteredStrings = inputValue.filter((str: string | string[]) =>
  //       str.includes(searchQuery)
  //     );
  //   }

  //   this.applyFilterBy.next(this.filteredResult);
  // }
}
