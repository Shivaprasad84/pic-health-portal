import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[textColor]'
})
export class TextColorDirective implements OnInit, OnChanges {
  @Input() textColor = 'red';

  @HostBinding('style.color') color = ''

  constructor() {}

  ngOnInit(): void {
    this.changeColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeColor();
  }

  changeColor(): void {
    this.color = this.textColor || 'red';
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.color = 'brown';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.color = 'black';
  }
}
