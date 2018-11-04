//Business Logic:


function Pizza (size, topping, price, price2){
  this.size = size,
  this.topping = topping,
  this.priceSize = 0,
  this.priceTopping = 0,
  this.sizeList = ["small", "medium", "large"];
  this.toppingList = ["pepperoni", "sausage", "cheese", "jalapenio", "chicken", "tomato"];
}

Pizza.prototype.price = function(){
  var sizeSelection = this.size
  var sizePrice = this.priceSize;

    if (this.size === "Small") {
      sizePrice += 12
    }
    else if (this.size === "Medium") {
      sizePrice += 17
    }
    else if (this.size === "Large") {
      sizePrice += 22
    }
    return sizePrice;
}


Pizza.prototype.toppingPrice = function(){
  var toppingSelection = this.topping;
  var costOfTopping = this.priceTopping;

  for (var i = 0 ; i < toppingSelection.length; i ++) {
    if (toppingSelection[i] === "pepperoni") {
      costOfTopping += 1.5;
    } else if (toppingSelection[i] === "sausage") {
      costOfTopping += 4.5;
    } else if (toppingSelection[i] === "cheese") {
      costOfTopping += 6.5;
    } else if (toppingSelection[i] === "jalapenio") {
      costOfTopping += 7.5;
    } else if (toppingSelection[i] === "chicken") {
      costOfTopping += 8.5;
    } else if (toppingSelection[i] === "tomato") {
      costOfTopping += 9.5;
    }

  }
    return costOfTopping;
}

//User interface logic:

$(document).ready(function() {

  $("form.questions").submit(function(event) {
    event.preventDefault();

    var inputSize = $("#pizzaSize").val();

      var toppings = document.getElementById("#toppings");
      var tops = toppings.getElementsByTagName("INPUT");
      for (var i=0; i < tops.length; i ++){
        if (tops[i].type === 'checkbox') {
          tops[i].onclick = function(){
            inputToppings.push(checkedValue);
          }
        }
      }

    var inputToppings = [];

    var userPizza = new Pizza(inputSize, inputToppings);

    displayResults(userPizza);

  });

  function displayResults(pizzaResults){
    var pizzaSizePriceResults = pizzaResults.price();
    var pizzaToppingPriceResults = pizzaResults.toppingPrice();

    $("#result").text(pizzaSizePriceResults);
    $("#result2").text(pizzaToppingPriceResults);

  }

});
