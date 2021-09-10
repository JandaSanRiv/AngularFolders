import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DosComponent } from './dos/dos.component';
import { UnoComponent } from './uno/uno.component';
import { TresComponent } from './tres/tres.component';


const routes: Routes = [
  {path:'uno', component:UnoComponent},
  {path:'dos', component:DosComponent},
  {path:'dos/:id', component:DosComponent},
  {path:'tres', component:TresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
