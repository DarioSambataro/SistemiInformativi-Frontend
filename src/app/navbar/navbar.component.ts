import { Component, Input } from '@angular/core';
import { LoginRequest } from '../../model/loginrequest';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() email: string;
  @Input() log:boolean;
}
