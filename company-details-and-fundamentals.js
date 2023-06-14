// retrieve the stock symbol from the query string parameter
const urlParams = new URLSearchParams(window.location.search);
const symbol = urlParams.get("symbol");

// Operating Profit = Revenue - Expenses (Quarterly Results)
let revenue_quarter_1 = document.getElementById('rq1').textContent;
let expense_quarter_1 = document.getElementById('ex-q1').textContent;
let operating_profit_quarter_1 = revenue_quarter_1 - expense_quarter_1;
document.getElementById('op-q1').textContent = operating_profit_quarter_1;

let revenue_quarter_2 = document.getElementById('rq2').textContent;
let expense_quarter_2 = document.getElementById('ex-q2').textContent;
let operating_profit_quarter_2 = revenue_quarter_2 - expense_quarter_2;
document.getElementById('op-q2').textContent = operating_profit_quarter_2;

let revenue_quarter_3 = document.getElementById('rq3').textContent;
let expense_quarter_3 = document.getElementById('ex-q3').textContent;
let operating_profit_quarter_3 = revenue_quarter_3 - expense_quarter_3;
document.getElementById('op-q3').textContent = operating_profit_quarter_3;

let revenue_quarter_4 = document.getElementById('rq4').textContent;
let expense_quarter_4 = document.getElementById('ex-q4').textContent;
let operating_profit_quarter_4 = revenue_quarter_4 - expense_quarter_4;
document.getElementById('op-q4').textContent = operating_profit_quarter_4;

let revenue_quarter_5 = document.getElementById('rq5').textContent;
let expense_quarter_5 = document.getElementById('ex-q5').textContent;
let operating_profit_quarter_5 = revenue_quarter_5 - expense_quarter_5;
document.getElementById('op-q5').textContent = operating_profit_quarter_5;

let revenue_quarter_6 = document.getElementById('rq6').textContent;
let expense_quarter_6 = document.getElementById('ex-q6').textContent;
let operating_profit_quarter_6 = revenue_quarter_6 - expense_quarter_6;
document.getElementById('op-q6').textContent = operating_profit_quarter_6;

let revenue_quarter_7 = document.getElementById('rq7').textContent;
let expense_quarter_7 = document.getElementById('ex-q7').textContent;
let operating_profit_quarter_7 = revenue_quarter_7 - expense_quarter_7;
document.getElementById('op-q7').textContent = operating_profit_quarter_7;

let revenue_quarter_8 = document.getElementById('rq8').textContent;
let expense_quarter_8 = document.getElementById('ex-q8').textContent;
let operating_profit_quarter_8 = revenue_quarter_8 - expense_quarter_8;
document.getElementById('op-q8').textContent = operating_profit_quarter_8;

let revenue_quarter_9 = document.getElementById('rq9').textContent;
let expense_quarter_9 = document.getElementById('ex-q9').textContent;
let operating_profit_quarter_9 = revenue_quarter_9 - expense_quarter_9;
document.getElementById('op-q9').textContent = operating_profit_quarter_9;

let revenue_quarter_10 = document.getElementById('rq10').textContent;
let expense_quarter_10 = document.getElementById('ex-q10').textContent;
let operating_profit_quarter_10 = revenue_quarter_10 - expense_quarter_10;
document.getElementById('op-q10').textContent = operating_profit_quarter_10;

let revenue_quarter_11 = document.getElementById('rq11').textContent;
let expense_quarter_11 = document.getElementById('ex-q11').textContent;
let operating_profit_quarter_11 = revenue_quarter_11 - expense_quarter_11;
document.getElementById('op-q11').textContent = operating_profit_quarter_11;

let revenue_quarter_12 = document.getElementById('rq12').textContent;
let expense_quarter_12 = document.getElementById('ex-q12').textContent;
let operating_profit_quarter_12 = revenue_quarter_12 - expense_quarter_12;
document.getElementById('op-q12').textContent = operating_profit_quarter_12;

let revenue_quarter_13 = document.getElementById('rq13').textContent;
let expense_quarter_13 = document.getElementById('ex-q13').textContent;
let operating_profit_quarter_13 = revenue_quarter_13 - expense_quarter_13;
document.getElementById('op-q13').textContent = operating_profit_quarter_13;

// Operating Profit Margin (%) = (operating Profit / Revenue) * 100 (Quarterly Results)
let operating_profit_margin_percent_1 = (operating_profit_quarter_1 / revenue_quarter_1) * 100;
let rounded_operating_profit_margin_percent_1 = operating_profit_margin_percent_1.toFixed(2);
document.getElementById('op-q1-percent').textContent = rounded_operating_profit_margin_percent_1;

let operating_profit_margin_percent_2 = (operating_profit_quarter_2 / revenue_quarter_2) * 100;
let rounded_operating_profit_margin_percent_2 = operating_profit_margin_percent_2.toFixed(2);
document.getElementById('op-q2-percent').textContent = rounded_operating_profit_margin_percent_2;

let operating_profit_margin_percent_3 = (operating_profit_quarter_3 / revenue_quarter_3) * 100;
let rounded_operating_profit_margin_percent_3 = operating_profit_margin_percent_3.toFixed(2);
document.getElementById('op-q3-percent').textContent = rounded_operating_profit_margin_percent_3;

let operating_profit_margin_percent_4 = (operating_profit_quarter_4 / revenue_quarter_4) * 100;
let rounded_operating_profit_margin_percent_4 = operating_profit_margin_percent_4.toFixed(2);
document.getElementById('op-q4-percent').textContent = rounded_operating_profit_margin_percent_4;

let operating_profit_margin_percent_5 = (operating_profit_quarter_5 / revenue_quarter_5) * 100;
let rounded_operating_profit_margin_percent_5 = operating_profit_margin_percent_5.toFixed(2);
document.getElementById('op-q5-percent').textContent = rounded_operating_profit_margin_percent_5;

let operating_profit_margin_percent_6 = (operating_profit_quarter_6 / revenue_quarter_6) * 100;
let rounded_operating_profit_margin_percent_6 = operating_profit_margin_percent_6.toFixed(2);
document.getElementById('op-q6-percent').textContent = rounded_operating_profit_margin_percent_6;

let operating_profit_margin_percent_7 = (operating_profit_quarter_7 / revenue_quarter_7) * 100;
let rounded_operating_profit_margin_percent_7 = operating_profit_margin_percent_7.toFixed(2);
document.getElementById('op-q7-percent').textContent = rounded_operating_profit_margin_percent_7;

let operating_profit_margin_percent_8 = (operating_profit_quarter_8 / revenue_quarter_8) * 100;
let rounded_operating_profit_margin_percent_8 = operating_profit_margin_percent_8.toFixed(2);
document.getElementById('op-q8-percent').textContent = rounded_operating_profit_margin_percent_8;

let operating_profit_margin_percent_9 = (operating_profit_quarter_9 / revenue_quarter_9) * 100;
let rounded_operating_profit_margin_percent_9 = operating_profit_margin_percent_9.toFixed(2);
document.getElementById('op-q9-percent').textContent = rounded_operating_profit_margin_percent_9;

let operating_profit_margin_percent_10 = (operating_profit_quarter_10 / revenue_quarter_10) * 100;
let rounded_operating_profit_margin_percent_10 = operating_profit_margin_percent_10.toFixed(2);
document.getElementById('op-q10-percent').textContent = rounded_operating_profit_margin_percent_10;

let operating_profit_margin_percent_11 = (operating_profit_quarter_11 / revenue_quarter_11) * 100;
let rounded_operating_profit_margin_percent_11 = operating_profit_margin_percent_11.toFixed(2);
document.getElementById('op-q11-percent').textContent = rounded_operating_profit_margin_percent_11;

let operating_profit_margin_percent_12 = (operating_profit_quarter_12 / revenue_quarter_12) * 100;
let rounded_operating_profit_margin_percent_12 = operating_profit_margin_percent_12.toFixed(2);
document.getElementById('op-q12-percent').textContent = rounded_operating_profit_margin_percent_12;

let operating_profit_margin_percent_13 = (operating_profit_quarter_13 / revenue_quarter_13) * 100;
let rounded_operating_profit_margin_percent_13 = operating_profit_margin_percent_13.toFixed(2);
document.getElementById('op-q13-percent').textContent = rounded_operating_profit_margin_percent_13;

// Profit Before Tax (PBT) = (Revenue + Other Income) - (Expenses + Interest + Depreciation)
let other_income_quarter_1 = 738;
let interest_quarter_1 = 251;
let depreciation_quarter_1 = 951;
let total_revenue_quarter_1 = Number(revenue_quarter_1) + Number(other_income_quarter_1);
let total_expense_quarter_1 = Number(expense_quarter_1) + Number(interest_quarter_1) + Number(depreciation_quarter_1);
let PBT_quarter_1 = total_revenue_quarter_1 - total_expense_quarter_1;
document.getElementById('pbt-q1').textContent = PBT_quarter_1;

let other_income_quarter_2 = 598;
let interest_quarter_2 = 142;
let depreciation_quarter_2 = 976;
let total_revenue_quarter_2 = Number(revenue_quarter_2) + Number(other_income_quarter_2);
let total_expense_quarter_2 = Number(expense_quarter_2) + Number(interest_quarter_2) + Number(depreciation_quarter_2);
let PBT_quarter_2 = total_revenue_quarter_2 - total_expense_quarter_2;
document.getElementById('pbt-q2').textContent = PBT_quarter_2;

let other_income_quarter_3 = -304;
let interest_quarter_3 = 174;
let depreciation_quarter_3 = 998;
let total_revenue_quarter_3 = Number(revenue_quarter_3) + Number(other_income_quarter_3);
let total_expense_quarter_3 = Number(expense_quarter_3) + Number(interest_quarter_3) + Number(depreciation_quarter_3);
let PBT_quarter_3 = total_revenue_quarter_3 - total_expense_quarter_3;
document.getElementById('pbt-q3').textContent = PBT_quarter_3;

let other_income_quarter_4 = 691;
let interest_quarter_4 = 183;
let depreciation_quarter_4 = 1024;
let total_revenue_quarter_4 = Number(revenue_quarter_4) + Number(other_income_quarter_4);
let total_expense_quarter_4= Number(expense_quarter_4) + Number(interest_quarter_4) + Number(depreciation_quarter_4);
let PBT_quarter_4 = total_revenue_quarter_4 - total_expense_quarter_4;
document.getElementById('pbt-q4').textContent = PBT_quarter_4;

let other_income_quarter_5 = 931;
let interest_quarter_5 = 138;
let depreciation_quarter_5 = 1067;
let total_revenue_quarter_5 = Number(revenue_quarter_5) + Number(other_income_quarter_5);
let total_expense_quarter_5 = Number(expense_quarter_5) + Number(interest_quarter_5) + Number(depreciation_quarter_5);
let PBT_quarter_5 = total_revenue_quarter_5 - total_expense_quarter_5;
document.getElementById('pbt-q5').textContent = PBT_quarter_5;

let other_income_quarter_6 = 721;
let interest_quarter_6 = 146;
let depreciation_quarter_6 = 1075;
let total_revenue_quarter_6 = Number(revenue_quarter_6) + Number(other_income_quarter_6);
let total_expense_quarter_6 = Number(expense_quarter_6) + Number(interest_quarter_6) + Number(depreciation_quarter_6);
let PBT_quarter_6 = total_revenue_quarter_6 - total_expense_quarter_6;
document.getElementById('pbt-q6').textContent = PBT_quarter_6;

let other_income_quarter_7 = 1111;
let interest_quarter_7 = 142;
let depreciation_quarter_7 = 1116;
let total_revenue_quarter_7 = Number(revenue_quarter_7) + Number(other_income_quarter_7);
let total_expense_quarter_7 = Number(expense_quarter_7) + Number(interest_quarter_7) + Number(depreciation_quarter_7);
let PBT_quarter_7 = total_revenue_quarter_7 - total_expense_quarter_7;
document.getElementById('pbt-q7').textContent = PBT_quarter_7;

let other_income_quarter_8 = 1205;
let interest_quarter_8 = 251;
let depreciation_quarter_8 = 1196;
let total_revenue_quarter_8 = Number(revenue_quarter_8) + Number(other_income_quarter_8);
let total_expense_quarter_8 = Number(expense_quarter_8) + Number(interest_quarter_8) + Number(depreciation_quarter_8);
let PBT_quarter_8 = total_revenue_quarter_8 - total_expense_quarter_8;
document.getElementById('pbt-q8').textContent = PBT_quarter_8;

let other_income_quarter_9 = 981;
let interest_quarter_9 = 245;
let depreciation_quarter_9 = 1217;
let total_revenue_quarter_9 = Number(revenue_quarter_9) + Number(other_income_quarter_9);
let total_expense_quarter_9 = Number(expense_quarter_9) + Number(interest_quarter_9) + Number(depreciation_quarter_9);
let PBT_quarter_9 = total_revenue_quarter_9 - total_expense_quarter_9;
document.getElementById('pbt-q9').textContent = PBT_quarter_9;

let other_income_quarter_10 = 789;
let interest_quarter_10 = 199;
let depreciation_quarter_10 = 1230;
let total_revenue_quarter_10 = Number(revenue_quarter_10) + Number(other_income_quarter_10);
let total_expense_quarter_10 = Number(expense_quarter_10) + Number(interest_quarter_10) + Number(depreciation_quarter_10);
let PBT_quarter_10 = total_revenue_quarter_10 - total_expense_quarter_10;
document.getElementById('pbt-q10').textContent = PBT_quarter_10;

let other_income_quarter_11 = 965;
let interest_quarter_11 = 148;
let depreciation_quarter_11 = 1237;
let total_revenue_quarter_11 = Number(revenue_quarter_11) + Number(other_income_quarter_11);
let total_expense_quarter_11 = Number(expense_quarter_11) + Number(interest_quarter_11) + Number(depreciation_quarter_11);
let PBT_quarter_11 = total_revenue_quarter_11 - total_expense_quarter_11;
document.getElementById('pbt-q11').textContent = PBT_quarter_11;

let other_income_quarter_12 = 520;
let interest_quarter_12 = 160;
let depreciation_quarter_12 = 1269;
let total_revenue_quarter_12 = Number(revenue_quarter_12) + Number(other_income_quarter_12);
let total_expense_quarter_12 = Number(expense_quarter_12) + Number(interest_quarter_12) + Number(depreciation_quarter_12);
let PBT_quarter_12 = total_revenue_quarter_12 - total_expense_quarter_12;
document.getElementById('pbt-q12').textContent = PBT_quarter_12;

let other_income_quarter_13 = 1175;
let interest_quarter_13 = 272;
let depreciation_quarter_13 = 1286;
let total_revenue_quarter_13= Number(revenue_quarter_13) + Number(other_income_quarter_13);
let total_expense_quarter_13 = Number(expense_quarter_13) + Number(interest_quarter_13) + Number(depreciation_quarter_13);
let PBT_quarter_13 = total_revenue_quarter_13 - total_expense_quarter_13;
document.getElementById('pbt-q13').textContent = PBT_quarter_13;

// Net Profit (PAT) = PBT - (PBT * tax %)
let tax_quarter_1 = 23/100;
let PAT_quarter_1 = PBT_quarter_1 - (PBT_quarter_1 * tax_quarter_1);
rounded_PAT_quarter_1 = PAT_quarter_1.toFixed(0);
document.getElementById('pat-q1').textContent = rounded_PAT_quarter_1; 

let tax_quarter_2 = 26/100;
let PAT_quarter_2 = PBT_quarter_2 - (PBT_quarter_2 * tax_quarter_2);
rounded_PAT_quarter_2 = PAT_quarter_2.toFixed(0);
document.getElementById('pat-q2').textContent = rounded_PAT_quarter_2;

let tax_quarter_3 = 25/100;
let PAT_quarter_3 = PBT_quarter_3 - (PBT_quarter_3 * tax_quarter_3);
rounded_PAT_quarter_3 = PAT_quarter_3.toFixed(0);
document.getElementById('pat-q3').textContent = rounded_PAT_quarter_3;

let tax_quarter_4 = 25/100;
let PAT_quarter_4 = PBT_quarter_4 - (PBT_quarter_4 * tax_quarter_4);
rounded_PAT_quarter_4 = PAT_quarter_4.toFixed(0);
document.getElementById('pat-q4').textContent = rounded_PAT_quarter_4;

let tax_quarter_5 = 26/100;
let PAT_quarter_5 = PBT_quarter_5 - (PBT_quarter_5 * tax_quarter_5);
rounded_PAT_quarter_5 = PAT_quarter_5.toFixed(0);
document.getElementById('pat-q5').textContent = rounded_PAT_quarter_5;

let tax_quarter_6 = 26/100;
let PAT_quarter_6 = PBT_quarter_6 - (PBT_quarter_6 * tax_quarter_6);
rounded_PAT_quarter_6 = PAT_quarter_6.toFixed(0);
document.getElementById('pat-q6').textContent = rounded_PAT_quarter_6;

let tax_quarter_7 = 26/100;
let PAT_quarter_7 = PBT_quarter_7 - (PBT_quarter_7 * tax_quarter_7);
rounded_PAT_quarter_7 = PAT_quarter_7.toFixed(0);
document.getElementById('pat-q7').textContent = rounded_PAT_quarter_7;

let tax_quarter_8 = 26/100;
let PAT_quarter_8 = PBT_quarter_8 - (PBT_quarter_8 * tax_quarter_8);
rounded_PAT_quarter_8 = PAT_quarter_8.toFixed(0);
document.getElementById('pat-q8').textContent = rounded_PAT_quarter_8;

let tax_quarter_9 = 25/100;
let PAT_quarter_9 = PBT_quarter_9 - (PBT_quarter_9 * tax_quarter_9);
rounded_PAT_quarter_9 = PAT_quarter_9.toFixed(0);
document.getElementById('pat-q9').textContent = rounded_PAT_quarter_9;

let tax_quarter_10 = 25/100;
let PAT_quarter_10 = PBT_quarter_10 - (PBT_quarter_10 * tax_quarter_10);
rounded_PAT_quarter_10 = PAT_quarter_10.toFixed(0);
document.getElementById('pat-q10').textContent = rounded_PAT_quarter_10;

let tax_quarter_11 = 26/100;
let PAT_quarter_11 = PBT_quarter_11 - (PBT_quarter_11 * tax_quarter_11);
rounded_PAT_quarter_11 = PAT_quarter_11.toFixed(0);
document.getElementById('pat-q11').textContent = rounded_PAT_quarter_11;

let tax_quarter_12 = 26/100;
let PAT_quarter_12 = PBT_quarter_12 - (PBT_quarter_12 * tax_quarter_12);
rounded_PAT_quarter_12 = PAT_quarter_12.toFixed(0);
document.getElementById('pat-q12').textContent = rounded_PAT_quarter_12;

let tax_quarter_13 = 26/100;
let PAT_quarter_13 = PBT_quarter_13 - (PBT_quarter_13 * tax_quarter_13);
rounded_PAT_quarter_13 = PAT_quarter_13.toFixed(0);
document.getElementById('pat-q13').textContent = rounded_PAT_quarter_13;


// Operating Profit = Revenue - Expenses (Profit / Loss Statement)
let revenue_PandL_1 = document.getElementById('r-pl1').textContent;
let expense_PandL_1 = document.getElementById('ex-pl1').textContent;
let operating_profit_PandL_1 = revenue_PandL_1 - expense_PandL_1;
document.getElementById('op-pl1').textContent = operating_profit_PandL_1;

let revenue_PandL_2 = document.getElementById('r-pl2').textContent;
let expense_PandL_2 = document.getElementById('ex-pl2').textContent;
let operating_profit_PandL_2 = revenue_PandL_2 - expense_PandL_2;
document.getElementById('op-pl2').textContent = operating_profit_PandL_2;

let revenue_PandL_3 = document.getElementById('r-pl3').textContent;
let expense_PandL_3 = document.getElementById('ex-pl3').textContent;
let operating_profit_PandL_3 = revenue_PandL_3 - expense_PandL_3;
document.getElementById('op-pl3').textContent = operating_profit_PandL_3;

let revenue_PandL_4 = document.getElementById('r-pl4').textContent;
let expense_PandL_4 = document.getElementById('ex-pl4').textContent;
let operating_profit_PandL_4 = revenue_PandL_4 - expense_PandL_4;
document.getElementById('op-pl4').textContent = operating_profit_PandL_4;

let revenue_PandL_5 = document.getElementById('r-pl5').textContent;
let expense_PandL_5 = document.getElementById('ex-pl5').textContent;
let operating_profit_PandL_5 = revenue_PandL_5 - expense_PandL_5;
document.getElementById('op-pl5').textContent = operating_profit_PandL_5;

let revenue_PandL_6 = document.getElementById('r-pl6').textContent;
let expense_PandL_6 = document.getElementById('ex-pl6').textContent;
let operating_profit_PandL_6 = revenue_PandL_6 - expense_PandL_6;
document.getElementById('op-pl6').textContent = operating_profit_PandL_6;

let revenue_PandL_7 = document.getElementById('r-pl7').textContent;
let expense_PandL_7 = document.getElementById('ex-pl7').textContent;
let operating_profit_PandL_7 = revenue_PandL_7 - expense_PandL_7;
document.getElementById('op-pl7').textContent = operating_profit_PandL_7;

let revenue_PandL_8 = document.getElementById('r-pl8').textContent;
let expense_PandL_8 = document.getElementById('ex-pl8').textContent;
let operating_profit_PandL_8 = revenue_PandL_8 - expense_PandL_8;
document.getElementById('op-pl8').textContent = operating_profit_PandL_8;

let revenue_PandL_9 = document.getElementById('r-pl9').textContent;
let expense_PandL_9 = document.getElementById('ex-pl9').textContent;
let operating_profit_PandL_9 = revenue_PandL_9 - expense_PandL_9;
document.getElementById('op-pl9').textContent = operating_profit_PandL_9;

let revenue_PandL_10 = document.getElementById('r-pl10').textContent;
let expense_PandL_10 = document.getElementById('ex-pl10').textContent;
let operating_profit_PandL_10 = revenue_PandL_10 - expense_PandL_10;
document.getElementById('op-pl10').textContent = operating_profit_PandL_10;

let revenue_PandL_11 = document.getElementById('r-pl11').textContent;
let expense_PandL_11 = document.getElementById('ex-pl11').textContent;
let operating_profit_PandL_11 = revenue_PandL_11 - expense_PandL_11;
document.getElementById('op-pl11').textContent = operating_profit_PandL_11;

let revenue_PandL_12 = document.getElementById('r-pl12').textContent;
let expense_PandL_12 = document.getElementById('ex-pl12').textContent;
let operating_profit_PandL_12 = revenue_PandL_12 - expense_PandL_12;
document.getElementById('op-pl12').textContent = operating_profit_PandL_12;

// Operating Profit Margin (%) = (operating Profit / Revenue) * 100 (Profit / Loss Statement)
let operating_profit_margin_PandL_percent_1 = (operating_profit_PandL_1 / revenue_PandL_1) * 100;
let rounded_operating_profit_margin_PandL_percent_1 = operating_profit_margin_PandL_percent_1.toFixed(2);
document.getElementById('op-pl1-percent').textContent = rounded_operating_profit_margin_PandL_percent_1;

let operating_profit_margin_PandL_percent_2 = (operating_profit_PandL_2 / revenue_PandL_2) * 100;
let rounded_operating_profit_margin_PandL_percent_2 = operating_profit_margin_PandL_percent_2.toFixed(2);
document.getElementById('op-pl2-percent').textContent = rounded_operating_profit_margin_PandL_percent_2;

let operating_profit_margin_PandL_percent_3 = (operating_profit_PandL_3 / revenue_PandL_3) * 100;
let rounded_operating_profit_margin_PandL_percent_3 = operating_profit_margin_PandL_percent_3.toFixed(2);
document.getElementById('op-pl3-percent').textContent = rounded_operating_profit_margin_PandL_percent_3;

let operating_profit_margin_PandL_percent_4 = (operating_profit_PandL_4 / revenue_PandL_4) * 100;
let rounded_operating_profit_margin_PandL_percent_4 = operating_profit_margin_PandL_percent_4.toFixed(2);
document.getElementById('op-pl4-percent').textContent = rounded_operating_profit_margin_PandL_percent_4;

let operating_profit_margin_PandL_percent_5 = (operating_profit_PandL_5 / revenue_PandL_5) * 100;
let rounded_operating_profit_margin_PandL_percent_5 = operating_profit_margin_PandL_percent_5.toFixed(2);
document.getElementById('op-pl5-percent').textContent = rounded_operating_profit_margin_PandL_percent_5;

let operating_profit_margin_PandL_percent_6 = (operating_profit_PandL_6 / revenue_PandL_6) * 100;
let rounded_operating_profit_margin_PandL_percent_6 = operating_profit_margin_PandL_percent_6.toFixed(2);
document.getElementById('op-pl6-percent').textContent = rounded_operating_profit_margin_PandL_percent_6;

let operating_profit_margin_PandL_percent_7 = (operating_profit_PandL_7 / revenue_PandL_7) * 100;
let rounded_operating_profit_margin_PandL_percent_7 = operating_profit_margin_PandL_percent_7.toFixed(2);
document.getElementById('op-pl7-percent').textContent = rounded_operating_profit_margin_PandL_percent_7;

let operating_profit_margin_PandL_percent_8 = (operating_profit_PandL_8 / revenue_PandL_8) * 100;
let rounded_operating_profit_margin_PandL_percent_8 = operating_profit_margin_PandL_percent_8.toFixed(2);
document.getElementById('op-pl8-percent').textContent = rounded_operating_profit_margin_PandL_percent_8;

let operating_profit_margin_PandL_percent_9 = (operating_profit_PandL_9 / revenue_PandL_9) * 100;
let rounded_operating_profit_margin_PandL_percent_9 = operating_profit_margin_PandL_percent_9.toFixed(2);
document.getElementById('op-pl9-percent').textContent = rounded_operating_profit_margin_PandL_percent_9;

let operating_profit_margin_PandL_percent_10 = (operating_profit_PandL_10 / revenue_PandL_10) * 100;
let rounded_operating_profit_margin_PandL_percent_10 = operating_profit_margin_PandL_percent_10.toFixed(2);
document.getElementById('op-pl10-percent').textContent = rounded_operating_profit_margin_PandL_percent_10;

let operating_profit_margin_PandL_percent_11 = (operating_profit_PandL_11 / revenue_PandL_11) * 100;
let rounded_operating_profit_margin_PandL_percent_11 = operating_profit_margin_PandL_percent_11.toFixed(2);
document.getElementById('op-pl11-percent').textContent = rounded_operating_profit_margin_PandL_percent_11;

let operating_profit_margin_PandL_percent_12 = (operating_profit_PandL_12 / revenue_PandL_12) * 100;
let rounded_operating_profit_margin_PandL_percent_12 = operating_profit_margin_PandL_percent_12.toFixed(2);
document.getElementById('op-pl12-percent').textContent = rounded_operating_profit_margin_PandL_percent_12;

// Profit Before Tax (PBT) = (Revenue + Other Income) - (Expenses + Interest + Depreciation)
let other_income_PandL_1 = 428;
let interest_PandL_1 = 22;
let depreciation_PandL_1 = 918;
let total_revenue_PandL_1 = Number(revenue_PandL_1) + Number(other_income_PandL_1);
let total_expense_PandL_1 = Number(expense_PandL_1) + Number(interest_PandL_1) + Number(depreciation_PandL_1);
let PBT_PandL_1 = total_revenue_PandL_1 - total_expense_PandL_1;
document.getElementById('pbt-pl1').textContent = PBT_PandL_1;

let other_income_PandL_2 = 1178;
let interest_PandL_2 = 48;
let depreciation_PandL_2 = 1080;
let total_revenue_PandL_2 = Number(revenue_PandL_2) + Number(other_income_PandL_2);
let total_expense_PandL_2 = Number(expense_PandL_2) + Number(interest_PandL_2) + Number(depreciation_PandL_2);
let PBT_PandL_2 = total_revenue_PandL_2 - total_expense_PandL_2;
document.getElementById('pbt-pl2').textContent = PBT_PandL_2;

let other_income_PandL_3 = 1637;
let interest_PandL_3 = 39;
let depreciation_PandL_3 = 1349;
let total_revenue_PandL_3 = Number(revenue_PandL_3) + Number(other_income_PandL_3);
let total_expense_PandL_3 = Number(expense_PandL_3) + Number(interest_PandL_3) + Number(depreciation_PandL_3);
let PBT_PandL_3 = total_revenue_PandL_3 - total_expense_PandL_3;
document.getElementById('pbt-pl3').textContent = PBT_PandL_3;

let other_income_PandL_4 = 3720;
let interest_PandL_4 = 104;
let depreciation_PandL_4 = 1799;
let total_revenue_PandL_4 = Number(revenue_PandL_4) + Number(other_income_PandL_4);
let total_expense_PandL_4 = Number(expense_PandL_4) + Number(interest_PandL_4) + Number(depreciation_PandL_4);
let PBT_PandL_4 = total_revenue_PandL_4 - total_expense_PandL_4;
document.getElementById('pbt-pl4').textContent = PBT_PandL_4;

let other_income_PandL_5 = 3084;
let interest_PandL_5 = 33;
let depreciation_PandL_5 = 1888;
let total_revenue_PandL_5 = Number(revenue_PandL_5) + Number(other_income_PandL_5);
let total_expense_PandL_5 = Number(expense_PandL_5) + Number(interest_PandL_5) + Number(depreciation_PandL_5);
let PBT_PandL_5 = total_revenue_PandL_5 - total_expense_PandL_5;
document.getElementById('pbt-pl5').textContent = PBT_PandL_5;

let other_income_PandL_6 = 4221;
let interest_PandL_6 = 32;
let depreciation_PandL_6 = 1987;
let total_revenue_PandL_6 = Number(revenue_PandL_6) + Number(other_income_PandL_6);
let total_expense_PandL_6 = Number(expense_PandL_6) + Number(interest_PandL_6) + Number(depreciation_PandL_6);
let PBT_PandL_6 = total_revenue_PandL_6 - total_expense_PandL_6;
document.getElementById('pbt-pl6').textContent = PBT_PandL_6;

let other_income_PandL_7 = 3642;
let interest_PandL_7 = 52;
let depreciation_PandL_7 = 2014;
let total_revenue_PandL_7 = Number(revenue_PandL_7) + Number(other_income_PandL_7);
let total_expense_PandL_7 = Number(expense_PandL_7) + Number(interest_PandL_7) + Number(depreciation_PandL_7);
let PBT_PandL_7 = total_revenue_PandL_7 - total_expense_PandL_7;
document.getElementById('pbt-pl7').textContent = PBT_PandL_7;

let other_income_PandL_8 = 4311;
let interest_PandL_8 = 198;
let depreciation_PandL_8 = 2056;
let total_revenue_PandL_8 = Number(revenue_PandL_8) + Number(other_income_PandL_8);
let total_expense_PandL_8 = Number(expense_PandL_8) + Number(interest_PandL_8) + Number(depreciation_PandL_8);
let PBT_PandL_8 = total_revenue_PandL_8 - total_expense_PandL_8;
document.getElementById('pbt-pl8').textContent = PBT_PandL_8;

let other_income_PandL_9 = 4592;
let interest_PandL_9 = 924;
let depreciation_PandL_9 = 3529;
let total_revenue_PandL_9 = Number(revenue_PandL_9) + Number(other_income_PandL_9);
let total_expense_PandL_9 = Number(expense_PandL_9) + Number(interest_PandL_9) + Number(depreciation_PandL_9);
let PBT_PandL_9 = total_revenue_PandL_9 - total_expense_PandL_9;
document.getElementById('pbt-pl9').textContent = PBT_PandL_9;

let other_income_PandL_10 = 1916;
let interest_PandL_10 = 637;
let depreciation_PandL_10 = 4065;
let total_revenue_PandL_10 = Number(revenue_PandL_10) + Number(other_income_PandL_10);
let total_expense_PandL_10 = Number(expense_PandL_10) + Number(interest_PandL_10) + Number(depreciation_PandL_10);
let PBT_PandL_10 = total_revenue_PandL_10 - total_expense_PandL_10;
document.getElementById('pbt-pl10').textContent = PBT_PandL_10;

let other_income_PandL_11 = 4018;
let interest_PandL_11 = 784;
let depreciation_PandL_11 = 4604;
let total_revenue_PandL_11 = Number(revenue_PandL_11) + Number(other_income_PandL_11);
let total_expense_PandL_11 = Number(expense_PandL_11) + Number(interest_PandL_11) + Number(depreciation_PandL_11);
let PBT_PandL_11 = total_revenue_PandL_11 - total_expense_PandL_11;
document.getElementById('pbt-pl11').textContent = PBT_PandL_11;

let other_income_PandL_12 = 3449;
let interest_PandL_12 = 779;
let depreciation_PandL_12 = 5022;
let total_revenue_PandL_12 = Number(revenue_PandL_12) + Number(other_income_PandL_12);
let total_expense_PandL_12 = Number(expense_PandL_12) + Number(interest_PandL_12) + Number(depreciation_PandL_12);
let PBT_PandL_12 = total_revenue_PandL_12 - total_expense_PandL_12;
document.getElementById('pbt-pl12').textContent = PBT_PandL_12;

// Net Profit (PAT) = PBT - (PBT * tax %) (Profit / Loss Statement)
let tax_PandL_1 = 24/100;
let PAT_PandL_1 = PBT_PandL_1 - (PBT_PandL_1 * tax_PandL_1);
rounded_PAT_PandL_1 = PAT_PandL_1.toFixed(0);
document.getElementById('pat-pl1').textContent = rounded_PAT_PandL_1;

let tax_PandL_2 = 22/100;
let PAT_PandL_2 = PBT_PandL_2 - (PBT_PandL_2 * tax_PandL_2);
rounded_PAT_PandL_2 = PAT_PandL_2.toFixed(0);
document.getElementById('pat-pl2').textContent = rounded_PAT_PandL_2;

let tax_PandL_3 = 24/100;
let PAT_PandL_3 = PBT_PandL_3 - (PBT_PandL_3 * tax_PandL_3);
rounded_PAT_PandL_3 = PAT_PandL_3.toFixed(0);
document.getElementById('pat-pl3').textContent = rounded_PAT_PandL_3;

let tax_PandL_4 = 24/100;
let PAT_PandL_4 = PBT_PandL_4 - (PBT_PandL_4 * tax_PandL_4);
rounded_PAT_PandL_4 = PAT_PandL_4.toFixed(0);
document.getElementById('pat-pl4').textContent = rounded_PAT_PandL_4;

let tax_PandL_5 = 24/100;
let PAT_PandL_5 = PBT_PandL_5 - (PBT_PandL_5 * tax_PandL_5);
rounded_PAT_PandL_5 = PAT_PandL_5.toFixed(0);
document.getElementById('pat-pl5').textContent = rounded_PAT_PandL_5;

let tax_PandL_6 = 24/100;
let PAT_PandL_6 = PBT_PandL_6 - (PBT_PandL_6 * tax_PandL_6);
rounded_PAT_PandL_6 = PAT_PandL_6.toFixed(0);
document.getElementById('pat-pl6').textContent = rounded_PAT_PandL_6;

let tax_PandL_7 = 24/100;
let PAT_PandL_7 = PBT_PandL_7 - (PBT_PandL_7 * tax_PandL_7);
rounded_PAT_PandL_7 = PAT_PandL_7.toFixed(0);
document.getElementById('pat-pl7').textContent = rounded_PAT_PandL_7;

let tax_PandL_8 = 24/100;
let PAT_PandL_8 = PBT_PandL_8 - (PBT_PandL_8 * tax_PandL_8);
rounded_PAT_PandL_8 = PAT_PandL_8.toFixed(0);
document.getElementById('pat-pl8').textContent = rounded_PAT_PandL_8;

let tax_PandL_9 = 23/100;
let PAT_PandL_9 = PBT_PandL_9 - (PBT_PandL_9 * tax_PandL_9);
rounded_PAT_PandL_9 = PAT_PandL_9.toFixed(0);
document.getElementById('pat-pl9').textContent = rounded_PAT_PandL_9;

let tax_PandL_10 = 26/100;
let PAT_PandL_10 = PBT_PandL_10 - (PBT_PandL_10 * tax_PandL_10);
rounded_PAT_PandL_10 = PAT_PandL_10.toFixed(0);
document.getElementById('pat-pl10').textContent = rounded_PAT_PandL_10;

let tax_PandL_11 = 26/100;
let PAT_PandL_11 = PBT_PandL_11 - (PBT_PandL_11 * tax_PandL_11);
rounded_PAT_PandL_11 = PAT_PandL_11.toFixed(0);
document.getElementById('pat-pl11').textContent = rounded_PAT_PandL_11;

let tax_PandL_12 = 26/100;
let PAT_PandL_12 = PBT_PandL_12 - (PBT_PandL_12 * tax_PandL_12);
rounded_PAT_PandL_12 = PAT_PandL_12.toFixed(0);
document.getElementById('pat-pl12').textContent = rounded_PAT_PandL_12;

// Compounded Revenue Growth = [ ( (ending revenue value + ending other income) / (starting revenue value + starting other income) ) ^ (1 / Number of years) ) - 1 ] * 100
let number_of_years_1 = 10;
let compounded_revenue_growth_rate_10years = (Math.pow((total_revenue_PandL_12 / total_revenue_PandL_2), (1 / number_of_years_1)) - 1) * 100; 
document.getElementById('year1').textContent = compounded_revenue_growth_rate_10years.toFixed(2) + "%";

let number_of_years_2 = 5;
let compounded_revenue_growth_rate_5years = (Math.pow((total_revenue_PandL_12 / total_revenue_PandL_7), (1 / number_of_years_2)) - 1) * 100; 
document.getElementById('year2').textContent = compounded_revenue_growth_rate_5years.toFixed(2) + "%";

let number_of_years_3 = 1;
let compounded_revenue_growth_rate_1year = (Math.pow((total_revenue_PandL_12 / total_revenue_PandL_11), (1 / number_of_years_3)) - 1) * 100; 
document.getElementById('year3').textContent = compounded_revenue_growth_rate_1year.toFixed(2) + "%";

// Compounded Net Profit Growth = [ ( (ending profit / starting profit ) ^ (1 / Number of years) ) - 1 ] * 100
let number_of_years_4 = 10;
let compounded_net_profit_growth_rate_10years = (Math.pow((rounded_PAT_PandL_12 / rounded_PAT_PandL_2), (1 / number_of_years_4)) - 1) * 100; 
document.getElementById('year4').textContent = compounded_net_profit_growth_rate_10years.toFixed(2) + "%";

let number_of_years_5 = 5;
let compounded_net_profit_growth_rate_5years = (Math.pow((rounded_PAT_PandL_12 / rounded_PAT_PandL_7), (1 / number_of_years_5)) - 1) * 100; 
document.getElementById('year5').textContent = compounded_net_profit_growth_rate_5years.toFixed(2) + "%";

let number_of_years_6 = 1;
let compounded_net_profit_growth_rate_1year = (Math.pow((rounded_PAT_PandL_12 / rounded_PAT_PandL_11), (1 / number_of_years_6)) - 1) * 100; 
document.getElementById('year6').textContent = compounded_net_profit_growth_rate_1year.toFixed(2) + "%";

// Total Equity = Share Capital + (Reserves + Surplus)    (Balance Sheet)
let share_capital_1_bs = document.getElementById('sc-bs1').textContent;
let reserves_1_bs = document.getElementById('rANDs-bs1').textContent;
let total_equity_1_bs = Number(share_capital_1_bs) + Number(reserves_1_bs);
document.getElementById('te-bs1').textContent = total_equity_1_bs;

let share_capital_2_bs = document.getElementById('sc-bs2').textContent;
let reserves_2_bs = document.getElementById('rANDs-bs2').textContent;
let total_equity_2_bs = Number(share_capital_2_bs) + Number(reserves_2_bs);
document.getElementById('te-bs2').textContent = total_equity_2_bs;

let share_capital_3_bs = document.getElementById('sc-bs3').textContent;
let reserves_3_bs = document.getElementById('rANDs-bs3').textContent;
let total_equity_3_bs = Number(share_capital_3_bs) + Number(reserves_3_bs);
document.getElementById('te-bs3').textContent = total_equity_3_bs;

let share_capital_4_bs = document.getElementById('sc-bs4').textContent;
let reserves_4_bs = document.getElementById('rANDs-bs4').textContent;
let total_equity_4_bs = Number(share_capital_4_bs) + Number(reserves_4_bs);
document.getElementById('te-bs4').textContent = total_equity_4_bs;

let share_capital_5_bs = document.getElementById('sc-bs5').textContent;
let reserves_5_bs = document.getElementById('rANDs-bs5').textContent;
let total_equity_5_bs = Number(share_capital_5_bs) + Number(reserves_5_bs);
document.getElementById('te-bs5').textContent = total_equity_5_bs;

let share_capital_6_bs = document.getElementById('sc-bs6').textContent;
let reserves_6_bs = document.getElementById('rANDs-bs6').textContent;
let total_equity_6_bs = Number(share_capital_6_bs) + Number(reserves_6_bs);
document.getElementById('te-bs6').textContent = total_equity_6_bs;

let share_capital_7_bs = document.getElementById('sc-bs7').textContent;
let reserves_7_bs = document.getElementById('rANDs-bs7').textContent;
let total_equity_7_bs = Number(share_capital_7_bs) + Number(reserves_7_bs);
document.getElementById('te-bs7').textContent = total_equity_7_bs;

let share_capital_8_bs = document.getElementById('sc-bs8').textContent;
let reserves_8_bs = document.getElementById('rANDs-bs8').textContent;
let total_equity_8_bs = Number(share_capital_8_bs) + Number(reserves_8_bs);
document.getElementById('te-bs8').textContent = total_equity_8_bs;

let share_capital_9_bs = document.getElementById('sc-bs9').textContent;
let reserves_9_bs = document.getElementById('rANDs-bs9').textContent;
let total_equity_9_bs = Number(share_capital_9_bs) + Number(reserves_9_bs);
document.getElementById('te-bs9').textContent = total_equity_9_bs;

let share_capital_10_bs = document.getElementById('sc-bs10').textContent;
let reserves_10_bs = document.getElementById('rANDs-bs10').textContent;
let total_equity_10_bs = Number(share_capital_10_bs) + Number(reserves_10_bs);
document.getElementById('te-bs10').textContent = total_equity_10_bs;

let share_capital_11_bs = document.getElementById('sc-bs11').textContent;
let reserves_11_bs = document.getElementById('rANDs-bs11').textContent;
let total_equity_11_bs = Number(share_capital_11_bs) + Number(reserves_11_bs);
document.getElementById('te-bs11').textContent = total_equity_11_bs;

let share_capital_12_bs = document.getElementById('sc-bs12').textContent;
let reserves_12_bs = document.getElementById('rANDs-bs12').textContent;
let total_equity_12_bs = Number(share_capital_12_bs) + Number(reserves_12_bs);
document.getElementById('te-bs12').textContent = total_equity_12_bs;

// Total Liabilities = Current Liabilities + Long Term Liabilities + Other Liabilities + Borrowings
// (Balance Sheet)
let current_liabilities_1_bs = document.getElementById('cl-bs1').textContent;
let long_term_liabilities_1_bs = document.getElementById('ltl-bs1').textContent;
let other_liabilities_1_bs = document.getElementById('ol-bs1').textContent;
let borrowings_1_bs = document.getElementById('borrow-bs1').textContent;
let total_liabilites_1_bs = Number(current_liabilities_1_bs) + Number(long_term_liabilities_1_bs) + Number(other_liabilities_1_bs) + Number(borrowings_1_bs);
document.getElementById('tl-bs1').textContent = total_liabilites_1_bs;

let current_liabilities_2_bs = document.getElementById('cl-bs2').textContent;
let long_term_liabilities_2_bs = document.getElementById('ltl-bs2').textContent;
let other_liabilities_2_bs = document.getElementById('ol-bs2').textContent;
let borrowings_2_bs = document.getElementById('borrow-bs2').textContent;
let total_liabilites_2_bs = Number(current_liabilities_2_bs) + Number(long_term_liabilities_2_bs) + Number(other_liabilities_2_bs) + Number(borrowings_2_bs);
document.getElementById('tl-bs2').textContent = total_liabilites_2_bs;

let current_liabilities_3_bs = document.getElementById('cl-bs3').textContent;
let long_term_liabilities_3_bs = document.getElementById('ltl-bs3').textContent;
let other_liabilities_3_bs = document.getElementById('ol-bs3').textContent;
let borrowings_3_bs = document.getElementById('borrow-bs3').textContent;
let total_liabilites_3_bs = Number(current_liabilities_3_bs) + Number(long_term_liabilities_3_bs) + Number(other_liabilities_3_bs) + Number(borrowings_3_bs);
document.getElementById('tl-bs3').textContent = total_liabilites_3_bs;

let current_liabilities_4_bs = document.getElementById('cl-bs4').textContent;
let long_term_liabilities_4_bs = document.getElementById('ltl-bs4').textContent;
let other_liabilities_4_bs = document.getElementById('ol-bs4').textContent;
let borrowings_4_bs = document.getElementById('borrow-bs4').textContent;
let total_liabilites_4_bs = Number(current_liabilities_4_bs) + Number(long_term_liabilities_4_bs) + Number(other_liabilities_4_bs) + Number(borrowings_4_bs);
document.getElementById('tl-bs4').textContent = total_liabilites_4_bs;

let current_liabilities_5_bs = document.getElementById('cl-bs5').textContent;
let long_term_liabilities_5_bs = document.getElementById('ltl-bs5').textContent;
let other_liabilities_5_bs = document.getElementById('ol-bs5').textContent;
let borrowings_5_bs = document.getElementById('borrow-bs5').textContent;
let total_liabilites_5_bs = Number(current_liabilities_5_bs) + Number(long_term_liabilities_5_bs) + Number(other_liabilities_5_bs) + Number(borrowings_5_bs);
document.getElementById('tl-bs5').textContent = total_liabilites_5_bs;

let current_liabilities_6_bs = document.getElementById('cl-bs6').textContent;
let long_term_liabilities_6_bs = document.getElementById('ltl-bs6').textContent;
let other_liabilities_6_bs = document.getElementById('ol-bs6').textContent;
let borrowings_6_bs = document.getElementById('borrow-bs6').textContent;
let total_liabilites_6_bs = Number(current_liabilities_6_bs) + Number(long_term_liabilities_6_bs) + Number(other_liabilities_6_bs) + Number(borrowings_6_bs);
document.getElementById('tl-bs6').textContent = total_liabilites_6_bs;

let current_liabilities_7_bs = document.getElementById('cl-bs7').textContent;
let long_term_liabilities_7_bs = document.getElementById('ltl-bs7').textContent;
let other_liabilities_7_bs = document.getElementById('ol-bs7').textContent;
let borrowings_7_bs = document.getElementById('borrow-bs7').textContent;
let total_liabilites_7_bs = Number(current_liabilities_7_bs) + Number(long_term_liabilities_7_bs) + Number(other_liabilities_7_bs) + Number(borrowings_7_bs);
document.getElementById('tl-bs7').textContent = total_liabilites_7_bs;

let current_liabilities_8_bs = document.getElementById('cl-bs8').textContent;
let long_term_liabilities_8_bs = document.getElementById('ltl-bs8').textContent;
let other_liabilities_8_bs = document.getElementById('ol-bs8').textContent;
let borrowings_8_bs = document.getElementById('borrow-bs8').textContent;
let total_liabilites_8_bs = Number(current_liabilities_8_bs) + Number(long_term_liabilities_8_bs) + Number(other_liabilities_8_bs) + Number(borrowings_8_bs);
document.getElementById('tl-bs8').textContent = total_liabilites_8_bs;

let current_liabilities_9_bs = document.getElementById('cl-bs9').textContent;
let long_term_liabilities_9_bs = document.getElementById('ltl-bs9').textContent;
let other_liabilities_9_bs = document.getElementById('ol-bs9').textContent;
let borrowings_9_bs = document.getElementById('borrow-bs9').textContent;
let total_liabilites_9_bs = Number(current_liabilities_9_bs) + Number(long_term_liabilities_9_bs) + Number(other_liabilities_9_bs) + Number(borrowings_9_bs);
document.getElementById('tl-bs9').textContent = total_liabilites_9_bs;

let current_liabilities_10_bs = document.getElementById('cl-bs10').textContent;
let long_term_liabilities_10_bs = document.getElementById('ltl-bs10').textContent;
let other_liabilities_10_bs = document.getElementById('ol-bs10').textContent;
let borrowings_10_bs = document.getElementById('borrow-bs10').textContent;
let total_liabilites_10_bs = Number(current_liabilities_10_bs) + Number(long_term_liabilities_10_bs) + Number(other_liabilities_10_bs) + Number(borrowings_10_bs);
document.getElementById('tl-bs10').textContent = total_liabilites_10_bs;

let current_liabilities_11_bs = document.getElementById('cl-bs11').textContent;
let long_term_liabilities_11_bs = document.getElementById('ltl-bs11').textContent;
let other_liabilities_11_bs = document.getElementById('ol-bs11').textContent;
let borrowings_11_bs = document.getElementById('borrow-bs11').textContent;
let total_liabilites_11_bs = Number(current_liabilities_11_bs) + Number(long_term_liabilities_11_bs) + Number(other_liabilities_11_bs) + Number(borrowings_11_bs);
document.getElementById('tl-bs11').textContent = total_liabilites_11_bs;

let current_liabilities_12_bs = document.getElementById('cl-bs12').textContent;
let long_term_liabilities_12_bs = document.getElementById('ltl-bs12').textContent;
let other_liabilities_12_bs = document.getElementById('ol-bs12').textContent;
let borrowings_12_bs = document.getElementById('borrow-bs12').textContent;
let total_liabilites_12_bs = Number(current_liabilities_12_bs) + Number(long_term_liabilities_12_bs) + Number(other_liabilities_12_bs) + Number(borrowings_12_bs);
document.getElementById('tl-bs12').textContent = total_liabilites_12_bs;

// Total (Equity + Liabilities) = Total Equity + Total Liabilities
let total_EplusL_1_bs = total_equity_1_bs + total_liabilites_1_bs;
document.getElementById('tel-bs1').textContent = total_EplusL_1_bs;

let total_EplusL_2_bs = total_equity_2_bs + total_liabilites_2_bs;
document.getElementById('tel-bs2').textContent = total_EplusL_2_bs;

let total_EplusL_3_bs = total_equity_3_bs + total_liabilites_3_bs;
document.getElementById('tel-bs3').textContent = total_EplusL_3_bs;

let total_EplusL_4_bs = total_equity_4_bs + total_liabilites_4_bs;
document.getElementById('tel-bs4').textContent = total_EplusL_4_bs;

let total_EplusL_5_bs = total_equity_5_bs + total_liabilites_5_bs;
document.getElementById('tel-bs5').textContent = total_EplusL_5_bs;

let total_EplusL_6_bs = total_equity_6_bs + total_liabilites_6_bs;
document.getElementById('tel-bs6').textContent = total_EplusL_6_bs;

let total_EplusL_7_bs = total_equity_7_bs + total_liabilites_7_bs;
document.getElementById('tel-bs7').textContent = total_EplusL_7_bs;

let total_EplusL_8_bs = total_equity_8_bs + total_liabilites_8_bs;
document.getElementById('tel-bs8').textContent = total_EplusL_8_bs;

let total_EplusL_9_bs = total_equity_9_bs + total_liabilites_9_bs;
document.getElementById('tel-bs9').textContent = total_EplusL_9_bs;

let total_EplusL_10_bs = total_equity_10_bs + total_liabilites_10_bs;
document.getElementById('tel-bs10').textContent = total_EplusL_10_bs;

let total_EplusL_11_bs = total_equity_11_bs + total_liabilites_11_bs;
document.getElementById('tel-bs11').textContent = total_EplusL_11_bs;

let total_EplusL_12_bs = total_equity_12_bs + total_liabilites_12_bs;
document.getElementById('tel-bs12').textContent = total_EplusL_12_bs;

// Total Assets = Fixed Assets + Current Assets + Other Assets + Investments    (Balance Sheet)
let fixed_assets_1_bs = document.getElementById('fa-bs1').textContent;
let currents_assets_1_bs = document.getElementById('ca-bs1').textContent;
let other_assets_1_bs = document.getElementById('oa-bs1').textContent;
let investments_1_bs = document.getElementById('i-bs1').textContent;
let total_assets_1_bs = Number(fixed_assets_1_bs) + Number(currents_assets_1_bs) + Number(other_assets_1_bs) + Number(investments_1_bs);
document.getElementById('ta-bs1').textContent = total_assets_1_bs;

let fixed_assets_2_bs = document.getElementById('fa-bs2').textContent;
let currents_assets_2_bs = document.getElementById('ca-bs2').textContent;
let other_assets_2_bs = document.getElementById('oa-bs2').textContent;
let investments_2_bs = document.getElementById('i-bs2').textContent;
let total_assets_2_bs = Number(fixed_assets_2_bs) + Number(currents_assets_2_bs) + Number(other_assets_2_bs) + Number(investments_2_bs);
document.getElementById('ta-bs2').textContent = total_assets_2_bs;

let fixed_assets_3_bs = document.getElementById('fa-bs3').textContent;
let currents_assets_3_bs = document.getElementById('ca-bs3').textContent;
let other_assets_3_bs = document.getElementById('oa-bs3').textContent;
let investments_3_bs = document.getElementById('i-bs3').textContent;
let total_assets_3_bs = Number(fixed_assets_3_bs) + Number(currents_assets_3_bs) + Number(other_assets_3_bs) + Number(investments_3_bs);
document.getElementById('ta-bs3').textContent = total_assets_3_bs;

let fixed_assets_4_bs = document.getElementById('fa-bs4').textContent;
let currents_assets_4_bs = document.getElementById('ca-bs4').textContent;
let other_assets_4_bs = document.getElementById('oa-bs4').textContent;
let investments_4_bs = document.getElementById('i-bs4').textContent;
let total_assets_4_bs = Number(fixed_assets_4_bs) + Number(currents_assets_4_bs) + Number(other_assets_4_bs) + Number(investments_4_bs);
document.getElementById('ta-bs4').textContent = total_assets_4_bs;

let fixed_assets_5_bs = document.getElementById('fa-bs5').textContent;
let currents_assets_5_bs = document.getElementById('ca-bs5').textContent;
let other_assets_5_bs = document.getElementById('oa-bs5').textContent;
let investments_5_bs = document.getElementById('i-bs5').textContent;
let total_assets_5_bs = Number(fixed_assets_5_bs) + Number(currents_assets_5_bs) + Number(other_assets_5_bs) + Number(investments_5_bs);
document.getElementById('ta-bs5').textContent = total_assets_5_bs;

let fixed_assets_6_bs = document.getElementById('fa-bs6').textContent;
let currents_assets_6_bs = document.getElementById('ca-bs6').textContent;
let other_assets_6_bs = document.getElementById('oa-bs6').textContent;
let investments_6_bs = document.getElementById('i-bs6').textContent;
let total_assets_6_bs = Number(fixed_assets_6_bs) + Number(currents_assets_6_bs) + Number(other_assets_6_bs) + Number(investments_6_bs);
document.getElementById('ta-bs6').textContent = total_assets_6_bs;

let fixed_assets_7_bs = document.getElementById('fa-bs7').textContent;
let currents_assets_7_bs = document.getElementById('ca-bs7').textContent;
let other_assets_7_bs = document.getElementById('oa-bs7').textContent;
let investments_7_bs = document.getElementById('i-bs7').textContent;
let total_assets_7_bs = Number(fixed_assets_7_bs) + Number(currents_assets_7_bs) + Number(other_assets_7_bs) + Number(investments_7_bs);
document.getElementById('ta-bs7').textContent = total_assets_7_bs;

let fixed_assets_8_bs = document.getElementById('fa-bs8').textContent;
let currents_assets_8_bs = document.getElementById('ca-bs8').textContent;
let other_assets_8_bs = document.getElementById('oa-bs8').textContent;
let investments_8_bs = document.getElementById('i-bs8').textContent;
let total_assets_8_bs = Number(fixed_assets_8_bs) + Number(currents_assets_8_bs) + Number(other_assets_8_bs) + Number(investments_8_bs);
document.getElementById('ta-bs8').textContent = total_assets_8_bs;

let fixed_assets_9_bs = document.getElementById('fa-bs9').textContent;
let currents_assets_9_bs = document.getElementById('ca-bs9').textContent;
let other_assets_9_bs = document.getElementById('oa-bs9').textContent;
let investments_9_bs = document.getElementById('i-bs9').textContent;
let total_assets_9_bs = Number(fixed_assets_9_bs) + Number(currents_assets_9_bs) + Number(other_assets_9_bs) + Number(investments_9_bs);
document.getElementById('ta-bs9').textContent = total_assets_9_bs;

let fixed_assets_10_bs = document.getElementById('fa-bs10').textContent;
let currents_assets_10_bs = document.getElementById('ca-bs10').textContent;
let other_assets_10_bs = document.getElementById('oa-bs10').textContent;
let investments_10_bs = document.getElementById('i-bs10').textContent;
let total_assets_10_bs = Number(fixed_assets_10_bs) + Number(currents_assets_10_bs) + Number(other_assets_10_bs) + Number(investments_10_bs);
document.getElementById('ta-bs10').textContent = total_assets_10_bs;

let fixed_assets_11_bs = document.getElementById('fa-bs11').textContent;
let currents_assets_11_bs = document.getElementById('ca-bs11').textContent;
let other_assets_11_bs = document.getElementById('oa-bs11').textContent;
let investments_11_bs = document.getElementById('i-bs11').textContent;
let total_assets_11_bs = Number(fixed_assets_11_bs) + Number(currents_assets_11_bs) + Number(other_assets_11_bs) + Number(investments_11_bs);
document.getElementById('ta-bs11').textContent = total_assets_11_bs;

let fixed_assets_12_bs = document.getElementById('fa-bs12').textContent;
let currents_assets_12_bs = document.getElementById('ca-bs12').textContent;
let other_assets_12_bs = document.getElementById('oa-bs12').textContent;
let investments_12_bs = document.getElementById('i-bs12').textContent;
let total_assets_12_bs = Number(fixed_assets_12_bs) + Number(currents_assets_12_bs) + Number(other_assets_12_bs) + Number(investments_12_bs);
document.getElementById('ta-bs12').textContent = total_assets_12_bs;


// Net Cash Flow = Operating Cash Flow + Investing Cash Flow + Financing Cash Flow  (Cash Flows)
let operating_cash_flow_1 = document.getElementById('o-cashflow1').textContent;
let investing_cash_flow_1 = document.getElementById('i-cashflow1').textContent;
let financing_cash_flow_1 = document.getElementById('f-cashflow1').textContent;
let net_cash_flow_1 = Number(operating_cash_flow_1) + Number(investing_cash_flow_1) + Number(financing_cash_flow_1);
document.getElementById('n-cashflow1').textContent = net_cash_flow_1;

let operating_cash_flow_2 = document.getElementById('o-cashflow2').textContent;
let investing_cash_flow_2 = document.getElementById('i-cashflow2').textContent;
let financing_cash_flow_2 = document.getElementById('f-cashflow2').textContent;
let net_cash_flow_2 = Number(operating_cash_flow_2) + Number(investing_cash_flow_2) + Number(financing_cash_flow_2);
document.getElementById('n-cashflow2').textContent = net_cash_flow_2;

let operating_cash_flow_3 = document.getElementById('o-cashflow3').textContent;
let investing_cash_flow_3 = document.getElementById('i-cashflow3').textContent;
let financing_cash_flow_3 = document.getElementById('f-cashflow3').textContent;
let net_cash_flow_3 = Number(operating_cash_flow_3) + Number(investing_cash_flow_3) + Number(financing_cash_flow_3);
document.getElementById('n-cashflow3').textContent = net_cash_flow_3;

let operating_cash_flow_4 = document.getElementById('o-cashflow4').textContent;
let investing_cash_flow_4 = document.getElementById('i-cashflow4').textContent;
let financing_cash_flow_4 = document.getElementById('f-cashflow4').textContent;
let net_cash_flow_4 = Number(operating_cash_flow_4) + Number(investing_cash_flow_4) + Number(financing_cash_flow_4);
document.getElementById('n-cashflow4').textContent = net_cash_flow_4;

let operating_cash_flow_5 = document.getElementById('o-cashflow5').textContent;
let investing_cash_flow_5 = document.getElementById('i-cashflow5').textContent;
let financing_cash_flow_5 = document.getElementById('f-cashflow5').textContent;
let net_cash_flow_5 = Number(operating_cash_flow_5) + Number(investing_cash_flow_5) + Number(financing_cash_flow_5);
document.getElementById('n-cashflow5').textContent = net_cash_flow_5;

let operating_cash_flow_6 = document.getElementById('o-cashflow6').textContent;
let investing_cash_flow_6 = document.getElementById('i-cashflow6').textContent;
let financing_cash_flow_6 = document.getElementById('f-cashflow6').textContent;
let net_cash_flow_6 = Number(operating_cash_flow_6) + Number(investing_cash_flow_6) + Number(financing_cash_flow_6);
document.getElementById('n-cashflow6').textContent = net_cash_flow_6;

let operating_cash_flow_7 = document.getElementById('o-cashflow7').textContent;
let investing_cash_flow_7 = document.getElementById('i-cashflow7').textContent;
let financing_cash_flow_7 = document.getElementById('f-cashflow7').textContent;
let net_cash_flow_7 = Number(operating_cash_flow_7) + Number(investing_cash_flow_7) + Number(financing_cash_flow_7);
document.getElementById('n-cashflow7').textContent = net_cash_flow_7;

let operating_cash_flow_8 = document.getElementById('o-cashflow8').textContent;
let investing_cash_flow_8 = document.getElementById('i-cashflow8').textContent;
let financing_cash_flow_8 = document.getElementById('f-cashflow8').textContent;
let net_cash_flow_8 = Number(operating_cash_flow_8) + Number(investing_cash_flow_8) + Number(financing_cash_flow_8);
document.getElementById('n-cashflow8').textContent = net_cash_flow_8;

let operating_cash_flow_9 = document.getElementById('o-cashflow9').textContent;
let investing_cash_flow_9 = document.getElementById('i-cashflow9').textContent;
let financing_cash_flow_9 = document.getElementById('f-cashflow9').textContent;
let net_cash_flow_9 = Number(operating_cash_flow_9) + Number(investing_cash_flow_9) + Number(financing_cash_flow_9);
document.getElementById('n-cashflow9').textContent = net_cash_flow_9;

let operating_cash_flow_10 = document.getElementById('o-cashflow10').textContent;
let investing_cash_flow_10 = document.getElementById('i-cashflow10').textContent;
let financing_cash_flow_10 = document.getElementById('f-cashflow10').textContent;
let net_cash_flow_10 = Number(operating_cash_flow_10) + Number(investing_cash_flow_10) + Number(financing_cash_flow_10);
document.getElementById('n-cashflow10').textContent = net_cash_flow_10;

let operating_cash_flow_11 = document.getElementById('o-cashflow11').textContent;
let investing_cash_flow_11 = document.getElementById('i-cashflow11').textContent;
let financing_cash_flow_11 = document.getElementById('f-cashflow11').textContent;
let net_cash_flow_11 = Number(operating_cash_flow_11) + Number(investing_cash_flow_11) + Number(financing_cash_flow_11);
document.getElementById('n-cashflow11').textContent = net_cash_flow_11;

let operating_cash_flow_12 = document.getElementById('o-cashflow12').textContent;
let investing_cash_flow_12 = document.getElementById('i-cashflow12').textContent;
let financing_cash_flow_12 = document.getElementById('f-cashflow12').textContent;
let net_cash_flow_12 = Number(operating_cash_flow_12) + Number(investing_cash_flow_12) + Number(financing_cash_flow_12);
document.getElementById('n-cashflow12').textContent = net_cash_flow_12;


// Define the data for the pie chart
var data = {
    labels: ['Promoter(s)', 'Institutional Investors', 'Government', 'Retail Individual Investors (RII)'],
    datasets: [{
        data: [72.30, 15.21, 3.13, 9.36],
        backgroundColor: ['#007bff', '#997950', '#28a745', '#ffd700']
    }]
};

// Get the canvas element and create the pie chart
var ctx = document.getElementById('pieChart').getContext('2d');
var myPieChart = new Chart(ctx, {
type: 'pie',
data: data,
options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: true,
        position: 'bottom'
        }
    }
});