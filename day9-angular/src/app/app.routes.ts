import { Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { SubstractionComponent } from './substraction/substraction.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { DivideComponent } from './divide/divide.component';
import { StringListComponent } from './string-list/string-list.component';

export const routes: Routes = [
    {path:'addition', component: AdditionComponent},
    {path:'substraction', component: SubstractionComponent},
    {path:'multiply', component: MultiplyComponent},
    {path:'divide', component: DivideComponent},
    {path:'StringList', component: StringListComponent},
];
