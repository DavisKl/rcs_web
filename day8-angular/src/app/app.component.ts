import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GalvenaComponent } from './galvena/galvena.component';
import { ContactComponent } from './contact/contact.component';
import { PictureComponent } from './picture/picture.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    RouterLink,
    RouterLinkActive, 
    FormsModule, 
    MainComponent, 
    HeaderComponent, 
    FooterComponent,
    GalvenaComponent,
    ContactComponent,
    PictureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day8-angular';
}
