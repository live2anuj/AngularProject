import { Directive, HostListener, ElementRef ,Renderer2} from '@angular/core';


@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private el:ElementRef,private renderer: Renderer2) { }

  @HostListener("mouseenter") onmouseenter(){

    this.highlight("blue");
  }

    @HostListener("mouseleave") onmouseleave()
    {
      this.highlight(null);

    }
  highlight(color: string)
  {
    //this.el.nativeElement.style.backgroundColor=color;
    this.renderer.setStyle(this.el.nativeElement, "color",color);


  

  }
}
