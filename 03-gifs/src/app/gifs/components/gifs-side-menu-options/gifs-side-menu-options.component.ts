import { Component } from '@angular/core';
import { GifsMenuOptionComponent } from '../gifs-menu-option/gifs-menu-option.component';

interface MenuOption {
  label: string;
  sublabel: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [GifsMenuOptionComponent],
  templateUrl: './gifs-side-menu-options.component.html',
  styleUrl: './gifs-side-menu-options.component.css',
})
export class GifsSideMenuOptionsComponent {
  public menuOptions: MenuOption[] = [
    {
      label: 'Trending',
      sublabel: 'Gifs populares',
      icon: 'fa-solid fa-chart-line',
      route: 'trending',
    },
    {
      label: 'Buscador',
      sublabel: 'Buscador de gifs',
      icon: 'fa-solid fa-magnifying-glass',
      route: 'search',
    },
  ];
}
