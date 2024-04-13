import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-middle2',
  templateUrl: './middle2.component.html',
  styleUrl: './middle2.component.scss'
})
export class Middle2Component {
  products:any
  Categories:any
  constructor(public apiService:ApiService) {
    apiService.getAllProducts()
  }

  ngOnInit(){
    this.apiService.categories1().subscribe((data:any) =>{
      this.Categories =data
    });
  }
 
}
