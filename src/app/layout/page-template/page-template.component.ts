import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.sass']
})
export class PageTemplateComponent implements OnInit {
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
