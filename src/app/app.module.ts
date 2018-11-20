import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {FormsModule} from '@angular/forms';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component'
import {SlideshowModule} from 'ng-simple-slideshow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SliderModule } from 'angular-image-slider';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { studentPipe } from './students/studentPipe.pipe'
 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 
import { environment } from '../environments/environment';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {DataService} from './data.service';
import { SignUpComponent } from './sign-up/sign-up.component'
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from './auth.service';
import { HighlighterDirective } from './highlighter.directive';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes =[
  
{ path: '', component: HomeComponent},
{ path: 'home', component: HomeComponent},
{path:'employee', component:EmployeeComponent},
{path: 'even', component: EvenComponent},
{path: 'odd', component: OddComponent},
{path: 'Students', component: StudentsComponent},
{path: 'signUp', component: SignUpComponent},
{path: 'signIn', component: SignInComponent},


{path: 'signUp/home', component: HomeComponent},
{path: 'signIn/home', component: HomeComponent},






{path: '**', component: PageNotFoundComponent}

]

  

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EvenComponent,
    OddComponent,
    HomeComponent,
    StudentsComponent,
    studentPipe,
    PageNotFoundComponent,
    SignUpComponent,
    SignInComponent,
    HighlighterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SlideshowModule,
    SliderModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFireDatabaseModule // for database

  ],
  providers: [DataService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
