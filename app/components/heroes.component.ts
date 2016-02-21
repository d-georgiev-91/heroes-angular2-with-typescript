/**
 * Created by DGeorgiev on 17.2.2016 г..
 */
import {Component, OnInit} from "angular2/core";
import {Hero} from "../models/hero";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "../services/hero.sevice";
import {Router} from "angular2/router";

@Component({
    selector: 'heroes',
    templateUrl: 'app/templates/components/heroes.component.html',
    styleUrls: ['app/styles/heroes.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    public title: string = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero = null;

    constructor(private _heroService: HeroService, private _router: Router) { }

    public ngOnInit(): any {
        this.getHeroes();
    }

    public getHeroes(): any {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    public onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    public goToDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}