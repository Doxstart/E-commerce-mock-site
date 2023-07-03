import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
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
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchTerm: string = '';

  selectedFilter: string = '';

  flexFlowStyle = 'row wrap';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  sortStyle = new EventEmitter<void>();

  constructor(public connServ: ConnectionService) {}

  ngOnInit(): void {
    this.connServ.search.subscribe((value: any) => {
      this.searchTerm = value;
    });

    this.connServ.filter.subscribe((value: any) => {
      this.selectedFilter = value;
    });
  }

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchTerm);
    console.log(this.searchTerm);
  }

  onSelectingFilter(value: string){
    this.selectedFilter = value;
    this.connServ.filter.next(this.selectedFilter);
    console.log(this.selectedFilter);
  }

  clearInputQuery() {
    this.searchTerm = '';
    this.onSearchTextChanged();
  }

  onClick() {
    this.sortStyle.emit();
  }
}
