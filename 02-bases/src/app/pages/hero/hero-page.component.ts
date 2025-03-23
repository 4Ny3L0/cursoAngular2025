import { CommonModule } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [CommonModule],
})
export class HeroPageComponent {

 
  public name: WritableSignal<string> = signal('IronMan');
  public age: WritableSignal<number> = signal(45);
  

  public heroDescription = computed(()=>{
    const description = `Heroe: ${this.name()} - Edad: ${this.age()}`;
    return description;
  });

  capitalizeName = computed(()=>this.name().toUpperCase())



  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
  changeHero() {
    this.name.update((currentName) => (currentName = 'Spiderman'));
    this.age.update((currentAge) => (currentAge = 22));
  }

  changeAge() {
    this.age.update(currentAge=>{
        return currentAge=60
    })
    }
}