/**
 * Created by DGeorgiev on 21.2.2016 г..
 */
import {Component, Input, OnInit} from 'angular2/core';
import {Hero} from "../models/hero";
import {HeroService} from "../services/hero.sevice";
import {RouteParams} from "angular2/router";

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/templates/components/hero-detail.component.html',
    inputs: ['hero'],
    styleUrls: ['app/styles/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    public hero:Hero;

    constructor(private _heroService:HeroService,
                private _routeParams:RouteParams) {
    }

    public ngOnInit():any {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id).then(hero=> this.hero = hero);
    }

    public goBack():void {
        window.history.back();
    }
}
