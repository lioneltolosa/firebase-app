import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log(this.heroe);
  }

}
