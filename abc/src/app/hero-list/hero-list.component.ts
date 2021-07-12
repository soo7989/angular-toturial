import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass']
})
export class HeroListComponent implements OnInit {
  @Input() heroes?: string[];

  constructor() { }

  ngOnInit() {
  }

}
