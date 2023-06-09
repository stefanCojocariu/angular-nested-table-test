import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[columnResize]'
})
export class ColumnResizeDirective {
  private startX!: number;
  private resizing: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'resizable');
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.target === this.el.nativeElement) {
      this.startX = event.clientX;
      this.resizing = true;
      this.renderer.addClass(this.el.nativeElement, 'resizing');
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.resizing) {
      const widthDiff = event.clientX - this.startX;
      const newWidth = Math.max(this.el.nativeElement.offsetWidth + widthDiff, 0);
      this.renderer.setStyle(this.el.nativeElement, 'width', `${newWidth}px`);
      this.startX = event.clientX; // Update the startX position for continuous resizing
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.resizing) {
      this.resizing = false;
      this.renderer.removeClass(this.el.nativeElement, 'resizing');
    }
  }
}
