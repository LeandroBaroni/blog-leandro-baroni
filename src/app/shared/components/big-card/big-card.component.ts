import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {New} from "../../../core/interfaces/new";

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  new: New = {
    createdAt: new Date(),
    updatedAt: new Date(),
    title: 'Saiu a nova versão do Angular',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dictum ex. Proin efficitur purus' +
      ' in eleifend tincidunt. Sed interdum aliquet hendrerit. Nunc scelerisque congue dui, ac dignissim ligula cursus sit amet. In ut sem ac dolor cursus ornare nec sed odio. Sed eu ex at diam rutrum accumsan.',
    id: '',
    photoCover: 'https://i.stack.imgur.com/luaq2.png'
  }
}
