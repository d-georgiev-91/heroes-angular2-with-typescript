/**
 * Created by DGeorgiev on 21.2.2016 г..
 */
import {Injectable} from 'angular2/core';
import {HEROES} from '../mocks/mock-heroes'

@Injectable()
export class HeroService {
    public getHeroes() {
        return Promise.resolve(HEROES);
    }

    public getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }

    public getHero(id: Number) {
        var hero: Hero = HEROES.filter(hero=>hero.id === id)[0];

        return Promise.resolve(hero);
    }
}