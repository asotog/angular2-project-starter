import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

@Directive({
    selector: '[myHighlight]',
    host: {
      '(mouseenter)': 'onMouseEnter()',
      '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {
  
  @Input('myHighlight') highlightColor: string;
  
  @Input() set defaultColor(colorName:string){
    this._defaultColor = colorName || this._defaultColor;
  }
  
  private _defaultColor = 'yellow';
  
  constructor(private el: ElementRef, private renderer: Renderer) {}
  
  onMouseEnter() { 
    this._highlight(this.highlightColor || this._defaultColor);
  }
  onMouseLeave() { this._highlight(null); }

  private _highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
