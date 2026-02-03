// This is the products that are physical (like furniture, crafted items, merchandise)?

import {Product} from './Product' //this is how to import into other files :)  (Why is it so unhappy with me?)

// exporting the Physical Product class
export class PhysicalProduct extends Product {

  weight: number;

  constructor(sku: string, name: string, price: number, weight: number,){ //this is extending from the called upon Product Class

    super(sku, name, price); // this is calling on from above ^
    this.weight = weight; // and adding this extra tidbit to make Physical Products sparkle 
  }
  //do I need to add the display?

  //override tax here https://dev.to/lioness100/introducing-typescript-override-keyword-4b36

  //getter function 
}