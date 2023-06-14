// let - used to declare JavaScript variables 

function getReturnsPercent(current_price, investment_price) {
  return ((current_price - investment_price) / investment_price) * 100;
}

function initialInvestmentValue(shares_owned, money_invested_per_share) {
  return (shares_owned * money_invested_per_share);
}

function getReturnsRupee(current, original) {
  return (current - original);
}

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


    // Current Market Price of each share
    let priceA = (Math.random() * 2.50) + 130; // generate a random price between 130 (inclusive) and 132.50 (exclusive)
    let rounded_priceA = priceA.toFixed(2); // round the price A value to 2 decimals
    let priceB = (Math.random() * 2.25) + 155; // generate a random price between 155 (inclusive) and 157.25 (exclusive)
    let rounded_priceB = priceB.toFixed(2) // round the price B value to 2 decimals
    let priceC = (Math.random() * 2.75) + 407.25; // generate a random price between 407.25 (inclusive) and 410 (exclusive)
    let rounded_priceC = priceC.toFixed(2); // round the price C value to 2 decimals
    let priceD = (Math.random() * 2.05) + 1428.95; // generate a random price between 1428.25 (inclusive) and 1431 (exclusive)
    let rounded_priceD = priceD.toFixed(2); // round the price D value to 2 decimals
    let priceE = (Math.random() * 2.95) + 237.50; // generate a random price between 237.50 (inclusive) and 240.45 (exclusive)
    let rounded_priceE = priceE.toFixed(2); // round the price E value to 2 decimals
    let priceF = (Math.random() * 2.15) + 875.10; // generate a random price between 875.10 (inclusive) and 877.25 (exclusive)
    let rounded_priceF = priceF.toFixed(2); // round the price F value to 2 decimals
    let priceG = (Math.random() * 2.35) + 3205.90; // generate a random price between 3205.90 (inclusive) and 3208.25 (exclusive)
    let rounded_priceG = priceG.toFixed(2); // round the price G value to 2 decimals
    let priceH = (Math.random() * 2.80) + 5819.50; // generate a random price between 5819.50 (inclusive) and 5822.30 (exclusive)
    let rounded_priceH = priceH .toFixed(2); // round the price H value to 2 decimals
    let priceI = (Math.random() * 2.45) + 630.75 // generate a random price between 630.75 (inclusive) and 633.20 (exclusive)
    let rounded_priceI = priceI.toFixed(2); // round the price I value to 2 decimals
    let priceJ = (Math.random() * 2.65) + 378.90 // generate a random price between 378.90 (inclusive) and 381.55 (exlusive)
    let rounded_priceJ = priceJ.toFixed(2); // round the price J value to 2 decimals

    // Current Value of each stock
    // Current Value = Current Market Price * Shares Owned
    // generate a random value between 2600 (inclusive) and 2650 (exclusive)
    let current_value_A = rounded_priceA * document.getElementById('shares-buy-A').textContent; 
    let rounded_current_value_A = current_value_A.toFixed(2); // round the current value A to 2 decimals
    // generate a random value between 2790 (inclusive) and 2830.50 (exclusive)
    let current_value_B = rounded_priceB * document.getElementById('shares-buy-B').textContent;
    let rounded_current_value_B = current_value_B.toFixed(2); // round the current value B to 2 decimals
    // generate a random value between 2036.25 (inclusive) and 2049.95 (exclusive)
    let current_value_C = rounded_priceC * document.getElementById('shares-buy-C').textContent;
    let rounded_current_value_C = current_value_C.toFixed(2); // round the current value C to 2 decimals
    // generate a random value between 18567.25 (inclusive) and 18603 (exclusive)
    let current_value_D = rounded_priceD * document.getElementById('shares-buy-D').textContent;
    let rounded_current_value_D = current_value_D.toFixed(2); // round the current value D to 2 decimals
    // generate a random value between 712.50 (inclusive) and 721.35 (exclusive)
    let current_value_E = rounded_priceE * document.getElementById('shares-buy-E').textContent;
    let rounded_current_value_E = current_value_E.toFixed(2); // round the current value E to 2 decimals
    // generate a random value between 36754.20 (inclusive) and 36844.50 (exclusive)
    let current_value_F = rounded_priceF * document.getElementById('shares-buy-F').textContent;
    let rounded_current_value_F = current_value_F.toFixed(2); // round the current value F to 2 decimals
    // generate a random value between 6411.80 (inclusive) and 6416.50 (exclusive)
    let current_value_G = rounded_priceG * document.getElementById('shares-buy-G').textContent;
    let rounded_current_value_G = current_value_G.toFixed(2); // round the current value G to 2 decimals
    // generate a random value between 5819.50 (inclusive) and 5822.30 (exclusive)
    let current_value_H = rounded_priceH * document.getElementById('shares-buy-H').textContent;
    let rounded_current_value_H = current_value_H.toFixed(2); // round the current value H to 2 decimals
    // generate a random value between 1261.50 (inclusive) and 1266.40 (exclusive)
    let current_value_I = rounded_priceI * document.getElementById('shares-buy-I').textContent;
    let rounded_current_value_I = current_value_I.toFixed(2); // round the current value I to 2 decimals
    // generate a random value between 6441.30 (inclusive) and 6486.35 (exlusive)
    let current_value_J = rounded_priceJ * document.getElementById('shares-buy-J').textContent;
    let rounded_current_value_J = current_value_J.toFixed(2); // round the current value J to 2 decimals

    // Returns in % = ( (Current Price - Initial Investment Price) / Initial Investment Price ) * 100
    let returns_A_percent = getReturnsPercent(rounded_current_value_A, document.getElementById('investment-a').textContent); //((rounded_current_value_A - document.getElementById('investment-a').textContent) / document.getElementById('investment-a').textContent) * 100;
    let rounded_returns_A_percent = "+" + returns_A_percent.toFixed(2); // round the returns_A_percent value to 2 decimals
    let returns_B_percent = ((rounded_current_value_B - document.getElementById('investment-b').textContent) / document.getElementById('investment-b').textContent) * 100;
    let rounded_returns_B_percent = returns_B_percent.toFixed(2); // round the returns_B_percent value to 2 decimals
    let returns_C_percent = ((rounded_current_value_C - document.getElementById('investment-c').textContent) / document.getElementById('investment-c').textContent) * 100;
    let rounded_returns_C_percent = "+" + returns_C_percent.toFixed(2); // round the returns_C_percent value to 2 decimals
    let returns_D_percent = ((rounded_current_value_D - document.getElementById('investment-d').textContent) / document.getElementById('investment-d').textContent) * 100;
    let rounded_returns_D_percent = returns_D_percent.toFixed(2); // round the returns_D_percent value to 2 decimals
    let returns_E_percent = ((rounded_current_value_E - document.getElementById('investment-e').textContent) / document.getElementById('investment-e').textContent) * 100;
    let rounded_returns_E_percent = "+" + returns_E_percent.toFixed(2); // round the returns_E_percent value to 2 decimals
    let returns_F_percent = ((rounded_current_value_F - document.getElementById('investment-f').textContent) / document.getElementById('investment-f').textContent) * 100;
    let rounded_returns_F_percent = "+" + returns_F_percent.toFixed(2); // round the returns_F_percent value to 2 decimals
    let returns_G_percent = ((rounded_current_value_G - document.getElementById('investment-g').textContent) / document.getElementById('investment-g').textContent) * 100;
    let rounded_returns_G_percent = returns_G_percent.toFixed(2); // round the returns_G_percent value to 2 decimals
    let returns_H_percent = ((rounded_current_value_H - document.getElementById('investment-h').textContent) / document.getElementById('investment-h').textContent) * 100;
    let rounded_returns_H_percent = returns_H_percent.toFixed(2); // round the returns_H_percent value to 2 decimals
    let returns_I_percent = ((rounded_current_value_I - document.getElementById('investment-i').textContent) / document.getElementById('investment-i').textContent) * 100;
    let rounded_returns_I_percent = returns_I_percent.toFixed(2); // round the returns_I_percent value to 2 decimals
    let returns_J_percent = ((rounded_current_value_J - document.getElementById('investment-j').textContent) / document.getElementById('investment-j').textContent) * 100;
    let rounded_returns_J_percent = "+" + returns_J_percent.toFixed(2); // round the returns_J_percent value to 2 decimals

    // Returns in ₹ = (Returns % * Initial Investment Amount)
    let returns_A = (rounded_returns_A_percent / 100) * document.getElementById('investment-a').textContent;
    let rounded_returns_A = "+" + returns_A.toFixed(2); // round the returns_A value to 2 decimals
    let returns_B = (rounded_returns_B_percent / 100) * document.getElementById('investment-b').textContent;
    let rounded_returns_B = returns_B.toFixed(2); // round the returns_B value to 2 decimals
    let returns_C = ((rounded_returns_C_percent) / 100) * document.getElementById('investment-c').textContent;
    let rounded_returns_C = "+" + returns_C.toFixed(2); // round the returns_C value to 2 decimals
    let returns_D = ((rounded_returns_D_percent) / 100) * document.getElementById('investment-d').textContent;
    let rounded_returns_D = returns_D.toFixed(2); // round the returns_D value to 2 decimals
    let returns_E = ((rounded_returns_E_percent) / 100) * document.getElementById('investment-e').textContent;
    let rounded_returns_E = "+" + returns_E.toFixed(2); // round the returns_E value to 2 decimals
    let returns_F = ((rounded_returns_F_percent) / 100) * document.getElementById('investment-f').textContent;
    let rounded_returns_F = "+" + returns_F.toFixed(2); // round the returns_F value to 2 decimals
    let returns_G = ((rounded_returns_G_percent) / 100) * document.getElementById('investment-g').textContent;
    let rounded_returns_G = returns_G.toFixed(2); // round the returs_G value to 2 decimals
    let returns_H = ((rounded_returns_H_percent) / 100) * document.getElementById('investment-h').textContent;
    let rounded_returns_H = returns_H.toFixed(2); // round the returns_H value to 2 decimals
    let returns_I = ((rounded_returns_I_percent) / 100) * document.getElementById('investment-i').textContent;
    let rounded_returns_I = returns_I.toFixed(2); // round the returns_I value to 2 decimals
    let returns_J = ((rounded_returns_J_percent) / 100) * document.getElementById('investment-j').textContent;
    let rounded_returns_J = "+" + returns_J.toFixed(2); // round the returns_J value to 2 decimals

    // Total Current Value (i.e. current value of your total investment value)
    // Total Current Value = current value of stock 1 + current value of stock 2 + current value of stock 3 + ----------
    // Number - a JavaScript built-in function which transforms a value to a number
    let total_current_value = Number(rounded_current_value_A) + Number(rounded_current_value_B) + Number(rounded_current_value_C) + Number(rounded_current_value_D) + Number(rounded_current_value_E) + Number(rounded_current_value_F) + Number(rounded_current_value_G) + Number(rounded_current_value_H) + Number(rounded_current_value_I) + Number(rounded_current_value_J);
    let rounded_total_current_value = total_current_value.toFixed(2); // round the total_current_value to 2 decimals

    // Total Returns (₹) = Total Current Value - Total Investment Value
    let total_returns = total_current_value - document.getElementById('total-investment').textContent;
    let rounded_total_returns = "+" + total_returns.toFixed(2); // round the total_returns to 2 decimals

    // Total Returns (%) = ((Total Current Value - Total Investment Value) / Total Investment Value) * 100
    let total_returns_percent = ((rounded_total_current_value - document.getElementById('total-investment').textContent) / document.getElementById('total-investment').textContent) * 100;
    let rounded_total_returns_percent = "+" + total_returns_percent.toFixed(2); // round the total_returns_percent to 2 decimals

    // document.getElementbyID() - function that select and access an HTML element based on unique ID
    document.getElementById('price-a').textContent = rounded_priceA;
    document.getElementById('price-b').textContent = rounded_priceB;
    document.getElementById('price-c').textContent = rounded_priceC;
    document.getElementById('price-d').textContent = rounded_priceD;
    document.getElementById('price-e').textContent = rounded_priceE;
    document.getElementById('price-f').textContent = rounded_priceF;
    document.getElementById('price-g').textContent = rounded_priceG;
    document.getElementById('price-h').textContent = rounded_priceH;
    document.getElementById('price-i').textContent = rounded_priceI;
    document.getElementById('price-j').textContent = rounded_priceJ;

    document.getElementById('current-value-a').textContent = rounded_current_value_A;
    document.getElementById('current-value-b').textContent = rounded_current_value_B;
    document.getElementById('current-value-c').textContent = rounded_current_value_C;
    document.getElementById('current-value-d').textContent = rounded_current_value_D;
    document.getElementById('current-value-e').textContent = rounded_current_value_E;
    document.getElementById('current-value-f').textContent = rounded_current_value_F;
    document.getElementById('current-value-g').textContent = rounded_current_value_G;
    document.getElementById('current-value-h').textContent = rounded_current_value_H;
    document.getElementById('current-value-i').textContent = rounded_current_value_I;
    document.getElementById('current-value-j').textContent = rounded_current_value_J;

    document.getElementById('returns-a-percent').textContent = rounded_returns_A_percent;
    document.getElementById('returns-b-percent').textContent = rounded_returns_B_percent;
    document.getElementById('returns-c-percent').textContent = rounded_returns_C_percent;
    document.getElementById('returns-d-percent').textContent = rounded_returns_D_percent;
    document.getElementById('returns-e-percent').textContent = rounded_returns_E_percent;
    document.getElementById('returns-f-percent').textContent = rounded_returns_F_percent;
    document.getElementById('returns-g-percent').textContent = rounded_returns_G_percent;
    document.getElementById('returns-h-percent').textContent = rounded_returns_H_percent;
    document.getElementById('returns-i-percent').textContent = rounded_returns_I_percent;
    document.getElementById('returns-j-percent').textContent = rounded_returns_J_percent;

    document.getElementById('returns-a').textContent = rounded_returns_A;
    document.getElementById('returns-b').textContent = rounded_returns_B;
    document.getElementById('returns-c').textContent = rounded_returns_C;
    document.getElementById('returns-d').textContent = rounded_returns_D;
    document.getElementById('returns-e').textContent = rounded_returns_E;
    document.getElementById('returns-f').textContent = rounded_returns_F;
    document.getElementById('returns-g').textContent = rounded_returns_G;
    document.getElementById('returns-h').textContent = rounded_returns_H;
    document.getElementById('returns-i').textContent = rounded_returns_I;
    document.getElementById('returns-j').textContent = rounded_returns_J;

    document.getElementById('total-current').textContent = rounded_total_current_value;

    document.getElementById('total-returns').textContent = rounded_total_returns;

    document.getElementById('total-returns-percent').textContent = rounded_total_returns_percent;

    document.getElementById('index1-price').textContent = rounded_nifty_50;
    
  }, 1000); // function calling for every 1 second or 1000 milliseconds



//average invested price of a stock (i.e. capital invested per share) when you have invested in different dates
// Formula = [ (price per share on date X1 * number of shares bought) + (price per share on date X2 * number of shares bought) + (price per share on date X3 * number of shares bought) ] + ------- / total number of shares bought on all dates 

let avg_price_A1 = 86.80 * 10;
let avg_price_A2 = 80.80 * 8;
let avg_price_A3 = 97.80 * 2;

let avg_price_B1 = 308.15 * 18;

let avg_price_C1 = 370.40 * 5;

let avg_price_D1 = 1582.88 * 3;
let avg_price_D2 = 1449.54 * 10;

let avg_price_E1 = 114.20 * 3;

let avg_price_F1 = 683.74 * 15;
let avg_price_F2 = 685.80 * 10;
let avg_price_F3 = 898.49 * 7;
let avg_price_F4 = 820.63 * 10;

let avg_price_G1 = 3394.39 * 2;

let avg_price_H1 = 6782.55 * 1;

let avg_price_I1 = 1275.05 * 1;
let avg_price_I2 = 903.50 * 1;

let avg_price_J1 = 204.25 * 17;

let rounded_avg_price_A = 0;
if (document.getElementById('shares-buy-A')){
let avg_price_A = (avg_price_A1 + avg_price_A2 + avg_price_A3) / document.getElementById('shares-buy-A').textContent;
rounded_avg_price_A = avg_price_A.toFixed(2); // round the avg_price_A value to 2 decimals
}
let rounded_avg_price_B = 0;
if (document.getElementById('shares-buy-B')){
let avg_price_B = (avg_price_B1) / document.getElementById('shares-buy-B').textContent;
rounded_avg_price_B = avg_price_B.toFixed(2); // round the avg_price_B value to 2 decimals
}
let rounded_avg_price_C = 0;
if (document.getElementById('shares-buy-C')){
let avg_price_C = (avg_price_C1) / document.getElementById('shares-buy-C').textContent;
rounded_avg_price_C = avg_price_C.toFixed(2); // round the avg_price_C value to 2 decimals
}
let rounded_avg_price_D = 0;
if (document.getElementById('shares-buy-D')){
let avg_price_D = (avg_price_D1 + avg_price_D2) / document.getElementById('shares-buy-D').textContent;
rounded_avg_price_D = avg_price_D.toFixed(2); // round the avg_price_D value to 2 decimals
}
let rounded_avg_price_E = 0;
if (document.getElementById('shares-buy-E')) {
let avg_price_E = (avg_price_E1) / document.getElementById('shares-buy-E').textContent;
rounded_avg_price_E = avg_price_E.toFixed(2); // round the avg_price_E value to 2 decimals
}
let rounded_avg_price_F = 0;
if (document.getElementById('shares-buy-F')) {
let avg_price_F = (avg_price_F1 + avg_price_F2 + avg_price_F3 + avg_price_F4) / document.getElementById('shares-buy-F').textContent;
rounded_avg_price_F = avg_price_F.toFixed(2); // round the avg_price_F value to 2 decimals
}
let rounded_avg_price_G = 0;
if (document.getElementById('shares-buy-G')){
let avg_price_G = (avg_price_G1) / document.getElementById('shares-buy-G').textContent;
rounded_avg_price_G = avg_price_G.toFixed(2); // round the avg_price_G value to 2 decimals
}
let rounded_avg_price_H = 0;
if (document.getElementById('shares-buy-H')) {
let avg_price_H = (avg_price_H1) / document.getElementById('shares-buy-H').textContent;
rounded_avg_price_H = avg_price_H.toFixed(2); // round the avg_price_H value to 2 decimals
}
let rounded_avg_price_I = 0;
if (document.getElementById('shares-buy-I')) {
let avg_price_I = (avg_price_I1 + avg_price_I2) / document.getElementById('shares-buy-I').textContent;
rounded_avg_price_I = avg_price_I.toFixed(2); // round the avg_price_I value to 2 decimals
}
let rounded_avg_price_J = 0;
if (document.getElementById('shares-buy-J')) {
let avg_price_J = (avg_price_J1) / document.getElementById('shares-buy-J').textContent;
rounded_avg_price_J = avg_price_J.toFixed(2); // round the avg_price_J value to 2 decimals
}

if (document.getElementById('price-per-share-A')){
document.getElementById('price-per-share-A').textContent = rounded_avg_price_A;
}
if (document.getElementById('price-per-share-B')){
document.getElementById('price-per-share-B').textContent = rounded_avg_price_B;
}
if (document.getElementById('price-per-share-C')){
document.getElementById('price-per-share-C').textContent = rounded_avg_price_C;
}
if (document.getElementById('price-per-share-D')){
document.getElementById('price-per-share-D').textContent = rounded_avg_price_D;
}
if (document.getElementById('price-per-share-E')){
document.getElementById('price-per-share-E').textContent = rounded_avg_price_E;
}
if (document.getElementById('price-per-share-F')){
document.getElementById('price-per-share-F').textContent = rounded_avg_price_F;
}
if (document.getElementById('price-per-share-G')){
document.getElementById('price-per-share-G').textContent = rounded_avg_price_G;
}
if (document.getElementById('price-per-share-H')){
document.getElementById('price-per-share-H').textContent = rounded_avg_price_H;
}
if (document.getElementById('price-per-share-I')){
document.getElementById('price-per-share-I').textContent = rounded_avg_price_I;
}
if (document.getElementById('price-per-share-J')){
document.getElementById('price-per-share-J').textContent = rounded_avg_price_J;
}

// Investment Value of each stock
// Investment Value = Shares Owned * Capital Invested Per Share
let rounded_investment_amount_A = 0;
if (document.getElementById('shares-buy-A') && document.getElementById('price-per-share-A')){
let shares_bought_A = document.getElementById('shares-buy-A').textContent;
let capital_invested_per_share_A = document.getElementById('price-per-share-A').textContent;
let investment_amount_A = shares_bought_A * capital_invested_per_share_A;
rounded_investment_amount_A = investment_amount_A.toFixed(2); // round the investment_amount_A value to 2 decimals
}

let rounded_investment_amount_B = 0;
if (document.getElementById('shares-buy-B') && document.getElementById('price-per-share-B')) {
let shares_bought_B = document.getElementById('shares-buy-B').textContent;
let capital_invested_per_share_B = document.getElementById('price-per-share-B').textContent;
let investment_amount_B = shares_bought_B * capital_invested_per_share_B;
rounded_investment_amount_B = investment_amount_B.toFixed(2); // round the investment_amount_B value to 2 decimals
}

let rounded_investment_amount_C = 0;
if (document.getElementById('shares-buy-C') && document.getElementById('price-per-share-C')) {
let shares_bought_C = document.getElementById('shares-buy-C').textContent;
let capital_invested_per_share_C = document.getElementById('price-per-share-C').textContent;
let investment_amount_C = shares_bought_C * capital_invested_per_share_C;
rounded_investment_amount_C = investment_amount_C.toFixed(2); // round the investment_amount_C value to 2 decimals
}

let rounded_investment_amount_D = 0;
if (document.getElementById('shares-buy-D') && document.getElementById('price-per-share-D')) {
let shares_bought_D = document.getElementById('shares-buy-D').textContent;
let capital_invested_per_share_D = document.getElementById('price-per-share-D').textContent;
let investment_amount_D = shares_bought_D * capital_invested_per_share_D;
rounded_investment_amount_D = investment_amount_D.toFixed(2); // round the investment_amount_D value to 2 decimals
}

let rounded_investment_amount_E = 0;
if (document.getElementById('shares-buy-E') && document.getElementById('price-per-share-E')) {
let shares_bought_E = document.getElementById('shares-buy-E').textContent;
let capital_invested_per_share_E = document.getElementById('price-per-share-E').textContent;
let investment_amount_E = shares_bought_E * capital_invested_per_share_E;
rounded_investment_amount_E = investment_amount_E.toFixed(2); // round the investment_amount_E value to 2 decimals
}

let rounded_investment_amount_F = 0;
if (document.getElementById('shares-buy-F') && document.getElementById('price-per-share-F')){
let shares_bought_F = document.getElementById('shares-buy-F').textContent;
let capital_invested_per_share_F = document.getElementById('price-per-share-F').textContent;
let investment_amount_F = shares_bought_F * capital_invested_per_share_F;
rounded_investment_amount_F = investment_amount_F.toFixed(2); // round the investment_amount_F value to 2 decimals
}

let rounded_investment_amount_G = 0;
if (document.getElementById('shares-buy-G') && document.getElementById('price-per-share-G')){
let shares_bought_G = document.getElementById('shares-buy-G').textContent;
let capital_invested_per_share_G = document.getElementById('price-per-share-G').textContent;
let investment_amount_G = shares_bought_G * capital_invested_per_share_G;
rounded_investment_amount_G = investment_amount_G.toFixed(2); // round the investment_amount_G value to 2 decimals
}

let rounded_investment_amount_H = 0;
if (document.getElementById('shares-buy-H') && document.getElementById('price-per-share-H')){
let shares_bought_H = document.getElementById('shares-buy-H').textContent;
let capital_invested_per_share_H = document.getElementById('price-per-share-H').textContent;
let investment_amount_H = shares_bought_H * capital_invested_per_share_H;
rounded_investment_amount_H = investment_amount_H.toFixed(2); // round the investment_amount_H value to 2 decimals
}

let rounded_investment_amount_I = 0;
if (document.getElementById('shares-buy-I') && document.getElementById('price-per-share-I')){
let shares_bought_I = document.getElementById('shares-buy-I').textContent;
let capital_invested_per_share_I = document.getElementById('price-per-share-I').textContent;
let investment_amount_I = shares_bought_I * capital_invested_per_share_I;
rounded_investment_amount_I = investment_amount_I.toFixed(2); // round the investment_amount_I value to 2 decimals
}

let rounded_investment_amount_J = 0;
if (document.getElementById('shares-buy-J') && document.getElementById('price-per-share-J')) {
let shares_bought_J = document.getElementById('shares-buy-J').textContent;
let capital_invested_per_share_J = document.getElementById('price-per-share-J').textContent;
let investment_amount_J = shares_bought_J * capital_invested_per_share_J;
rounded_investment_amount_J = investment_amount_J.toFixed(2); // round the investment_amount_J value to 2 decimals
}

if (document.getElementById('investment-a')) {
document.getElementById('investment-a').textContent = rounded_investment_amount_A;
}
if (document.getElementById('investment-b')) {
document.getElementById('investment-b').textContent = rounded_investment_amount_B;
}
if (document.getElementById('investment-c')) {
document.getElementById('investment-c').textContent = rounded_investment_amount_C;
}
if (document.getElementById('investment-d')) {
document.getElementById('investment-d').textContent = rounded_investment_amount_D;
}
if (document.getElementById('investment-e')) {
document.getElementById('investment-e').textContent = rounded_investment_amount_E;
}
if (document.getElementById('investment-f')) {
document.getElementById('investment-f').textContent = rounded_investment_amount_F;
}
if (document.getElementById('investment-g')) {
document.getElementById('investment-g').textContent = rounded_investment_amount_G;
}
if (document.getElementById('investment-h')) {
document.getElementById('investment-h').textContent = rounded_investment_amount_H;
}
if (document.getElementById('investment-i')) {
document.getElementById('investment-i').textContent = rounded_investment_amount_I;
}
if (document.getElementById('investment-j')) {
document.getElementById('investment-j').textContent = rounded_investment_amount_J;
}


// Total Investment Value (i.e. initial investment value of all stocks or companies)
// Total Investment Value = (investment value of stock 1 + investment value of stock 2 + investment value of stock 3 + ---------)
// Number() - a JavaScript built-in function which transforms a value to a number

let total_investment_value = Number(rounded_investment_amount_A) + Number(rounded_investment_amount_B) + Number(rounded_investment_amount_C) + Number(rounded_investment_amount_D) + Number(rounded_investment_amount_E) + Number(rounded_investment_amount_F) + Number(rounded_investment_amount_G) + Number(rounded_investment_amount_H) + Number(rounded_investment_amount_I) + Number(rounded_investment_amount_J);
let rounded_total_investment_value = total_investment_value.toFixed(2); // round the total_investment_value to 2 decimals 
if (document.getElementById('total-investment')) {
document.getElementById('total-investment').textContent = rounded_total_investment_value;
}



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
  // ask for confirmation before executing the buy order
  var confirmation = window.confirm("Are you sure you want to execute the buy order?");
  if (confirmation) {
    // get the order details
    var stockName = document.querySelector(".stock-name").textContent;
    var quantity = document.querySelector("#quantity").value;
    var orderType = "Buy";
    // redirect to the orders.ejs page with the order details as query parameters
    window.location.href = "/orders?stockName=" + stockName + "&quantity=" + quantity + "&orderType=" + orderType;
  }
});

sellButton.addEventListener("click", function() {
  // ask for confirmation before executing the sell order
  var confirmation = window.confirm("Are you sure you want to execute the sell order?");
  if (confirmation) {
    // get the order details
    var stockName = document.querySelector(".stock-name").textContent;
    var quantity = document.querySelector("#quantity").value;
    var orderType = "Sell";
    // redirect to the orders.ejs page with the order details as query parameters
    window.location.href = "/orders?stockName=" + stockName + "&quantity=" + quantity + "&orderType=" + orderType;
  }
});

// if user clicks on <span> element (i.e. close symbol, X), close the modal
if (closeBtn) {
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});
}


module.exports = {};
module.exports.getReturnsPercent = getReturnsPercent;
module.exports.initialInvestmentValue = initialInvestmentValue;
module.exports.getReturnsRupee = getReturnsRupee;