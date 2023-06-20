import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConnectionService } from 'src/app/services/connection.service';
import { Products } from 'src/app/models/products';

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
  searchQuery: string = '';

  selectedFilter: string ='';

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
    this.selectedChoice.emit(this.selectedFilter);
    console.log(this.selectedFilter);
  }

  clearInputQuery(){
    this.searchQuery = '';
    this.onSearchTextChanged();
  }

}
