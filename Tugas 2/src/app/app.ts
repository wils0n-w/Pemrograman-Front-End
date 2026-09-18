import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({selector:'app-root',imports:[CommonModule],templateUrl:'./app.html',styleUrl:'./app.css'})
export class App {
  cards = [
    { number: '01', title: 'Brand strategy', text: 'Find the sharpest angle for the next chapter.', className: 'wide' },
    { number: '02', title: 'Visual identity', text: 'A visual language with enough room to grow.', className: 'dark' },
    { number: '03', title: 'Digital products', text: 'Useful interfaces, quietly full of character.', className: 'accent' },
    { number: '04', title: 'Content systems', text: 'Words and systems that keep the signal clear.', className: 'light' }
  ];
}
