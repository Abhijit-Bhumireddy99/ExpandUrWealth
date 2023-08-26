// let - used to declare JavaScript variables 


// setInterval() function - makes the current market price, current value, and returns up to date 
  // Basically, Math.random() function - generates a random value between 0 (inclusive) and 1 (exclusive)
  setInterval(function() {
    // Nifty 50 Market Index
    let nifty_50 = 17591.15; // nifty 50 index price at start of the trading day
    let nifty_50_percent_change = (Math.random() * 0.31 - 0.15) / 100; // generate a random percentage change between -0.15% (inclusive) and 0.16% (exclusive)
    let nifty_50_price_change = nifty_50 * nifty_50_percent_change; // value of nifty_50 changes according to nifty_50_percent_change
    let new_nifty_50 = nifty_50 + nifty_50_price_change; // new nifty_50 value
    let rounded_new_nifty_50 = new_nifty_50.toFixed(2); // round the new nifty_50 value to 2 decimals
    let color_nifty = nifty_50_percent_change >= 0 ? "green" : "red"; // green color if +ve percent change, and red color if -ve percent change
    let rounded_nifty_50 = rounded_new_nifty_50 + " " + (nifty_50_price_change >= 0 ? "+" : "-") + Math.abs(nifty_50_price_change).toFixed(2) + " (" + (nifty_50_percent_change * 100).toFixed(2) + "%)";
    document.getElementById("index1-price").style.color = color_nifty;
    document.getElementById("index1-price").innerHTML = rounded_nifty_50;

     // Sensex Market Index
     let sensex = 59832.97; // sensex index price at start of the trading day
     let sensex_percent_change = (Math.random() * 0.29 - 0.14) / 100; // generate a random percentage change between -0.14% (inclusive) and 0.15% (exclusive)
     let sensex_price_change = sensex * sensex_percent_change; // value of sensex changes according to sensex_percent_change
     let new_sensex = sensex + sensex_price_change; // new sensex value
     let rounded_new_sensex = new_sensex.toFixed(2); // round the new sensex value to 2 decimals
     let color_sensex = sensex_percent_change >= 0 ? "green" : "red"; // green color if +ve percent change, and red color if -ve percent change
     let rounded_sensex = rounded_new_sensex + " " + (sensex_price_change >= 0 ? "+" : "-") + Math.abs(sensex_price_change).toFixed(2) + " (" + (sensex_percent_change * 100).toFixed(2) + "%)";
     document.getElementById("index2-price").style.color = color_sensex;
     document.getElementById("index2-price").innerHTML = rounded_sensex;
 
     // Bank Nifty Market Index
     let bank_nifty = 41041.00; // sensex index price at start of the trading day
     let bank_nifty_percent_change = (Math.random() * 0.21 + 0.30) / 100; // generate a random percentage change between 0.30% (inclusive) and 0.51% (exclusive)
     let bank_nifty_price_change = bank_nifty * bank_nifty_percent_change; // value of bank_nifty changes according to bank_nifty_percent_change
     let new_bank_nifty = bank_nifty + bank_nifty_price_change; // new bank_nifty value
     let rounded_new_bank_nifty = new_bank_nifty.toFixed(2); // round the new bank_nifty value to 2 decimals
     let color_bank_nifty = bank_nifty_percent_change >= 0 ? "green" : "red"; // green color if +ve percent change, and red color if -ve percent change
     let rounded_bank_nifty = rounded_new_bank_nifty + " " + (bank_nifty_price_change >= 0 ? "+" : "-") + Math.abs(bank_nifty_price_change).toFixed(2) + " (" + (bank_nifty_percent_change * 100).toFixed(2) + "%)";
     document.getElementById("index3-price").style.color = color_bank_nifty;
     document.getElementById("index3-price").innerHTML = rounded_bank_nifty;

     let market_cap_1 = (Math.random() * 9.65) + 58751.00; 
     //rounds the value to 2 decimal places
     let rounded_market_cap_1 = market_cap_1.toFixed(2);
 
     let market_cap_2 = (Math.random() * 8.55) + 7533.00;
     let rounded_market_cap_2 = market_cap_2.toFixed(2);
     
     let market_cap_3 = (Math.random() * 9.15) + 2099.00;
     let rounded_market_cap_3 = market_cap_3.toFixed(2);
 
     let market_cap_4 = (Math.random() * 8.75) + 65137.00;
     let rounded_market_cap_4 = market_cap_4.toFixed(2);
 
     let market_cap_5 = (Math.random() * 8.95) + 455553.00;
     let rounded_market_cap_5 = market_cap_5.toFixed(2);


    //document.getElementById('market-cap-1').textContent accesses the text content of the HTML element with the ID 
    //market-cap-1.
    document.getElementById('market-cap-1').textContent = rounded_market_cap_1;
    document.getElementById('market-cap-2').textContent = rounded_market_cap_2;
    document.getElementById('market-cap-3').textContent = rounded_market_cap_3;
    document.getElementById('market-cap-4').textContent = rounded_market_cap_4;
    document.getElementById('market-cap-5').textContent = rounded_market_cap_5;

    // Current Market Price of each share
    let price1 = (Math.random() * 2.50) + 318.55; // generate a random price between 2702.30 (inclusive) and 2704.49 (exclusive)
    let rounded_price1 = price1.toFixed(2); // round the price A value to 2 decimals

    let price2 = (Math.random() * 2.25) + 369.50; 
    let rounded_price2 = price2.toFixed(2) 

    let price3 = (Math.random() * 2.75) + 540.40; 
    let rounded_price3 = price3.toFixed(2); 

    let price4 = (Math.random() * 2.05) + 200.15; 
    let rounded_price4 = price4.toFixed(2); 

    let price5 = (Math.random() * 2.95) + 787.30;
    let rounded_price5 = price5.toFixed(2); 


    // document.getElementbyID() - function that select and access an HTML element based on unique ID
    document.getElementById('price-1').textContent = rounded_price1;
    document.getElementById('price-2').textContent = rounded_price2;
    document.getElementById('price-3').textContent = rounded_price3;
    document.getElementById('price-4').textContent = rounded_price4;
    document.getElementById('price-5').textContent = rounded_price5;    

}, 1000); // function calling for every 1 second or 1000 milliseconds


// Buy / Sell Pop-Up Window
// retrieve the modal
var modal = document.querySelector(".modal");

// retrive <span> element that closes the modal
var closeBtn = document.querySelector(".close");

// retrieve the Buy and Sell buttons
var buyButton = document.querySelector(".buy-button");
var sellButton = document.querySelector(".sell-button");

// if user clicks on a stock row, display modal
var stockRows = document.querySelectorAll(".stock-row");
stockRows.forEach(function(stockRow) {
  stockRow.addEventListener("click", function() {
    var stockSymbol = this.getAttribute("data-stock");
    var stockName = stockSymbol;
    var modalHeader = document.querySelector(".stock-name");
    modalHeader.textContent = stockName;
    modalHeader.addEventListener("click", function() {
      window.location.href = "company-details-and-fundamentals.html?symbol=" + stockSymbol;
    });
    //const urlParams = new URLSearchParams(window.location.search);
    //const symbol = urlParams.get("symbol");
    //const company = companyDetails[symbol];
    modal.style.display = "block";
  });
});

// add event listeners for the Buy and Sell buttons
buyButton.addEventListener("click", function() {
  // get the order details
  var stockName = document.querySelector(".stock-name").textContent;
  var quantity = parseInt(document.querySelector("#quantity").value);
  var orderType = "Buy";
  
  // check if quantity is greater than zero
  if (quantity > 0) {
    // ask for confirmation before executing the buy order
    var confirmation = window.confirm("Are you sure you want to execute the buy order?");
    if (confirmation) {
      // redirect to the orders.ejs page with the order details as query parameters
      window.location.href = "/orders?stockName=" + stockName + "&quantity=" + quantity + "&orderType=" + orderType;
    }
  } else {
    // display an alert message if quantity is zero
    alert("Quantity should be more than zero.");
  }
});

sellButton.addEventListener("click", function() {
  // get the order details
  var stockName = document.querySelector(".stock-name").textContent;
  var quantity = parseInt(document.querySelector("#quantity").value);
  var orderType = "Sell";
  
  // check if quantity is greater than zero
  if (quantity > 0) {
    // ask for confirmation before executing the sell order
    var confirmation = window.confirm("Are you sure you want to execute the sell order?");
    if (confirmation) {
      // redirect to the orders.ejs page with the order details as query parameters
      window.location.href = "/orders?stockName=" + stockName + "&quantity=" + quantity + "&orderType=" + orderType;
    }
  } else {
    // display an alert message if quantity is zero
    alert("Quantity should be more than zero.");
  }
});

// if user clicks on <span> element (i.e. close symbol, X), close the modal
if (closeBtn) {
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});
}