//So are we making something like an Etsy or an Amazon?

// This is the basic function that allows products to be made and for taxes to be calculated?

// Properties: sku (string), name (string), price (number).
// Methods:
// displayDetails() - a method that returns a formatted string with the product’s details.
// getPriceWithTax() - a method that calculates the final price of the product with tax.

// "use strict";
// Object.defineProperty(exports,"_esModule",{value:true});
// exports.Product = void 0;  (This method is a little more complicated, use export/import in line of thing you want to import :) )

export class Product { // lesson 3
  static taxRate = 0.10; // taxRate isn't registering correctly

  sku: string;
  name: string;
  price: number;

constructor(sku: string, name: string, price: number,) {
  this.sku = sku;
  this.name = name;
  this.price = price;
}

displayDetails(): string {
return `${this.name} costs $${this.price}.`;
}

// get price(): number { // this line contains the method
//   return this.price * (Product.taxRate + 1); // this is what it does
// }
// set price(newBasePrice: number) {
//   this.price = newBasePrice;

getPriceWithTax(): number { // this will grab price with static tax from parent class
  return this.price * (Product.taxRate + 1);
 //10% tax
}
}
// set setPrice(newBasePrice: number) {
//   this.price = newBasePrice;
// }

// const product1 = new Product("");
// console.log(product1.displayDetails());

// getPriceWithTax()