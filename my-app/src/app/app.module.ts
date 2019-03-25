import {BrowserModule} from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MatCardModule, MatFormFieldModule, MatListModule, MatSelectModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {RouterModule, Routes} from "@angular/router";
import {LangChangeEvent, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateService} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent}
]

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@Component({})

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    HttpClientModule,
    MatFormFieldModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    )
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  // onLangChange.subscribe((event: LangChangeEvent) => {
  //   // do something
  // });

}
