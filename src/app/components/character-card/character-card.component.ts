import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { ICharacter } from 'src/app/utils/Interfaces/IMarvelApi';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: any = {}
  constructor( 
    private router: Router,
    private utilsService: UtilsService,
    ) { }

  ngOnInit(): void {
  }

  getAvatarUrl() {
    return this.utilsService.getImage(this.character.thumbnail.path, this.character.thumbnail.extension)
  }

  onSelectItem = (item: ICharacter) => {
    this.router.navigate([`/profile/characters/${item.id}`]);
  }

}
