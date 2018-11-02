//Business Logic:

function Pizza (size, topping){
  this.size = ["small", "medium", "large"];
  this.topping = ["pepperoni", "sausage", "cheese", "jalapenio", "chicken", "tomato"];
  // this.finalPrice = yourPizza;
}

Pizza.prototype.Price = function(){
  var sizePrice = 12;
  var sizeSelection = ["small", "medium", "large"];

  if (sizeSelection === "small"){
    sizePrice + 0;
  }
  else if (sizeSelection === "medium") {
    sizePrice + 5;
  } else if (sizeSelection === "large") {
    sizePrice + 10;
  }
  // console.log(sizePrice);
}


Pizza.prototype.toppingPrice = function(){
  var toppingSelection = ["pepperoni", "sausage", "cheese", "jalapenio", "chicken", "tomato"];
  var costOfTopping = 1.5;

  for (var i = 0 ; i < toppingSelection.length; i ++) {

    if (toppingSelection[i] === 0) {
      costOfTopping + 0;
    } else if (toppingSelection[i] === 1) {
      costOfTopping + 3;
    } else if (toppingSelection[i] === 2) {
      costOfTopping + 5;
    } else if (toppingSelection[i] === 3) {
      costOfTopping + 6;
    } else if (toppingSelection[i] === 4) {
      costOfTopping + 7;
    } else if (toppingSelection[i] === 5) {
      costOfTopping + 8;
    }

  }
  // console.log(costOfTopping);
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
