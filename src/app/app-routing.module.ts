import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JunioComponent } from './pages/junio/junio.component';
import { AgostoComponent } from './pages/agosto/agosto.component';
import { JulioComponent } from './pages/julio/julio.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'/',
    pathMatch:'full'
  },
  {
    path:'junio', component:JunioComponent, 
  },
  {
    path:'julio', component:JulioComponent
  },
  {
    path:'agosto', component:AgostoComponent
  },

  {
    path:'**', redirectTo:'/'
  },

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
