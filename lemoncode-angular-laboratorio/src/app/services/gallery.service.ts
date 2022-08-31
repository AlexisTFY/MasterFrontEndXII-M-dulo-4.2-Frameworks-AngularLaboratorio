import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  covers = [
    { 
      name: 'Spiderman 01',
      src: 'assets/gfx/gallery/spiderman01.jpg' 
    },
    { 
      name: 'Spiderman 02',
      src: 'assets/gfx/gallery/spiderman02.jpg' 
    },
    { 
      name: 'Spiderman 03',
      src: 'assets/gfx/gallery/spiderman03.jpg' 
    },
    { 
      name: 'Spiderman 04',
      src: 'assets/gfx/gallery/spiderman04.jpg' 
    },
    { 
      name: 'Spiderman 05',
      src: 'assets/gfx/gallery/spiderman05.jpg' 
    },
    { 
      name: 'Spiderman 06',
      src: 'assets/gfx/gallery/spiderman06.jpg' 
    },
    { 
      name: 'Spiderman 07',
      src: 'assets/gfx/gallery/spiderman07.jpg' 
    },
    { 
      name: 'Spiderman 08',
      src: 'assets/gfx/gallery/spiderman08.jpg' 
    },
    { 
      name: 'Spiderman 09',
      src: 'assets/gfx/gallery/spiderman09.jpg' 
    }
  ]
  constructor() { }

  getCoversList() {
    return this.covers;
  }
  
}
