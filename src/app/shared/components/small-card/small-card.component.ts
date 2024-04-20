import {Component, Input} from '@angular/core';
import {New} from "../../../core/interfaces/new";

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input({ required: true }) item: New;
}
