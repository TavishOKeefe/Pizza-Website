//Business Logic:


function Pizza (size, topping){
  this.size = size;
  this.topping = topping;
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.size = ["small", "medium", "large"];
  this.topping = ["pepperoni", "sausage", "cheese", "jalapenio", "chicken", "tomato"];
}

Pizza.prototype.price = function(){
  var sizePrice = this.size;
  var sizeSelection = ["small", "medium", "large"];

  for (var i = 0 ; i < sizeSelection.length; i++){

  if (sizeSelection[i] === 0){
    sizePrice + 12;
  }
  else if (sizeSelection[i] === 1) {
    sizePrice + 17;
  } else if (sizeSelection[i] === 2) {
    sizePrice + 22;
  }
  return sizePrice;
}
}


Pizza.prototype.toppingPrice = function(){
  var toppingSelection = ["pepperoni", "sausage", "cheese", "jalapenio", "chicken", "tomato"];
  var costOfTopping = this.toppingPrice;

  for (var i = 0 ; i < toppingSelection.length; i ++) {

    if (toppingSelection[i] === 0) {
      costOfTopping + 1.5;
    } else if (toppingSelection[i] === 1) {
      costOfTopping + 4.5;
    } else if (toppingSelection[i] === 2) {
      costOfTopping + 6.5;
    } else if (toppingSelection[i] === 3) {
      costOfTopping + 7.5;
    } else if (toppingSelection[i] === 4) {
      costOfTopping + 8.5;
    } else if (toppingSelection[i] === 5) {
      costOfTopping + 9.5;
    }

  }
  return this.toppingPrice;
}

//User interface logic:

$(document).ready(function() {
  $("form.questions").submit(function(event) {
    event.preventDefault();

    var inputSize = $("#size").val();
    var inputToppings = document.getElementById("#toppings");

    var userPizza = new Pizza (inputSize, inputToppings);
    var finalPrice = Pizza(userPizza);

    $("#result").text(finalPrice);

  });
});
