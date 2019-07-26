import { Component, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'brand',
  templateUrl: `./brand.component.html`,
  styles: [`h1 { font-family: Lato; }`]
})
export class BrandComponent  {
  @Input() BrandName: any;
  @Input() BrandLink: any;
  @Input() BrandDesc: any;
  @Input() BrandLogo: any;

  @Output() removeBrandEvent : EventEmitter<string> = new EventEmitter<string>();

  removeBrand(){
    this.removeBrandEvent.emit(this.BrandName);
  }
} 
