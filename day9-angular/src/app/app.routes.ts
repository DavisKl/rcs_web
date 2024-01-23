import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdditionComponent } from './addition/addition.component';
import { SubstractionComponent } from './substraction/substraction.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { DivideComponent } from './divide/divide.component';

export const routes: Routes = [
    {path:'header', component: HeaderComponent},
    {path:'addition', component: AdditionComponent},
    {path:'substraction', component: SubstractionComponent},
    {path:'multiply', component: MultiplyComponent},
    {path:'divide', component: DivideComponent},
    {path: '', redirectTo: '/addition', pathMatch: 'full'},
    {path: '', redirectTo: '/substraction', pathMatch: 'full'},
    {path: '', redirectTo: '/multiply', pathMatch: 'full'},
    {path: '', redirectTo: '/divide', pathMatch: 'full'},

];
