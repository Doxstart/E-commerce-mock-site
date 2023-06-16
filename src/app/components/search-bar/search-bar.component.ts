import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  enteredSearchValue: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void { }

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

}
