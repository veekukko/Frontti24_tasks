import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatCardModule } from '@angular/material/card'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { FeedbackComponent } from './feedback/feedback.component'; 
import { MatSliderModule } from '@angular/material/slider';
import { Question } from './feedback/questions'; // Adjust path as necessary
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatSidenavContent } from '@angular/material/sidenav';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { MatError } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { FormsModule } from '@angular/forms';  // Ensure this is imported
import { MatInputModule } from '@angular/material/input'; // for mat-input
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { NewsFilterPipe } from './pipes/news-filter.pipe';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './admin/main/main.component';

console.log(environment);


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HelloWorldComponent,
    CalculatorComponent,
    FeedbackComponent,
    ToolbarComponent,
    HomeComponent,
    PersonFormComponent,
    ReactiveFormComponent,
    MoviesComponent,
    NewsFilterPipe,
    LoginComponent,
    MainComponent,
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatSliderModule,
    MatDividerModule,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbarModule,
    MatFormField,
    MatSidenav,
    MatNavList,
    MatLabel,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatError,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  schemas: [
    
    CUSTOM_ELEMENTS_SCHEMA

  ],
  providers: [

  
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
