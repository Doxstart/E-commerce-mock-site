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

  constructor(public connService: ConnectionService){}

  ngOnInit(): void {
    this.connService.getProducts().subscribe({
      next: data => this.products = data as any as Products[],
      error: err => console.log(err)
    })
  }

}
