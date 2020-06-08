import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component'

const routes: Routes = [
  {
		path: 'userlist',
		component: UserlistComponent	
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes,{useHash:true})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
