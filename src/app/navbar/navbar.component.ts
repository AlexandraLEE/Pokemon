import { Component, OnInit } from '@angular/core';

import { ApiService } from '../service/api.service';
import { ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  womenHeroes = Array(4); // hero par rapport a son id
  menHeroes = Array(4); // hero par rapport a son id
  playerMan;
  playerWoman;
  closeResult: string;
  selectedHero = [];
  @ViewChild('content1') private content;
  constructor(private apiService: ApiService, private modalService: NgbModal) { }

  ngOnInit() {
    let womenIds = [42, 52, 98, 104];
    let menIds = [3, 17, 30, 40];

    let i = 0;
    for (let id of womenIds) {
      let tmpI = i;
      this.apiService.getHeroesId(id).subscribe(hero => {
        console.log(tmpI, hero);
        this.womenHeroes[tmpI] = hero
      });
      i++;
    }

    i = 0;
    for (let id of menIds) {
      let tmpI = i;
      this.apiService.getHeroesId(id).subscribe(hero => {
        console.log(tmpI, hero);
        this.menHeroes[tmpI] = hero
      });
      i++;
    }

  }

  selectHero(hero) {
    hero.selected = true;
    hero.life = 100;
    this.selectedHero.push(hero);
  }

  attack(i) {
    this.selectedHero[i-1].life -= 10;
    //this.selectedHero[i+1].life -=10;
    console.log('attack');
  }
  superAttack(i) {
    this.selectedHero[i-1].life -= 30;
    //this.selectedHero[i+1].life +=5;
    console.log('attack');
  }


  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openModal() {
    this.open(this.content);
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  isWomanSelected(hero) {
    for (let woman of this.womenHeroes) {
      if (woman.selected) {
        return true;
      }
    }
    return false;
  }

  isManSelected(hero) {
    for (let man of this.menHeroes) {
      if (man.selected) {
        return true;
      }
    }
    return false;
  }
}

