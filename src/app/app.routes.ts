import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { CardsComponent } from './components/cards/cards.component';
import { ColorComponent } from './components/color/color.component';
import { BorderComponent } from './components/border/border.component';
import { AnimationComponent } from './components/animation/animation.component';
import { OtherComponent } from './components/other/other.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { BlankpageComponent } from './components/blankpage/blankpage.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TablesComponent } from './components/tables/tables.component';


const APP_ROUTES: Routes = [{path: 'home', component: HomeComponent},
{path: 'buttons', component: ButtonComponent},
{path: 'cards', component: CardsComponent},
{path: 'colors', component: ColorComponent},
{path: 'borders', component: BorderComponent},
{path: 'animation', component: AnimationComponent},
{path: 'other', component: OtherComponent},
{path: '404er', component: ErrorpageComponent},
{path: 'blanco', component: BlankpageComponent},
{path: 'charts', component: ChartsComponent},
{path: 'tables', component: TablesComponent},
{path: '**', pathMatch: 'full', redirectTo: 'home'}];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
