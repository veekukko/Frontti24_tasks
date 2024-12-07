import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';  
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './admin/main/main.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'hello', component: HelloWorldComponent },
  {path:'calculator', component: CalculatorComponent},
  { path: 'feedback', component: FeedbackComponent },
  {path:'form', component: PersonFormComponent},
  {path:'reactive', component: ReactiveFormComponent},
  {path:'movies', component: MoviesComponent},
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/main', component: MainComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
  { path:'**', component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
