// This is the products that are physical (like furniture, crafted items, merchandise)?

import {Product} from './Product' //this is how to import into other files :)  (Why is it so unhappy with me?)

// exporting the Physical Product class
export class PhysicalProduct extends Product {

  weight: number;

  constructor(sku: string, name: string, price: number, weight: number,){ //this is extending from the called upon Product Class

    super(sku, name, price); // this is calling on from above ^
    this.weight = weight; // and adding this extra tidbit to make Physical Products sparkle 
  }
  // override getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
  displayDetails(): string {
    return `${this.name} costs $${this.price}, and weighs ${this.weight}.`;
  }
  //  getter method to return the formatted weight in kilograms (e.g. “2.5 kg”)
  get formattedWeight(): string { 
    return this.price * (Product.taxRate + 1.10);
  }

}  


  //do I need to add the display?

  //override tax here https://dev.to/lioness100/introducing-typescript-override-keyword-4b36

  //getter function 