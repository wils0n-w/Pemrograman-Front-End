import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { InitialsPipe } from './initials.pipe';

@Component({selector:'app-root',imports:[CommonModule,HighlightDirective,InitialsPipe],templateUrl:'./app.html',styleUrl:'./app.css'})
export class App { people = ['Nadia Putri','Raka Aditya','Sinta Maharani']; selected = 'Nadia Putri'; }
