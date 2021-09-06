import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JunioComponent } from './pages/junio/junio.component';
import { AgostoComponent } from './pages/agosto/agosto.component';
import { JulioComponent } from './pages/julio/julio.component';
import { SeptiembreComponent } from './pages/septiembre/septiembre.component';


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
    path:'septiembre', component:SeptiembreComponent
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
