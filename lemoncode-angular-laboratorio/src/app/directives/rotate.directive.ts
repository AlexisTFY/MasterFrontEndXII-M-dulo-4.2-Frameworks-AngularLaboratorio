import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective {
  @Input() step: number = 15;
  rotation:number = 45;
  shiftKeyPres: boolean = false;

 

  constructor(private el: ElementRef) {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Shift') this.shiftKeyPres = true;
    });
    window.addEventListener('keyup', (e) => (this.shiftKeyPres = false));
   }

   ngOnInit() {
    if (this.el.nativeElement.nodeName === 'IMG') {
      this.rotationFunction(this.rotation);
    }
   }

   private rotationFunction(rotation: number) {
    this.el.nativeElement.style.transform = `rotate(${rotation}deg)`;
   }

   @HostListener('click')
   onClickEvent() {
    if (this.el.nativeElement.nodeName === 'IMG') {
      if (!this.shiftKeyPres) {
        this.rotation += this.step;
        this.rotationFunction(this.rotation);
      } else {
        this.rotation -= this.step;
        this.rotationFunction(this.rotation);
      }
    }
   }
}
