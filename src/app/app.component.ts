import { Component, Output } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CardComponent } from './card/card.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CardsearcherComponent } from './cardsearcher/cardsearcher.component';
import { FooterComponent } from './footer/footer.component';
import { FormtitleComponent } from './formtitle/formtitle.component';
import { LoginRequest } from '../model/loginrequest';
import { CommonModule } from '@angular/common';
import { CorsoComponent } from './corso/corso.component';
import { UtenteServiceService } from '../services/utente-service.service';
import { UtenteDto } from '../model/UtenteDto';
import { CorsoService } from '../services/corso.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LoginComponent, SignupComponent, CardComponent,
     CardlistComponent, CardsearcherComponent, FooterComponent, FormtitleComponent, CommonModule, CorsoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'test-app';
  
  constructor(private utenteService: UtenteServiceService, private corsoService: CorsoService, private router: Router) {
   

    /*this.utenteService.getUtenteByEmail("").subscribe(result => {
      console.log(result);
    })*/

    /*this.utenteService.deleteUtenteByEmail("").subscribe(result => {
      console.log(result);
    })*/

    /*this.utenteService.addCourse("").subscribe(result => {
      console.log(result);
    })*/
    

    /*this.corsoService.getCorsoById(2).subscribe(result => {
      console.log(result);
    })*/

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url === '/login';
        this.isSignupPage = this.router.url === '/signup';
        this.isCardListPage = this.router.url === '/corso';
        this.isCardSearcherPage = this.router.url === '/cardsearcher';
      }
    })
  }

  ngOnInit(): void  {
    this.utenteService.getAll().subscribe(result => {
      console.log(result);
    });
    this.corsoService.getAll().subscribe(result => {
      console.log(result);
      this.corsi = result;
    })
  }
  
  @Output() categorie = [
    {id: 0, nome: "FrontEnd"},
    {id: 1, nome: "BackEnd"},
    {id: 2, nome: "FullStack"},
    {id: 3, nome: "Cybersecurity"}
  ]

  @Output() corsi = [
    /*{id: 0, nome: "HTML5", categoria: 0},
    {id: 1, nome: "CSS", categoria: 0},
    {id: 2, nome: "Bootstrap", categoria: 0},
    {id: 3, nome: "PHP", categoria: 2},
    {id: 4, nome: "Spring", categoria: 1},
    {id: 5, nome: "Spring Boot", categoria: 1},
    {id: 6, nome: "JS", categoria: 2},
    {id: 7, nome: "HTML + CSS ", categoria: 1},
    {id: 8, nome: "HTML + CSS + JavaScript", categoria: 2},
    {id: 9, nome: "Angular", categoria: 0},*/
  ]

  filteredCorsi = this.corsi;
  receivedMessage: string;
  receivedLog: boolean;
  isLoginPage: boolean = false;
  isSignupPage: boolean = false;
  isCardSearcherPage: boolean = false;
  isCardListPage: boolean = false;

  handleMessage(log: boolean) {
    this.receivedLog = log;
  }

  handleData(data:number) {
    this.filteredCorsi = this.corsi.filter(corso => {
      return (corso.categoria == data)
    })
  }
}
