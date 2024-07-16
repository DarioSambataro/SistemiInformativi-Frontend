import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule, NgForm} from "@angular/forms";
import {CorsoService} from "../../services/corso.service";
import {CorsoDto} from "../../model/CorsoDto";

@Component({
  selector: 'app-cardsearcher',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './cardsearcher.component.html',
  styleUrl: './cardsearcher.component.css'
})

export class CardsearcherComponent implements OnInit{

  @Input() corsoDto: CorsoDto = new CorsoDto();

  @Output() sendCourseToParent = new EventEmitter<CorsoDto>();

  @Input() corso: CorsoDto;
  searchString : string = "";
  constructor(public corsoService: CorsoService) {
    console.log(1);
  }

  ngOnInit(): void {
    console.log(2);
  }


  search(searchForm: NgForm) {
    this.corsoService.getCorsoByName(this.corsoDto.name).subscribe(res => {
      console.log(res);
      this.corso = res;
      this.sendCourseToParent.emit(this.corso);
    }
    )
  }
}
