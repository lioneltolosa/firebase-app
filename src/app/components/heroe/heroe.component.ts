import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    name: '',
    bio: '',
    casa: 'Marvel'
  };

  constructor(private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit() {
  }

  save() {
    console.log(this.heroe);

    this.heroesService.nuevoHeroe (this.heroe)
      .subscribe( data => {
        this.router.navigate(['/heroe', data['name'] ]);
      },
      error => console.log(error));
    }
}
