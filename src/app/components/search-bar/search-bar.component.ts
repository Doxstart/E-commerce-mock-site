import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConnectionService } from 'src/app/services/connection.service';

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
export class SearchBarComponent {
  @Input() searchQuery: any = '';

  @Input() selectedFilter: any = '';

  filteredResults: any[] = [];

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  selectedChoice: EventEmitter<string> = new EventEmitter<string>();

  constructor(public connServ: ConnectionService){}

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchQuery);
    console.log(this.searchQuery);

  }

  filterBySelect(){
    this.filteredResults = [];
    if (this.selectedFilter === 'starts-with') {
      this.filteredResults = this.searchQuery.filter((item: string) => item.startsWith(this.searchQuery));
    } else if (this.selectedFilter === 'ends-with') {
      this.filteredResults = this.searchQuery.filter((item: string) => item.endsWith(this.searchQuery));
    } else if (this.selectedFilter === 'equal-to') {
      this.filteredResults = this.searchQuery.filter((item: any) => item === this.searchQuery);
    } else if (this.selectedFilter === 'includes') {
      this.filteredResults = this.searchQuery.filter((item: string | any[]) => item.includes(this.searchQuery));
    }
    // this.selectedChoice.emit(this.selectedFilter);
    // console.log(this.selectedFilter);
  }

  // filterBySelect(){
  //   this.selectedChoice.emit(this.selectedFilter);
  //   console.log(this.selectedFilter);
  // }

  clearInputQuery(){
    this.searchQuery = '';
    this.onSearchTextChanged();
  }

}
