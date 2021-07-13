import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 부모로부터 값을 받아옵니다.
  @Input() heroListDetail: string[];

  constructor() { }

  ngOnInit() {
  }

}
