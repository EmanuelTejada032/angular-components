import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

interface CarouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements AfterViewInit {
  @Input() images: CarouselImage[] = [];

  currentIndex: number = 0;
  totalVisible: number = 6;
  itemWidth: number = 210; // 200px + 10px margin

  @ViewChild('slider', { static: false }) slider!: ElementRef;

  ngAfterViewInit() {
    this.updateSliderPosition();
  }

  scrollToImage(index: number) {
    // Shift the images so that the clicked image becomes the first
    const clickedImageIndex = index;
    
    // Rearrange the images array
    const beforeClickedImages = this.images.slice(0, clickedImageIndex); // Get the images before the clicked image
    const afterClickedImages = this.images.slice(clickedImageIndex); // Get the clicked image and the ones after it
    
    // Update the images array to move all images before the clicked one to the end
    this.images = [...afterClickedImages, ...beforeClickedImages];
    
    // Set the current index back to 0 because the clicked image is now at the first position
    this.currentIndex = 0;
    
    // Update the slider position
    this.updateSliderPosition();
  }

  updateSliderPosition() {
    const offset = -(this.currentIndex * this.itemWidth); // Calculate the correct offset

    // Apply the smooth scroll effect
    this.slider.nativeElement.style.transform = `translateX(${offset}px)`;
    this.slider.nativeElement.style.transition = 'transform 0.5s ease';
  }
}
