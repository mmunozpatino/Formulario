import {Injectable} from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    } //La promesa está para casos de servidor remoto, que funcione cuando vuelva recién
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
    }
}