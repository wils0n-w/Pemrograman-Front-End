import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  @Input() appHighlight = '#f2c14e';
  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) {}
  @HostListener('mouseenter') onEnter(): void { this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.appHighlight); }
  @HostListener('mouseleave') onLeave(): void { this.renderer.removeStyle(this.element.nativeElement, 'backgroundColor'); }
}
