/**
 * Created by DGeorgiev on 21.2.2016 г..
 */
import {Component, OnInit} from "angular2/core";
import {Hero} from "../models/hero";
import {HeroService} from "../services/hero.sevice";
import {Router} from "angular2/router";

@Component({
    templateUrl: 'app/templates/components/dashboard.component.html',
    providers: [HeroService],
    styleUrls: ['app/styles/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public heroes: Hero[] = [];

    constructor(private _heroService: HeroService, private _router: Router) {}

    public ngOnInit(): void {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    public goToDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id}];
        this._router.navigate(link);
    }
}