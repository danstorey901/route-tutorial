import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './userapps/home/home.component';
import { HaboutComponent } from './userapps/habout/habout.component';
import { HelpComponent } from './userapps/help/help.component';
import { E404Component } from './userapps/e404/e404.component';

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "habout/:name", component: HaboutComponent },
  { path: "help/:id", component: HelpComponent },
  { path: "home", component: HomeComponent },
  { path: "**", component: E404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
