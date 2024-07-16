import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { LoginRequest } from '../../model/loginrequest';
import { FormsModule, NgForm } from '@angular/forms';
import { UtenteServiceService } from '../../services/utente-service.service';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent{

  @Input() loginrequest:LoginRequest = new LoginRequest();


  constructor(public utenteService:UtenteServiceService, public router: Router) {

  }
  checked : boolean = true;

  @Output() isLogged: boolean;

  ngOnInit(): void {
    this.isLogged = false;
    setTimeout(
      () => {this.checked = false},
      5000

    )
  }

  getTitle() {
    return "Login";
  }

  @Output() messageEvent = new EventEmitter();
  submit(form: NgForm) {
    console.log(this.loginrequest.email);
    console.log(this.loginrequest.password);
    if(form.valid){
      this.utenteService.login(this.loginrequest).subscribe(result => {
        this.isLogged = true;
        console.log(result);
        console.log("Loggato: "+ this.isLogged);
        this.router.navigate(['/']);
      }
      )
    }
  }

}
