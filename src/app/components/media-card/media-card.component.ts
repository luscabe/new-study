import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICharacter } from 'src/app/utils/Interfaces/IMarvelApi';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.sass']
})
export class MediaCardComponent implements OnInit {
  @Input() media: any = {}
  constructor( 
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  getAvatarUrl() {
    return `${this.media.thumbnail.path}.${this.media.thumbnail.extension}`
  }

}
