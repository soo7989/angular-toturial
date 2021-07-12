import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {HeroService} from "../hero.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  inputHero = new FormControl();
  heroes = this.heroService;
  heroList: string[] = [];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
  }

  viewHeroList(): void{
    this.heroList.push(this.inputHero.value);
    this.inputHero.setValue('');
  }

  addHeroList(): void {
    this.heroList.push(this.inputHero.value);
    this.inputHero.setValue('');
  }


}
