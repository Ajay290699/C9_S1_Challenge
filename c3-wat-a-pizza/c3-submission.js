//Declaring variables 
let customerName =  "Gary";
let customerEmail = "gary@123.com";
let phoneNo = "14123123435";
let address = "20, Marble Drive, Eville";
let noOfPizzasOrdered = 10;
let pizzaPrice = 12.5;
let pizzaSize = "M";
let noOfGarlicBreadOrdered = 5;
let garlicBreadPrice = 5.99;
let noOfBeveragesOrdered = 10;
let beveragePrice  = 1.99;

// define function displayCustomerDetails() to display the details of customer passed as parameters.
function displayCustomerDetails(name, email, phoneNo, address){
    console.log("Customer Name : "+name);
    console.log("Customer email : "+email);
    console.log("Customer phone NO : "+phoneNo);
    console.log("Customer address : "+address);
} 

// define funciton displayMenu() to raise an alert that displays the menu with 
// category, item names and price
 function displayMenu(){
    console.log("select the items to order \n -------------------------1) Pizza\n Price of one regular pizza: $9.99\n  Price of one medium pizza: $11.99\n  Price of one large pizza: $9.99\n2) Garlic Bread\n  Price of one Garlic Bread: $5.99\n   3) Beverages\n  Price of one Beverage: $1.99")
 }

// define function getPriceOfPizzaBasedOnSize() to return price of pizza for the 
// size passed as parameter.
function getPriceOfPizzaBasedOnSize(Size){
    priceOfPizza=0;
switch(pizzaSize){
    case 1: 
        priceOfPizza = 9.99;
        break;
    case 2:
        priceOfPizza = 11.99;
        break;
    case 3: 
        priceOfPizza = 13.99;
        break;
    default:  
        alert('Invalid size, Enter 1,2 or 3');
        priceOfPizza = 0;
        break;
   } 

   return console.log(priceOfPizza);
}


// define function getPriceOfGarlicBread() to return price of garlic bread as 5.99.
function getPriceOfGarlicBread(){
    console.log(5.99);
}


// define function getPriceOfBeverage() to return price of beverage as 1.99.
function getPriceOfBeverage(){
    console.log(1.99);
}


// define function calculatePrice() to return cost of items ordered for the 
// no of items and price passed as parameters.
function calculatePrice(noOfItems, price){
    let totalPrice  = noOfItems * price;

    return totalPrice;
}

// define function calculateTotalBill() to return total bill amount from the 
// total price of pizza, garlic bread and beverages ordered 
function calculateTotalBill( totalPizzaPrice,totalGarlicBreadPrice,totalBeveragePrice) {
    return totalPizzaPrice + totalBeveragePrice + totalGarlicBreadPrice;
  }


// define function calculateDiscountAndReturnBillAmount() to return discounted amount 
// which will be calculated only if total bill is more than 50  
function calculateDiscountAndReturnBillAmount(totalBillAmount) {
    let discount = 0;
    if (totalBillAmount > 50) {
      discount = totalBillAmount - (totalBillAmount * 5) / 100;
    } else {
      discount = totalBillAmount;
    }
    return discount;
  }
 
// define function displayOrderDetails() to print the order details
function displayOrderDetails(
    noOfPizza,
    noOfGarlicBread,
    noOfBeverages,
    totalPrice,
    totalBillAmountAfterDiscount
  ) {
    console.log("Order Details ");
    console.log("-----------------");
    console.log("The number of pizzas ordered       : " + noOfPizza);
    console.log("The number of garlic bread ordered :" + noOfGarlicBread);
    console.log("The number of beverages ordered    :" + noOfBeverages);
    console.log("-----------------------------------------");
    console.log("The total bill amount is      :" + totalPrice);
    console.log(
      "The discounted bill amount is : " + totalBillAmountAfterDiscount
    );
  }

//Main Program

// call the functions to compute order amount and display order details
displayCustomerDetails("Ajay", "ajay@gmail",12563,"Mumbai");
console.log("-------------------------------------------------------")
displayOrderDetails(5,2,2,300,270);




