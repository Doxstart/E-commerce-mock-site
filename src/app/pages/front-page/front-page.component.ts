import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit{

  products: Products[] = [];

  searchText: string = "";

  filteredResults: string = "";

  constructor(public connServ: ConnectionService){}

  ngOnInit(): void {
    this.connServ.getProducts().subscribe({
      next: data => this.products = data as any as Products[],
      error: err => console.log(err)
    })
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
  }

  onFilterBySelected(selectedFilter: string){
    this.filteredResults = selectedFilter;
  }

  onFilter(filterBy: string){

    this.filteredResults = filterBy;

    if (this.filteredResults === "Starts with") {
      this.connServ.filterByStartsWith(this.filteredResults).subscribe({
        next: element => this.products = element as any as Products[],
        error: err => console.log(err)
      });
    }
    if (this.filteredResults === "Ends with") {
      this.connServ.filterByEndsWith(this.filteredResults).subscribe({
        next: element => this.products = element as any as Products[],
        error: err => console.log(err)
      });
    }
    if (this.filteredResults === "Equal to") {
      this.connServ.filterByEqualsTo(this.filteredResults).subscribe({
        next: element => this.products = element as any as Products[],
        error: err => console.log(err)
      });
    }
    if (this.filteredResults === "Includes") {
      this.connServ.filterByIncludes(this.filteredResults).subscribe({
        next: element => this.products = element as any as Products[],
        error: err => console.log(err)
      });
    }
  }

}
