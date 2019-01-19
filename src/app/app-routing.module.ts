import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { EntrenadorComponent } from './entrenador/entrenador.component';


const routes: Routes = [


	{
		path: 'prueba',
		component: PruebaComponent,
	},
	{	
		path: 'entrenador', 
		component: EntrenadorComponent
	}
	
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
