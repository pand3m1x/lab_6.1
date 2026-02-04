// This is the products that are physical (like furniture, crafted items, merchandise)?
import { Product } from './Product.js'; //this is how to import into other files :)  (Why is it so unhappy with me?)
// exporting the Physical Product class
export class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price); // this is calling on from above ^
        this.weight = weight; // and adding this adds weight
    }
    // override getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
    getPriceWithTax() {
        return this.price * 1.10;
    }
    //  getter method to return the formatted weight in kilograms (e.g. “2.5 kg”)
    get formattedWeight() {
        return `${this.weight} kg`;
    }
}
//do I need to add the display?
//override tax here https://dev.to/lioness100/introducing-typescript-override-keyword-4b36
//getter function 
