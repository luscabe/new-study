import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: any = {}
  constructor() { }

  ngOnInit(): void {
  }

  getAvatarUrl() {
    return `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`
  }

}
