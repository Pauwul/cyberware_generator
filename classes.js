
class BaseProperty {
    constructor(name, priceModifier) {
      this.name = name;
      this.priceModifier = priceModifier;
    }
  }
  
  class Brand extends BaseProperty {
      constructor( rarity ){
          super();
          this.rarity = rarity;
      }
  }
  class Condition extends BaseProperty {}
  class CyberwareType {
      constructor(name, price){
          this.name = name;
          this.price = price;
      }
  }


class Cyberware {
    constructor(brand, condition, type, codename, price, rarity) {

      
      this.brand = brand;
      this.condition = condition;
      this.type = type;
      this.codename = codename;
      this.price = price;
      this.rarity = rarity;
    }
  
    toDownload() {
      return `Brand: ${this.brand} \nRarity:${this.rarity} \nCondition:${this.condition} \nPrice:${this.price} \nType:${this.type} \nCodename:${this.codename} \nPrice:${this.price}`;
    }
    toString() {
      return `<br>
              <br> <b>Brand</b>: ${this.brand} 
              <br> <b>Rarity</b>: ${this.rarity} 
              <br> <b>Condition</b>: ${this.condition} 
              <br> <b>Price</b>: ${this.price} 
              <br> <b>Type</b>: ${this.type} 
              <br> <b>Codename</b>: ${this.codename} 
              <br> <b>Price</b>: ${this.price}`;
    }
  }

/* 
  Aleg un obiect la intamplare.
    - Fiecare cu un likelyhood

    - Un type 
    
  Acel obiect trebuie sa aiba un base price.
  Apoi aleg la intamplare urmatoarele, care modifica pretul:
    - Brand ( Rarity )
    - Condition ()
    -

*/