import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import { DashboardComponent } from './dashboard.component';

/*todos los componentes deben ser declarados uno por un en el app.module.ts
 con un IMPORT y en DECLARATIONS*/

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
      path: 'heroes', //el router unnne este paquete a la URL en la direccion del browser
      component: HeroesComponent // Componente que el routere debería crear cuando se navega por esta ruta
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {//router de redireccionamiento al dashboard
      path:'',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'detail/:id',//:id -> placeholder for a specific hero
      component: HeroDetailComponent
    }
    ])
  ],
  providers: [HeroService],//con poner el servicio aca ya sirve para todos los demás componentes
  //hace una instancia singleton de HeroService disponible para todos los componentes
  bootstrap: [AppComponent]
})
export class AppModule { }
