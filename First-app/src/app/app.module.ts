import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';
import { AppShow } from './show.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomPipe } from './custom.pipe';
import { ExampleDirectiveDirective } from './example-directive.directive';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import { RouteparameterComponent } from './routeparameter/routeparameter.component';
import { CustomModule1Module } from './custom-module1/custom-module1.module';
import { HeadInterceptor } from './headInterceptor/head.interceptor'; 
var routes:Routes=[
  {path:' ',redirectTo:'/user',pathMatch:'full'},
 {path:'User',component:HelloComponent},
 {path:'About',component:AboutComponent},
 {path:'Contact',component:ContactComponent},
 {path:'* *',redirectTo:'/user'},
 {path:'User/:id',component:RouteparameterComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
  AppShow,
  CustomPipe,
  ExampleDirectiveDirective,
  AboutComponent,
  ContactComponent,
  RouteparameterComponent,

  
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  
    CustomModule1Module,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService,
  {provide:HTTP_INTERCEPTORS,useClass:HeadInterceptor,multi:true}],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
