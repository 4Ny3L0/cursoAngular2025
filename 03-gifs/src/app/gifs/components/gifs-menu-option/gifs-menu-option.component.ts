import { Component, input } from '@angular/core';
import { MenuOption } from '../../interfaces/menu-option.interface'
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'gifs-menu-option',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-menu-option.component.html',
  styleUrl: './gifs-menu-option.component.css'
})
export class GifsMenuOptionComponent {
  public optionData = input<MenuOption>();
}
