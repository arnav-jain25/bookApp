import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthorsComponent } from './authors/authors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'dashboard/:userId', component: DashboardComponent },
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'library/:userId', component: LibraryComponent },
  { path: 'favourites/:userId', component: FavouritesComponent },
  { path: 'recommendations/:userId', component: RecommendationsComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'my-profile/:userId', component: MyProfileComponent },
  { path: 'edit-profile/:userId', component: EditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
