//Business Logic:

function Pizza (size, topping, price) {
  this.size = size,
  this.topping = topping,
  this.priceSize = 0
}

Pizza.prototype.price = function(){
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

    if (this.topping === "Vegitarian"){
      sizePrice += 10
    }
    else if (this.topping === "Meat-Lovers"){
      sizePrice += 12
    }
    else if (this.topping === "Vegan"){
      sizePrice += 14
    }
    return sizePrice;
}

//User interface logic:

$(document).ready(function() {

  $("form.questions").submit(function(event) {
    event.preventDefault();

    var inputSize = $("#pizzaSize").val();
    var inputToppings = $("#pizzaType").val();
    var userPizza = new Pizza(inputSize, inputToppings);

    displayResults(userPizza);

  });

  function displayResults(pizzaResults){
    var pizzaSizePriceResults = pizzaResults.price();

    $("#result").text(pizzaSizePriceResults);
  }

});
