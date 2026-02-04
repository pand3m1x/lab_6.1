import {PhysicalProduct} from '../models/PhysicalProduct.js'
import {DigitalProduct} from '../models/DigitalProduct.js'
import {Product} from '../models/Product.js'

//Add a function calculateTax() that accepts a Product object and returns the price including tax.


export function calculateTax(product:Product): number {
  return product.getPriceWithTax();
}