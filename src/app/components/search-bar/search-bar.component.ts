import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConnectionService } from 'src/app/services/connection.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDividerModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() searchQuery: any = '';

  @Input() selectedFilter: any = '';

  filteredResults: any[] = [];

  flexFlowStyle = 'row wrap';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  selectedChoice: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  sortStyle = new EventEmitter<void>();

  constructor(public connServ: ConnectionService){}

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchQuery);
    console.log(this.searchQuery);

  }

  onFilteringBySelect(){
    this.filteredResults = [];
    if (this.selectedFilter === 'Starts-with') {
      this.filteredResults = this.searchQuery.filter((item: string) => item.startsWith(this.searchQuery));
    } else if (this.selectedFilter === 'Ends-with') {
      this.filteredResults = this.searchQuery.filter((item: string) => item.endsWith(this.searchQuery));
    } else if (this.selectedFilter === 'Equal-to') {
      this.filteredResults = this.searchQuery.filter((item: any) => item === this.searchQuery);
    } else if (this.selectedFilter === 'Includes') {
      this.filteredResults = this.searchQuery.filter((item: any) => item.includes(this.searchQuery));
    }
  }

  filterBySelect(){
    this.selectedChoice.emit(this.selectedFilter);
    console.log(this.onFilteringBySelect());
  }

  clearInputQuery(){
    this.searchQuery = '';
    this.onSearchTextChanged();
  }

  onClick(){
    this.sortStyle.emit()
  }

}
