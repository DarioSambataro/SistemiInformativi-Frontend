import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cardlist',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css'
})
export class CardlistComponent {

}
