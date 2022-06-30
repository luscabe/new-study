import { Component } from '@angular/core';
import { MainService } from 'src/service/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'new-study';
  characters = []
  offset = 0
  constructor(
    private mainService: MainService
  ) {

  }
  
  ngOnInit() {
    this.getCharacters()
  }

  async getCharacters() {
    this.mainService.getCharacters().subscribe(data => 
      this.characters = data.data.results
    )
  }

  async testeAbc() {
    this.mainService.getOffsetCharacters(this.offset).subscribe(data => {
      this.characters = data.data.results
      this.offset = this.offset + 20
    })
  }
}
