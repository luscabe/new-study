import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { PageTemplateComponent } from './layout/page-template/page-template.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { ProfileComponent } from './page/profile/profile.component';
import { SearchComponent } from './page/search/search.component';
import { CharactersComponent } from './page/characters/characters.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    CharacterCardComponent,
    PageTemplateComponent,
    ProfileComponent,
    SearchComponent,
    CharactersComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
