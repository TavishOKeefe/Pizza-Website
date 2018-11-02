//Business Logic

function Pizza (){
  this.size = ["small", "medium", "large"];
  this.toppings = ["pepperoni", "sausage", "cheese", "jalapenio", "chicken", "tomato"];
}

Pizza.prototype.Price = function(){
  var sizePrice = 12;
  var sizeSelection = ["small", "medium", "large"];

  if (sizeSelection === "medium"){
    sizePrice + 5;
  } else if (sizeSelection === "large"){
    sizePrice + 10;
  }
  return sizePrice;
}

Pizza.prototype.toppingPrice = function(){
  var toppingSelection = ["pepperoni", "sausage", "cheese", "jalapenio", "chicken", "tomato"];
  var addedCostOfToppings = 1.5;

}
