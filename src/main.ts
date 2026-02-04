import {PhysicalProduct} from './models/PhysicalProduct.js'
import {DigitalProduct} from './models/DigitalProduct.js'
import {Product} from './models/Product.js'
import {calculateTax} from './utils/taxCalculator.js'


//Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
//Hint: Utilize polymorphism to your advantage here.

const myProducts: Product [] = [
  new PhysicalProduct ("PP001", "Large Haku Figurine", 75, 2),
  new DigitalProduct ("DP001", "Spirited Away Soundtrack", 25, 2),
]

for (const product of myProducts) {
  console.log(product.displayDetails())
  console.log(calculateTax(product))
}