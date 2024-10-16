import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent,CardModule,DividerModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
[x: string]: { [klass: string]: any; }|null|undefined;

}
