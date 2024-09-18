import { Component, HostListener, Input, OnInit } from '@angular/core';


interface CarouselImage {
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  @Input() images: CarouselImage[]=[];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.prevImage();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    }
  }

  selectedIndex = 0;
  ngOnInit(): void {
  }

  selectImage(index:number) {
    this.selectedIndex = index;
  }

  prevImage(){
    if(this.selectedIndex == 0)
      this.selectedIndex = this.images.length - 1;
    else
      this.selectedIndex= this.selectedIndex - 1;
  } 

  nextImage(){
    if(this.selectedIndex == this.images.length - 1 )
      this.selectedIndex = 0;
    else
      this.selectedIndex= this.selectedIndex + 1;
  }

}
