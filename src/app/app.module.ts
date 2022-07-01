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
import { SearchItemComponent } from './components/search-item/search-item.component';
import { CharactersComponent } from './page/characters/characters.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SearchLoadingComponent } from './components/loadings/search-loading/search-loading.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { OptionsMenuComponent } from './components/options-menu/options-menu.component';
import { MediaCardComponent } from './components/media-card/media-card.component';


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
    SearchItemComponent,
    DropdownComponent,
    SearchLoadingComponent,
    ProfileHeaderComponent,
    OptionsMenuComponent,
    MediaCardComponent
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
