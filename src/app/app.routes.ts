import { Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';



export const routes: Routes = [
    { path: "comp1", component: C1Component },
    { path: "comp2", component: C2Component },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    
    // { path: "**", component: NotFoundComponent},
    { path: "404error", component: NotFoundComponent},
    { path: "**", redirectTo: "/404error", pathMatch: "full"}
];
