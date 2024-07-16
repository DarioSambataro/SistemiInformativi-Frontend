import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SignupRequest } from '../../model/signuprequest';
import { FormsModule, NgForm } from '@angular/forms';
import { FormtitleComponent } from '../formtitle/formtitle.component';
import { UtenteServiceService } from '../../services/utente-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, FormtitleComponent, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  @Input() signuprequest : SignupRequest = new SignupRequest();
  constructor(public utenteService:UtenteServiceService, public router: Router) {

  }
  ngOnInit(form: NgForm) {
    console.log(form);
  }
  @Output() messageEvent = new EventEmitter();
  submit(form: NgForm) {
    console.log(this.signuprequest.firstname);
    console.log(this.signuprequest.lastname);
    console.log(this.signuprequest.email);
    console.log(this.signuprequest.password);
    if(form.valid) {
      this.utenteService.signup(this.signuprequest).subscribe(result => {
        console.log(result);
        this.router.navigate(['/']);
      }
    )
   }
  }
}
