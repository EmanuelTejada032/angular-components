import { Component, Input, OnInit } from '@angular/core';


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
  @Input() indicators: boolean = false;

  selectedIndex = 0;
  ngOnInit(): void {
  }

  selectImage(index:number) {
    this.selectedIndex = index;
  }

}
