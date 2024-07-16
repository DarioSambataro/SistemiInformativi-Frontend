import { Component, OnInit } from '@angular/core';
import { CorsoService } from '../../services/corso.service';
import { CorsoComponent } from '../corso/corso.component';
import { CommonModule } from '@angular/common';
import { CardsearcherComponent } from '../cardsearcher/cardsearcher.component';
import {CorsoDto} from "../../model/CorsoDto";

@Component({
  selector: 'app-corsi',
  standalone: true,
  imports: [CorsoComponent, CommonModule, CardsearcherComponent],
  templateUrl: './corsi.component.html',
  styleUrl: './corsi.component.css'
})
export class CorsiComponent implements OnInit {
  constructor(public corsoService: CorsoService) {

  }
  corsoDto: CorsoDto;

  corsi = [

  ]

  ngOnInit(): void {
    this.corsoService.getAll().subscribe(result => {
      console.log(result);
      this.corsi = result;
    })
  }

  onReceiveCourse(value: CorsoDto) {
    console.log(value);
    this.corsoDto = value;
  }
}
