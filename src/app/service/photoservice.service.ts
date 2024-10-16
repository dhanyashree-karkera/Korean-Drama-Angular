import { Injectable } from '@angular/core';
import { StyleClass } from 'primeng/styleclass';

@Injectable({
  providedIn: 'root'
})
export class PhotoserviceService {
    getData() {
      return [
        {
          itemImageSrc: 'https://cdn.wallpapersafari.com/54/9/OpXiVq.jpg',
          alt: 'Image ',
          title: 'Title ', 
      },
          {
              itemImageSrc: 'https://wallpapers.com/images/hd/goblin-kdrama-wwuo68su6g25p78r.jpg',
              alt: 'Image 1',
              title: 'Title 1', 
          },
          {
              itemImageSrc: 'https://mrwallpaper.com/images/hd/korean-drama-crash-landing-on-you-2e1nmr10ccwmgwdj.jpg',
              alt: 'Image 2',
              title: 'Title 2'
          },
          {
              itemImageSrc: 'https://wallpapercave.com/wp/wp10437097.jpg',
              alt: 'Image 3',
              title: 'Title 3'
          }
      ];
  }

  getImages() {
      return Promise.resolve(this.getData());
  }
}
