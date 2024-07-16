import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CardComponent } from './card/card.component';
import { CardsearcherComponent } from './cardsearcher/cardsearcher.component';
import { FormtitleComponent } from './formtitle/formtitle.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CorsiComponent } from './corsi/corsi.component';
import {AppComponent} from "./app.component";

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'app', component: AppComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'card', component: CardComponent},
    {path: 'cardsearcher', component: CardsearcherComponent},
    {path: 'formtitle', component: FormtitleComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'corsi', component: CorsiComponent},
    {path: 'navbar', component: NavbarComponent}

];
