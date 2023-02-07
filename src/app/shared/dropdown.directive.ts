import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector:'[appDropDown]'
})
export class DropdownDirective implements OnInit{
  constructor(private elRef: ElementRef,private renderer: Renderer2) {
  }
  @HostBinding('class.open') isOpen=false;

  @HostListener('click')
  mouseHover(event: Event) {
    this.isOpen = !this.isOpen;
  }
  ngOnInit() {
  }

}
