import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MovieService } from '../service/movie.service';
// import {data} from "../data/data";

@Component({
  selector: 'app-dramas',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dramas.component.html',
  styleUrl: './dramas.component.css'
})
export class DramasComponent {
  data:any[]=[];



  constructor(private movieService:MovieService){}

  ngOnInit():void{
    this.fetchData()
    
  }

  fetchData() {
    this.movieService.getMovies().subscribe((dhanya) => {
        this.data=dhanya.Search;
        console.log(this.data);
    })
  }
}


