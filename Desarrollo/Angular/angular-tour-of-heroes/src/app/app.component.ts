import{Component} from '@angular/core'

@Component({
    selector: 'my-app',
    template : `
    <h1>{{tittle}}</h1>
    <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet> </router-outlet>
    `//este componente ahora usa UN router, es ahora un ROUTER COMPONENT
})
export class AppComponent{
    tittle = 'Tour of Heroes';
}