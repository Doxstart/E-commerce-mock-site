import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
})
export class FrontPageComponent implements OnInit{

  products: Products[] = [];

  searchText: any = "";

  filterBy: any = "";

  flexFlow = 'row wrap';

  constructor(public connServ: ConnectionService){}

  ngOnInit(): void {
    this.connServ.getProducts().subscribe({
      next: data => this.products = data as any as Products[],
      error: err => console.log(err)
    });
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
  }

  onSelected(searchValue: string){
    this.filterBy = searchValue;
  }

  updateStyle(){
    this.flexFlow = (this.flexFlow === 'row wrap')? 'row-reverse wrap-reverse' : 'row wrap';
  }

}
