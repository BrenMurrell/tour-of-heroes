import { Component, Input } from '@angular/core'; //building a component so need this as a basic starting point

import { Hero } from './hero';
@Component({ 
    selector: 'hero-detail', //the selector is where the content will go
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name" />
            </div>
        </div>
    `
})
export class HeroDetailComponent { //export name
    @Input() hero: Hero;
}