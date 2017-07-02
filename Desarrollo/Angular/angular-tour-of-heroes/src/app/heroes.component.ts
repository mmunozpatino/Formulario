import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
  selector: 'my-heroes',
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"> </hero-detail>`,
  styleUrls: ['./app.component.css'],
  providers: [] //para indicar a Angular como hacer un heroService nuevo
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService){
  }
  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit():void {
    this.getHeroes();
  }
  
}
