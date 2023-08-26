// let - used to declare JavaScript variables 


// setInterval() function - makes the current market price, current value, and returns up to date 
// Basically, Math.random() function - generates a random value between 0 (inclusive) and 1 (exclusive)
setInterval(function() {
    //Market Cap = current market price of a share * number of shares outstanding
    //(Math.random() * 9.65) multiplies the random number by 9.65, which gives a random number between 0 and 9.65
    //(Math.random() * 9.65) + 1584128.00 adds the random number between 0 and 9.65 to 1584128.00, 
    //which gives a random number between 1584128.00 and 1584137.65.
    let market_cap_1 = (Math.random() * 9.65) + 525060.00; 
    //rounds the value to 2 decimal places
    let rounded_market_cap_1 = market_cap_1.toFixed(2);

    let market_cap_2 = (Math.random() * 8.55) + 527694.00;
    let rounded_market_cap_2 = market_cap_2.toFixed(2);
    
    let market_cap_3 = (Math.random() * 9.15) + 76277.00;
    let rounded_market_cap_3 = market_cap_3.toFixed(2);

    let market_cap_4 = (Math.random() * 8.75) + 643744.00;
    let rounded_market_cap_4 = market_cap_4.toFixed(2);

    let market_cap_5 = (Math.random() * 8.95) + 266523.00;
    let rounded_market_cap_5 = market_cap_5.toFixed(2);

    let market_cap_7 = (Math.random() * 9.35) + 288820.00;
    let rounded_market_cap_7 = market_cap_7.toFixed(2);

    let market_cap_9 = (Math.random() * 9.43) + 146334.00;
    let rounded_market_cap_9 = market_cap_9.toFixed(2);

    let market_cap_10 = (Math.random() * 8.88) + 166609.00;
    let rounded_market_cap_10 = market_cap_10.toFixed(2);

    let market_cap_13 = (Math.random() * 9.27) + 50250.00;
    let rounded_market_cap_13 = market_cap_13.toFixed(2);

    let market_cap_14 = (Math.random() * 9.65) + 13859.00;
    let rounded_market_cap_14 = market_cap_14.toFixed(2);

    let market_cap_15 = (Math.random() * 9.65) + 9016.00; 
    let rounded_market_cap_15 = market_cap_15.toFixed(2);

    let market_cap_16 = (Math.random() * 8.55) + 10339.00;
    let rounded_market_cap_16 = market_cap_16.toFixed(2);
    
    let market_cap_17 = (Math.random() * 9.15) + 7090.00;
    let rounded_market_cap_17 = market_cap_17.toFixed(2);

    let market_cap_18 = (Math.random() * 8.75) + 52640.00;
    let rounded_market_cap_18 = market_cap_18.toFixed(2);

    let market_cap_19 = (Math.random() * 8.95) + 233695.00;
    let rounded_market_cap_19 = market_cap_19.toFixed(2);

    let market_cap_20 = (Math.random() * 9.35) + 82547.00;
    let rounded_market_cap_20 = market_cap_20.toFixed(2);

    let market_cap_21 = (Math.random() * 9.43) + 32603.00;
    let rounded_market_cap_21 = market_cap_21.toFixed(2);

    let market_cap_22 = (Math.random() * 8.88) + 1656217.00;
    let rounded_market_cap_22 = market_cap_22.toFixed(2);

    let market_cap_23 = (Math.random() * 9.27) + 386240.00;
    let rounded_market_cap_23 = market_cap_23.toFixed(2);

    let market_cap_24 = (Math.random() * 9.65) + 18073.00;
    let rounded_market_cap_24 = market_cap_24.toFixed(2);

    let market_cap_25 = (Math.random() * 9.65) + 41181.00; 
    let rounded_market_cap_25 = market_cap_25.toFixed(2);

    let market_cap_26 = (Math.random() * 8.55) + 526790.00;
    let rounded_market_cap_26 = market_cap_26.toFixed(2);
    
    let market_cap_27 = (Math.random() * 9.15) + 75348.00;
    let rounded_market_cap_27 = market_cap_27.toFixed(2);

    let market_cap_28 = (Math.random() * 8.75) + 8380.00;
    let rounded_market_cap_28 = market_cap_28.toFixed(2);

    let market_cap_29 = (Math.random() * 8.95) + 4631.00;
    let rounded_market_cap_29 = market_cap_29.toFixed(2);

    let market_cap_31 = (Math.random() * 9.35) + 387421.00;
    let rounded_market_cap_31 = market_cap_31.toFixed(2);

    let market_cap_32 = (Math.random() * 9.43) + 31912.00;
    let rounded_market_cap_32 = market_cap_32.toFixed(2);

    let market_cap_33 = (Math.random() * 8.88) + 265778.00;
    let rounded_market_cap_33 = market_cap_33.toFixed(2);

    let market_cap_34 = (Math.random() * 9.27) + 11268.00;
    let rounded_market_cap_34 = market_cap_34.toFixed(2);

    let market_cap_35 = (Math.random() * 9.65) + 517628.00;
    let rounded_market_cap_35 = market_cap_35.toFixed(2);

    let market_cap_36 = (Math.random() * 9.43) + 88033.00;
    let rounded_market_cap_36 = market_cap_36.toFixed(2);

    let market_cap_37 = (Math.random() * 8.88) + 101844.00;
    let rounded_market_cap_37 = market_cap_37.toFixed(2);

    let market_cap_38 = (Math.random() * 9.27) + 588984.00;
    let rounded_market_cap_38 = market_cap_38.toFixed(2);

    let market_cap_39 = (Math.random() * 9.65) + 5639.00;
    let rounded_market_cap_39 = market_cap_39.toFixed(2);


    //document.getElementById('market-cap-1').textContent accesses the text content of the HTML element with the ID 
    //market-cap-1.
    document.getElementById('market-cap-1').textContent = rounded_market_cap_1;
    document.getElementById('market-cap-2').textContent = rounded_market_cap_2;
    document.getElementById('market-cap-3').textContent = rounded_market_cap_3;
    document.getElementById('market-cap-4').textContent = rounded_market_cap_4;
    document.getElementById('market-cap-5').textContent = rounded_market_cap_5;
    document.getElementById('market-cap-7').textContent = rounded_market_cap_7;
    document.getElementById('market-cap-9').textContent = rounded_market_cap_9;
    document.getElementById('market-cap-10').textContent = rounded_market_cap_10;
    document.getElementById('market-cap-13').textContent = rounded_market_cap_13;
    document.getElementById('market-cap-14').textContent = rounded_market_cap_14;
    document.getElementById('market-cap-15').textContent = rounded_market_cap_15;
    document.getElementById('market-cap-16').textContent = rounded_market_cap_16;
    document.getElementById('market-cap-17').textContent = rounded_market_cap_17;
    document.getElementById('market-cap-18').textContent = rounded_market_cap_18;
    document.getElementById('market-cap-19').textContent = rounded_market_cap_19;
    document.getElementById('market-cap-20').textContent = rounded_market_cap_20;
    document.getElementById('market-cap-21').textContent = rounded_market_cap_21;
    document.getElementById('market-cap-22').textContent = rounded_market_cap_22;
    document.getElementById('market-cap-23').textContent = rounded_market_cap_23;
    document.getElementById('market-cap-24').textContent = rounded_market_cap_24;
    document.getElementById('market-cap-25').textContent = rounded_market_cap_25;
    document.getElementById('market-cap-26').textContent = rounded_market_cap_26;
    document.getElementById('market-cap-27').textContent = rounded_market_cap_27;
    document.getElementById('market-cap-28').textContent = rounded_market_cap_28;
    document.getElementById('market-cap-29').textContent = rounded_market_cap_29;
    document.getElementById('market-cap-31').textContent = rounded_market_cap_31;
    document.getElementById('market-cap-32').textContent = rounded_market_cap_32;
    document.getElementById('market-cap-33').textContent = rounded_market_cap_33;
    document.getElementById('market-cap-34').textContent = rounded_market_cap_34;
    document.getElementById('market-cap-35').textContent = rounded_market_cap_35;
    document.getElementById('market-cap-36').textContent = rounded_market_cap_36;
    document.getElementById('market-cap-37').textContent = rounded_market_cap_37;
    document.getElementById('market-cap-38').textContent = rounded_market_cap_38;
    document.getElementById('market-cap-39').textContent = rounded_market_cap_39;


    // Current Market Price of each share
    let price1 = (Math.random() * 2.50) + 2702.30; // generate a random price between 2702.30 (inclusive) and 2704.49 (exclusive)
    let rounded_price1 = price1.toFixed(2); // round the price A value to 2 decimals

    let price2 = (Math.random() * 2.25) + 428.75; 
    let rounded_price2 = price2.toFixed(2) 

    let price3 = (Math.random() * 2.75) + 6814.40; 
    let rounded_price3 = price3.toFixed(2); 

    let price4 = (Math.random() * 2.05) + 926.95; 
    let rounded_price4 = price4.toFixed(2); 

    let price5 = (Math.random() * 2.95) + 865.30;
    let rounded_price5 = price5.toFixed(2); 

    let price7 = (Math.random() * 2.15) + 1055.55; 
    let rounded_price7 = price7.toFixed(2);

    let price9 = (Math.random() * 2.35) + 237.40; 
    let rounded_price9 = price9.toFixed(2);

    let price10 = (Math.random() * 2.80) + 241.05; 
    let rounded_price10 = price10 .toFixed(2); 

    let price13 = (Math.random() * 2.45) + 2547.25; 
    let rounded_price13 = price13.toFixed(2); 

    let price14 = (Math.random() * 2.65) + 158.25; 
    let rounded_price14 = price14.toFixed(2); 

    let price15 = (Math.random() * 2.50) + 601.40; 
    let rounded_price15 = price15.toFixed(2); 

    let price16 = (Math.random() * 2.25) + 990.45; 
    let rounded_price16 = price16.toFixed(2) 

    let price17 = (Math.random() * 2.75) + 1380.00; 
    let rounded_price17 = price17.toFixed(2); 

    let price18 = (Math.random() * 2.05) + 517.00; 
    let rounded_price18 = price18.toFixed(2); 

    let price19 = (Math.random() * 2.95) + 970.45;
    let rounded_price19 = price19.toFixed(2); 

    let price20 = (Math.random() * 2.15) + 4942.55; 
    let rounded_price20 = price20.toFixed(2);

    let price21 = (Math.random() * 2.35) + 108.25; 
    let rounded_price21 = price21.toFixed(2);

    let price22 = (Math.random() * 2.80) + 2441.75; 
    let rounded_price22 = price22 .toFixed(2); 

    let price23 = (Math.random() * 2.45) + 6389.85 
    let rounded_price23 = price23.toFixed(2); 

    let price24 = (Math.random() * 2.65) + 704.70 
    let rounded_price24 = price24.toFixed(2); 

    let price25 = (Math.random() * 2.50) + 2139.20; 
    let rounded_price25 = price25.toFixed(2); 

    let price26 = (Math.random() * 2.25) + 1259.10; 
    let rounded_price26 = price26.toFixed(2) 

    let price27 = (Math.random() * 2.75) + 924.80; 
    let rounded_price27 = price27.toFixed(2); 

    let price28 = (Math.random() * 2.05) + 660.75; 
    let rounded_price28 = price28.toFixed(2); 

    let price29 = (Math.random() * 2.95) + 4777.65;
    let rounded_price29 = price29.toFixed(2); 

    let price31 = (Math.random() * 2.15) + 1928.70; 
    let rounded_price31 = price31.toFixed(2);

    let price32 = (Math.random() * 2.35) + 3655.90; 
    let rounded_price32 = price32.toFixed(2);

    let price33 = (Math.random() * 2.80) + 8948.65; 
    let rounded_price33 = price33 .toFixed(2); 

    let price34 = (Math.random() * 2.45) + 37.70; 
    let rounded_price34 = price34.toFixed(2); 

    let price35 = (Math.random() * 2.65) + 576.50; 
    let rounded_price35 = price35.toFixed(2);

    let price36 = (Math.random() * 2.35) + 1073.30; 
    let rounded_price36 = price36.toFixed(2);

    let price37 = (Math.random() * 2.80) + 1036.40; 
    let rounded_price37 = price37 .toFixed(2); 

    let price38 = (Math.random() * 2.45) + 2500.75; 
    let rounded_price38 = price38.toFixed(2); 

    let price39 = (Math.random() * 2.65) + 4936.65; 
    let rounded_price39 = price39.toFixed(2);



    // document.getElementbyID() - function that select and access an HTML element based on unique ID
    document.getElementById('price-1').textContent = rounded_price1;
    document.getElementById('price-2').textContent = rounded_price2;
    document.getElementById('price-3').textContent = rounded_price3;
    document.getElementById('price-4').textContent = rounded_price4;
    document.getElementById('price-5').textContent = rounded_price5;
    document.getElementById('price-7').textContent = rounded_price7;
    document.getElementById('price-9').textContent = rounded_price9;
    document.getElementById('price-10').textContent = rounded_price10;
    document.getElementById('price-13').textContent = rounded_price13;
    document.getElementById('price-14').textContent = rounded_price14;
    document.getElementById('price-15').textContent = rounded_price15;
    document.getElementById('price-16').textContent = rounded_price16;
    document.getElementById('price-17').textContent = rounded_price17;
    document.getElementById('price-18').textContent = rounded_price18;
    document.getElementById('price-19').textContent = rounded_price19;
    document.getElementById('price-20').textContent = rounded_price20;
    document.getElementById('price-21').textContent = rounded_price21;
    document.getElementById('price-22').textContent = rounded_price22;
    document.getElementById('price-23').textContent = rounded_price23;
    document.getElementById('price-24').textContent = rounded_price24;
    document.getElementById('price-25').textContent = rounded_price25;
    document.getElementById('price-26').textContent = rounded_price26;
    document.getElementById('price-27').textContent = rounded_price27;
    document.getElementById('price-28').textContent = rounded_price28;
    document.getElementById('price-29').textContent = rounded_price29;
    document.getElementById('price-31').textContent = rounded_price31;
    document.getElementById('price-32').textContent = rounded_price32;
    document.getElementById('price-33').textContent = rounded_price33;
    document.getElementById('price-34').textContent = rounded_price34;
    document.getElementById('price-35').textContent = rounded_price35;
    document.getElementById('price-36').textContent = rounded_price36;
    document.getElementById('price-37').textContent = rounded_price37;
    document.getElementById('price-38').textContent = rounded_price38;
    document.getElementById('price-39').textContent = rounded_price39;

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