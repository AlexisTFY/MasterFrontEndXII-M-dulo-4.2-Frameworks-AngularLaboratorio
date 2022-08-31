import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  coversList;
  imageToShow: number = 0;
  imageSize: number = 500;
  setInterval: any;
  fistValue: number = 0;
  lastValue: number = 3;

  constructor(galleryService: GalleryService) {
    this.coversList = galleryService.getCoversList();
   }

  ngOnInit(): void {
  }

  showImage(i: number) {
    this.imageToShow = i;
  }

  next() {
    if (this.imageToShow < this.coversList.length - 1) {
      this.imageToShow ++
    }
  }

  back() {
    if (this.imageToShow > 0) {
      this.imageToShow --
    }
  }

  increase() {
    this.imageSize = this.imageSize + 50;
  }

  diminish() {
    this.imageSize = this.imageSize - 50;
  }

  playGallery() {
      this.setInterval = setInterval(() => {
        if (this.imageToShow < this.coversList.length - 1) {
          this.imageToShow ++
        } else {
          this.imageToShow = 0;
        }
      }, 2000);
  }

  stopGallery() {
    clearInterval(this.setInterval);
    this.setInterval = undefined;
  }

  nextPage() {
    if (this.fistValue < 6) {
      this.fistValue = this.fistValue + 3;
      this.lastValue = this.lastValue + 3;
    }
    
  }

  backPage() {
    if (this.fistValue > 0) {
      this.fistValue = this.fistValue - 3;
      this.lastValue = this.lastValue - 3;
    }
  }
}
