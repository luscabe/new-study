import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOptions } from 'src/app/utils/Interfaces/IOptions';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class DropdownComponent {
  @Input() label: string = '';
  @Input() options: Array<IOptions> = [];
  @Output() onSelect: EventEmitter<IOptions> = new EventEmitter();
  constructor() { }
}
