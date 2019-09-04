import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ModalComponent } from './modal/modal.component';
import { ShopComponent } from './shop/shop.component';
import { ChatComponent } from './game-board/chat/chat.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { PreGameComponent } from './game-board/pre-game/pre-game.component';
import { HostComponent } from './game-board/host/host.component';
import { QuestionComponent } from './game-board/question/question.component';
import { EndGameComponent } from './game-board/end-game/end-game.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainMenuComponent},
  { path: 'leaderboard', component: LeaderboardComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'game-board', component: GameBoardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainMenuComponent,
    FooterComponent,
    LeaderboardComponent,
    ProfileComponent,
    ModalComponent,
    ShopComponent,
    ChatComponent,
    GameBoardComponent,
    PreGameComponent,
    HostComponent,
    QuestionComponent,
    EndGameComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
