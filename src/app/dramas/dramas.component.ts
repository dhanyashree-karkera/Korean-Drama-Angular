import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import {data} from "../data/data";

@Component({
  selector: 'app-dramas',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dramas.component.html',
  styleUrl: './dramas.component.css'
})
export class DramasComponent {

  ngOnInit(){
    console.log(data);
    
  }
}
