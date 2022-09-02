import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LibraryComponent } from './library/library.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { AuthorsComponent } from './authors/authors.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    RegistrationComponent,
    HeaderComponent,
    NavbarComponent,
    DashboardComponent,
    HomepageComponent,
    LibraryComponent,
    FavouritesComponent,
    RecommendationsComponent,
    AuthorsComponent,
    AboutComponent,
    MyProfileComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
