import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  heroes = Array(8); // hero par rapport a son id
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    let ids = [42, 52, 98, 104, 3, 17, 30, 40];

    let i = 0;
    for (let id of ids) {
      let tmpI = i;
      this.apiService.getHeroesId(id).subscribe(hero => {
        console.log(tmpI, hero);
        this.heroes[tmpI] = hero
      });
      i++;
    }

  }

