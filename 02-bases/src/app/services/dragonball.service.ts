import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/Character.interface';

const getDataFromLocalStorage = (): Character[] => {
  const dataRetrived = localStorage.getItem('characters');
  if (dataRetrived) {
    return JSON.parse(dataRetrived);
  }
  return [];
};

@Injectable({ providedIn: 'root' })
export class DragonBallService {
  public characters = signal<Character[]>(getDataFromLocalStorage());

  /*Antes de ver la clase implemente la carga de personajes asi*/
  addCharacter(character: Character) {
    this.characters.update((actualCharacters) => [
      ...actualCharacters,
      character,
    ]);
  }

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });
}
