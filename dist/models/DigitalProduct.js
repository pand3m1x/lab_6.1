// These are items that are digital, like soundtracks, voice clips, (would it also include digital artwork?)
import { Product } from './Product.js';
// Similiar to Physical Products, we will make a digital version?
// export class physicalProduct extends Product {
//   weight: number;
//   constructor(sku: string, name: string, price: number, weight: number,){ //this is extending from the called upon Product Class
//     super(sku, name, price); // this is calling on from above ^
//     this.weight = weight; // and adding this extra tidbit to make Physical Products sparkle 
//   }
// }
export class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    // Override the getPriceWithTax() method to calculate a final price with no tax
    getPriceWithTax() {
        return this.price * 0;
        //10% tax
    }
    // getter function for megabytes
    get formattedFileSize() {
        return `${this.fileSize} MB`;
    }
}
