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
  async backPage() {
    this.offset = this.offset - 20
    this.mainService.getOffsetCharacters(this.offset).subscribe(data => {
      this.characters = data.data.results
    })
  }

  async nextPage() {
    this.offset = this.offset + 20
    this.mainService.getOffsetCharacters(this.offset).subscribe(data => {
      this.characters = data.data.results
    })
  }
}
