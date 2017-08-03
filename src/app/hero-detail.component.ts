import { Component, Input, OnInit } from '@angular/core'; //building a component so need this as a basic starting point
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';

import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';

@Component({ 
    selector: 'hero-detail', //the selector is where the content will go
    templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit { //export name
    @Input() hero: Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {};
    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    };
    goBack(): void {
        this.location.back();
    }
}