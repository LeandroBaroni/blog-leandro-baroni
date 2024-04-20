import { Component } from '@angular/core';
import {BigCardComponent} from "../../shared/components/big-card/big-card.component";
import {SmallCardComponent} from "../../shared/components/small-card/small-card.component";
import {MenuTitleComponent} from "../../shared/components/menu-title/menu-title.component";
import {MenuBarComponent} from "../../shared/components/menu-bar/menu-bar.component";
import {New} from "../../core/interfaces/new";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, SmallCardComponent, MenuTitleComponent, MenuBarComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {
  news: New[] = [
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Veja os novos lançamentos da DC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dictum ex. Proin efficitur purus' +
        ' in eleifend tincidunt. Sed interdum aliquet hendrerit. Nunc scelerisque congue dui, ac dignissim ligula cursus sit amet. In ut sem ac dolor cursus ornare nec sed odio. Sed eu ex at diam rutrum accumsan.',
      id: '',
      photoCover: 'https://www.whats-on-netflix.com/wp-content/uploads/2023/03/dc-comics-series-coming-to-netflix-2023-beyond-jpg.webp'
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Veja os novos lançamentos da DC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dictum ex. Proin efficitur purus' +
        ' in eleifend tincidunt. Sed interdum aliquet hendrerit. Nunc scelerisque congue dui, ac dignissim ligula cursus sit amet. In ut sem ac dolor cursus ornare nec sed odio. Sed eu ex at diam rutrum accumsan.',
      id: '',
      photoCover: 'https://www.whats-on-netflix.com/wp-content/uploads/2023/03/dc-comics-series-coming-to-netflix-2023-beyond-jpg.webp'
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Veja os novos lançamentos da DC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dictum ex. Proin efficitur purus' +
        ' in eleifend tincidunt. Sed interdum aliquet hendrerit. Nunc scelerisque congue dui, ac dignissim ligula cursus sit amet. In ut sem ac dolor cursus ornare nec sed odio. Sed eu ex at diam rutrum accumsan.',
      id: '',
      photoCover: 'https://www.whats-on-netflix.com/wp-content/uploads/2023/03/dc-comics-series-coming-to-netflix-2023-beyond-jpg.webp'
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Veja os novos lançamentos da DC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dictum ex. Proin efficitur purus' +
        ' in eleifend tincidunt. Sed interdum aliquet hendrerit. Nunc scelerisque congue dui, ac dignissim ligula cursus sit amet. In ut sem ac dolor cursus ornare nec sed odio. Sed eu ex at diam rutrum accumsan.',
      id: '',
      photoCover: 'https://www.whats-on-netflix.com/wp-content/uploads/2023/03/dc-comics-series-coming-to-netflix-2023-beyond-jpg.webp'
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Veja os novos lançamentos da DC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dictum ex. Proin efficitur purus' +
        ' in eleifend tincidunt. Sed interdum aliquet hendrerit. Nunc scelerisque congue dui, ac dignissim ligula cursus sit amet. In ut sem ac dolor cursus ornare nec sed odio. Sed eu ex at diam rutrum accumsan.',
      id: '',
      photoCover: 'https://www.whats-on-netflix.com/wp-content/uploads/2023/03/dc-comics-series-coming-to-netflix-2023-beyond-jpg.webp'
    },
  ]
}
