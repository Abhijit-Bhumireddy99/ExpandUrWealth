// Returns in % = ( (Current value - Investment value) / Investment value ) * 100
let invest_value_1_mf = document.getElementById('invest-mf-1').textContent;
let current_value_1_mf = document.getElementById('current-mf-1').textContent;
let returns_1_mf_percent = ( (current_value_1_mf - invest_value_1_mf) / invest_value_1_mf ) * 100;
let returns_1_mf_percent_rounded = returns_1_mf_percent.toFixed(2);
document.getElementById('returns-mf-1-percent').textContent = "+" + returns_1_mf_percent_rounded;

let invest_value_2_mf = document.getElementById('invest-mf-2').textContent;
let current_value_2_mf = document.getElementById('current-mf-2').textContent;
let returns_2_mf_percent = ( (current_value_2_mf - invest_value_2_mf) / invest_value_2_mf ) * 100;
let returns_2_mf_percent_rounded = returns_2_mf_percent.toFixed(2);
document.getElementById('returns-mf-2-percent').textContent = returns_2_mf_percent_rounded;


// Returns in ₹ = (Returns % * Investment value)
let returns_1_mf = (returns_1_mf_percent_rounded / 100) * invest_value_1_mf;
document.getElementById('returns-mf-1').textContent = "+" + returns_1_mf.toFixed(0);

let returns_2_mf = (returns_2_mf_percent_rounded / 100) * invest_value_2_mf;
document.getElementById('returns-mf-2').textContent = returns_2_mf.toFixed(0);


// Total Investment Value = Investment 1 + Investment 2 + ------- + Investment n
// Number() - function converts any object value to numeric value
let total_invest_value_mf = Number(invest_value_1_mf) + Number(invest_value_2_mf);
document.getElementById('total-investment').textContent = total_invest_value_mf


// Total Current Value = current value 1 + current value 2 + ------- + current value n
// Number() - funtion converts any object value to numeric value
let total_current_value_mf = Number(current_value_1_mf) + Number(current_value_2_mf);
document.getElementById('total-current').textContent = total_current_value_mf;


// Total Returns (₹) = Total Current Value - Total Investment Value
let total_returns_mf = total_current_value_mf - total_invest_value_mf;
document.getElementById('total-returns').textContent = "+" + total_returns_mf;


// Total Returns (%) = ( (Total Current Value - Total Investment Value) / Total Investment Value ) * 100
let total_returns_percent_mf = ( (total_current_value_mf - total_invest_value_mf) / total_invest_value_mf ) * 100;
document.getElementById('total-returns-percent').textContent = "+" + total_returns_percent_mf.toFixed(2);


// One Time Invest or SIP Invest Pop-Up Window
// retrieve the modal
var modal = document.querySelector(".modal");

// retrive <span> element that closes the modal
var closeBtn = document.querySelector(".close");

// retrieve the One Time Invest and SIP Invest buttons
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
      window.location.href = "mutual_fund_details.html?symbol=" + stockSymbol;
    });
    //const urlParams = new URLSearchParams(window.location.search);
    //const symbol = urlParams.get("symbol");
    //const company = companyDetails[symbol];
    modal.style.display = "block";
  });
});

// if user clicks on <span> element (i.e. close symbol, X), close the modal
if (closeBtn) {
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});
}




 
  
