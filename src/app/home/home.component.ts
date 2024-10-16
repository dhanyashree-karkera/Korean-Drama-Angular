import { Component } from '@angular/core';
import { AppComponent } from "../app.component";
import { HeaderComponent } from "../header/header.component";
import { PhotoserviceService } from "../service/photoservice.service";
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppComponent, HeaderComponent,GalleriaModule],
  providers: [PhotoserviceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private PhotoserviceService: PhotoserviceService) {}

    ngOnInit() {
        this.PhotoserviceService.getImages().then((images: any[] | undefined) => {
            this.images = images;
        });
    }
}
