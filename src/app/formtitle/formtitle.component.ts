import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formtitle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formtitle.component.html',
  styleUrl: './formtitle.component.css'
})
export class FormtitleComponent {

  @Input()
  title: string = "Signup";
}
