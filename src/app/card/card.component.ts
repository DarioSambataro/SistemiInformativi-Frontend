import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() categoria;

  @Output() dataEmitter : EventEmitter<number> = new EventEmitter<number>();
  emitCategory() {
    this.dataEmitter.emit(this.categoria.id);
  }
}
