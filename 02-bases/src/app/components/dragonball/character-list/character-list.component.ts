import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { Character } from '../../../interfaces/Character.interface';

@Component({
  selector: 'dbs-character-list',
  imports: [NgClass],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  public characters = input.required<Character[]>();
  public listName = input.required<string>();
}
