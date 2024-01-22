import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GalvenaComponent } from './galvena/galvena.component';
import { ContactComponent } from './contact/contact.component';
import { PictureComponent } from './picture/picture.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'main', component: MainComponent},
    {path:'header', component: HeaderComponent},
    {path:'footer', component: FooterComponent},
    {path: 'galvena', component: GalvenaComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'picture', component: PictureComponent},
    {path: '', redirectTo: '/galvena', pathMatch: 'full'},
    {path: '', redirectTo: '/contact', pathMatch: 'full'},
    {path: '', redirectTo: '/picture', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
];
