import { Component } from '@angular/core';
import {BigCardComponent} from "../../shared/components/big-card/big-card.component";
import {SmallCardComponent} from "../../shared/components/small-card/small-card.component";
import {MenuTitleComponent} from "../../shared/components/menu-title/menu-title.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, SmallCardComponent, MenuTitleComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {}
