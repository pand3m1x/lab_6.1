// These are items that are digital, like soundtracks, voice clips, (would it also include digital artwork?)

import {Product} from './Product.js' 

// Similiar to Physical Products, we will make a digital version?

// export class physicalProduct extends Product {

//   weight: number;

//   constructor(sku: string, name: string, price: number, weight: number,){ //this is extending from the called upon Product Class

//     super(sku, name, price); // this is calling on from above ^
//     this.weight = weight; // and adding this extra tidbit to make Physical Products sparkle 
//   }
// }

export class digitalProduct extends Product {
  fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number,){
    
    super(sku, name, price);
    this.fileSize = fileSize;
  }
}