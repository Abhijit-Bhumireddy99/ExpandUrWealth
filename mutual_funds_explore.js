$(document).ready(function() {

    // Define an array of objects containing random mutual fund data
    var mutualFunds = [
      {
        name: "SBI Bluechip Fund",
        assetClass: "Equity",
        risk: "Moderate",
        nav: 57.34,
        minSipAmount: 500,
        fundSize: 12623,
        oneYrReturn: 6.48,
        threeYrReturn: 9.43,
        fiveYrReturn: 12.86
      },

      {
        name: "Axis Banking & PSU Debt Fund",
        assetClass: "Debt",
        risk: "Low",
        nav: 20.91,
        minSipAmount: 1000,
        fundSize: 3099,
        oneYrReturn: 5.11,
        threeYrReturn: 6.79,
        fiveYrReturn: 7.28
      },

      {
        name: "Axis Growth Opportunities Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 21.64,
        minSipAmount: 100,
        fundSize: 7909,
        oneYrReturn: 4.29,
        threeYrReturn: 27.46,
        fiveYrReturn: 18.56
      },

      {
        name: "Baroda Aggresive Hybrid Fund",
        assetClass: "Hybrid",
        risk: "Very High",
        nav: 21.23,
        minSipAmount: 500,
        fundSize: 780,
        oneYrReturn: 10.99,
        threeYrReturn: 21.04,
        fiveYrReturn: 13.74
      },

      {
        name: "Bank of India Multi Cap Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 10.64,
        minSipAmount: 1000,
        fundSize: 196,
        oneYrReturn: -5.87,
        threeYrReturn: 6.40,
        fiveYrReturn: 9.38
      },

      {
        name: "Baroda Credit Risk Fund",
        assetClass: "Debt",
        risk: "High",
        nav: 20.31,
        minSipAmount: 500,
        fundSize: 181,
        oneYrReturn: -7.36,
        threeYrReturn: -11.25,
        fiveYrReturn: 7.70
      },

      {
        name: "Canara Robeco Emerging Equities Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 182.07,
        minSipAmount: 1000,
        fundSize: 15416,
        oneYrReturn: 8.69,
        threeYrReturn: 27.96,
        fiveYrReturn: 12.67
      },

      {
        name: "Canara Robeco Equity Tax Saver Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 128.75,
        minSipAmount: 500,
        fundSize: 4923,
        oneYrReturn: 11.19,
        threeYrReturn: 27.79,
        fiveYrReturn: 15.66
      },

      {
        name: "DSP Nifty Next 50 Index Fund",
        assetClass: "Equity",
        risk: "Moderately High",
        nav: 15.65,
        minSipAmount: 500,
        fundSize: 238,
        oneYrReturn: -2.12,
        threeYrReturn: 20.60,
        fiveYrReturn: 11.25
      },

      {
        name: "Edelweiss Balanced Advantage Fund",
        assetClass: "Hybrid",
        risk: "High",
        nav: 41.29,
        minSipAmount: 500,
        fundSize: 8756,
        oneYrReturn: 8.60,
        threeYrReturn: 18.55,
        fiveYrReturn: 11.96
      },

      {
        name: "Franklin India Floating Rate Fund",
        assetClass: "Debt",
        risk: "Low",
        nav: 36.96,
        minSipAmount: 500,
        fundSize: 278,
        oneYrReturn: 6.53,
        threeYrReturn: 5.58,
        fiveYrReturn: 6.26
      },

      {
        name: "HDFC Mid Cap Opportunities Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 115.40,
        minSipAmount: 100,
        fundSize: 35172,
        oneYrReturn: 19.35,
        threeYrReturn: 37.01,
        fiveYrReturn: 13.38
      },

      {
        name: "HSBC Overnight Fund",
        assetClass: "Debt",
        risk: "Moderately Low",
        nav: 1180.17,
        minSipAmount: 1000,
        fundSize: 3195,
        oneYrReturn: 5.77,
        threeYrReturn: 4.08,
        fiveYrReturn: 5.95
      },

      {
        name: "ICICI Prudential Liquid Fund",
        assetClass: "Debt",
        risk: "Moderate",
        nav: 335.34,
        minSipAmount: 99,
        fundSize: 36077,
        oneYrReturn: 6.06,
        threeYrReturn: 4.34,
        fiveYrReturn: 5.32
      },

      {
        name: "ICICI Prudential Blue Chip Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 76.10,
        minSipAmount: 100,
        fundSize: 34679,
        oneYrReturn: 12.46,
        threeYrReturn: 27.69,
        fiveYrReturn: 12.73
      },

      {
        name: "IDBI Flexi Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 39.33,
        minSipAmount: 500,
        fundSize: 349,
        oneYrReturn: -1.85,
        threeYrReturn: 24.93,
        fiveYrReturn: 10.01
      },

      {
        name: "Bandhan Infrastructure Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 30.33,
        minSipAmount: 100,
        fundSize: 627,
        oneYrReturn: 17.48,
        threeYrReturn: 39.81,
        fiveYrReturn: 9.33
      },

      {
        name: "IIFL Tax Saver Fund",
        assetClass: "Equity (ELSS)",
        risk: "Moderately High",
        nav: 10.06,
        minSipAmount: 500,
        fundSize: 34,
        oneYrReturn: -0.59,
        threeYrReturn: -0.23,
        fiveYrReturn: 4.92
      },

      {
        name: "ITI Conservative Hybrid Fund",
        assetClass: "Hybrid",
        risk: "Moderate",
        nav: 10.64,
        minSipAmount: 500,
        fundSize: 21,
        oneYrReturn: 1.57,
        threeYrReturn: 3.18,
        fiveYrReturn: 6.73
      },

      {
        name: "Indiabulls Value Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 19.89,
        minSipAmount: 500,
        fundSize: 90,
        oneYrReturn: 8.10,
        threeYrReturn: 4.62,
        fiveYrReturn: 16.73
      },

      {
        name: "Invesco India Gold Fund",
        assetClass: "Other",
        risk: "High",
        nav: 18.71,
        minSipAmount: 500,
        fundSize: 64,
        oneYrReturn: 20.09,
        threeYrReturn: -7.81,
        fiveYrReturn: 13.76
      },

      {
        name: "Kotak Equity Opportunities Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 238.67,
        minSipAmount: 500,
        fundSize: 11892,
        oneYrReturn: 13.62,
        threeYrReturn: 28.99,
        fiveYrReturn: 14.56
      },

      {
        name: "Kotak Emerging Equity Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 87.62,
        minSipAmount: 100,
        fundSize: 24406,
        oneYrReturn: 10.42,
        threeYrReturn: 36.06,
        fiveYrReturn: 15.12
      },

      {
        name: "LIC MF Children's Gift Fund",
        assetClass: "Equity",
        risk: "High",
        nav: 26.15,
        minSipAmount: 1000,
        fundSize: 12,
        oneYrReturn: 6.95,
        threeYrReturn: 16.88,
        fiveYrReturn: 8.35
      },

      {
        name: "LIC MF Savings Fund",
        assetClass: "Debt",
        risk: "Low",
        nav: 36.50,
        minSipAmount: 1000,
        fundSize: 640,
        oneYrReturn: 5.96,
        threeYrReturn: 5.65,
        fiveYrReturn: 5.62
      },

      {
        name: "Mahindra Manulife Small Cap Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 10.43,
        minSipAmount: 500,
        fundSize: 590,
        oneYrReturn: -6.28,
        threeYrReturn: 5.56,
        fiveYrReturn: -0.72
      },

      {
        name: "Mahindra Short Duration Fund",
        assetClass: "Debt",
        risk: "Moderately Low",
        nav: 1201.39,
        minSipAmount: 500,
        fundSize: 143,
        oneYrReturn: 6.16,
        threeYrReturn: 4.98,
        fiveYrReturn: 5.31
      },

      {
        name: "Mirae Asset Large Cap Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 88.36,
        minSipAmount: 1000,
        fundSize: 32851,
        oneYrReturn: 9.27,
        threeYrReturn: 5.49,
        fiveYrReturn: 22.57
      },

      {
        name: "Motilal Oswal Long Term Equity Fund",
        assetClass: "Equity",
        risk: "High",
        nav: 31.18,
        minSipAmount: 500,
        fundSize: 2190,
        oneYrReturn: 16.40,
        threeYrReturn: 27.01,
        fiveYrReturn: 10.61
      },

      {
        name: "NJ Balanced Advanced Fund",
        assetClass: "Hybrid",
        risk: "High",
        nav: 10.28,
        minSipAmount: 500,
        fundSize: 3995,
        oneYrReturn: -2.70,
        threeYrReturn: 2.29,
        fiveYrReturn: 6.42
      },

      {
        name: "Navi Nifty 50 Index Fund",
        assetClass: "Equity",
        risk: "High",
        nav: 11.51,
        minSipAmount: 10,
        fundSize: 722,
        oneYrReturn: 4.96,
        threeYrReturn: 0.84,
        fiveYrReturn: 10.53
      },

      {
        name: "Navi Manufacturing India Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 10.13,
        minSipAmount: 10,
        fundSize: 12,
        oneYrReturn: -6.07,
        threeYrReturn: -0.34,
        fiveYrReturn: 10.78
      },

      {
        name: "Nippon India Large Cap Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 62.23,
        minSipAmount: 100,
        fundSize: 12736,
        oneYrReturn: 18.92,
        threeYrReturn: 31.61,
        fiveYrReturn: 13.12
      },

      {
        name: "PGIM India Large Cap Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 287.22,
        minSipAmount: 1000,
        fundSize: 432,
        oneYrReturn: 12.76,
        threeYrReturn: 23.46,
        fiveYrReturn: 10.96
      },

      {
        name: "PGIM India Tax Saver Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 27.57,
        minSipAmount: 500,
        fundSize: 471,
        oneYrReturn: 11.20,
        threeYrReturn: 30.77,
        fiveYrReturn: 13.89
      },

      {
        name: "Parag Parikh Flexi Cap Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 55.82,
        minSipAmount: 1000,
        fundSize: 31290,
        oneYrReturn: 12.98,
        threeYrReturn: 32.46,
        fiveYrReturn: 18.67
      },

      {
        name: "Parag Parikh Liquid Fund",
        assetClass: "Debt",
        risk: "Low",
        nav: 1262.70,
        minSipAmount: 1000,
        fundSize: 1382,
        oneYrReturn: 5.68,
        threeYrReturn: 4.04,
        fiveYrReturn: 4.79
      },

      {
        name: "Parag Parikh Hybrid Fund",
        assetClass: "Hybrid",
        risk: "Moderately High",
        nav: 11.67,
        minSipAmount: 1000,
        fundSize: 1361,
        oneYrReturn: -1.98,
        threeYrReturn: 5.80,
        fiveYrReturn: 9.70
      },

      {
        name: "Principal Emerging Bluechip Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 200.18,
        minSipAmount: 100,
        fundSize: 3124,
        oneYrReturn: 40.44,
        threeYrReturn: 23.33,
        fiveYrReturn: 20.53
      },

      {
        name: "Quant Focused Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 60.87,
        minSipAmount: 1000,
        fundSize: 237,
        oneYrReturn: 8.18,
        threeYrReturn: 30.87,
        fiveYrReturn: 13.47
      },

      {
        name: "Quantum India ESG Equity Fund",
        assetClass: "Equity",
        risk: "Moderately High",
        nav: 17.21,
        minSipAmount: 500,
        fundSize: 61,
        oneYrReturn: 6.83,
        threeYrReturn: 25.87,
        fiveYrReturn: 15.30
      },

      {
        name: "SBI Magnum Mid Cap Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 168.10,
        minSipAmount: 500,
        fundSize: 8733,
        oneYrReturn: 11.41,
        threeYrReturn: 39.82,
        fiveYrReturn: 14.32
      },

      {
        name: "SBI Bluechip Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 71.52,
        minSipAmount: 500,
        fundSize: 34042,
        oneYrReturn: 14.10,
        threeYrReturn: 27.80,
        fiveYrReturn: 12.04
      },

      {
        name: "SBI Long Term Equity Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 261.82,
        minSipAmount: 500,
        fundSize: 12335,
        oneYrReturn: 16.62,
        threeYrReturn: 29.39,
        fiveYrReturn: 12.52
      },

      {
        name: "Shriram Flexi Cap Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 16.10,
        minSipAmount: 1000,
        fundSize: 58,
        oneYrReturn: -9.10,
        threeYrReturn: 10.06,
        fiveYrReturn: 11.03
      },

      {
        name: "Shriram Overnight Fund",
        assetClass: "Debt",
        risk: "Low",
        nav: 10.44,
        minSipAmount: 1000,
        fundSize: 79,
        oneYrReturn: 0.53,
        threeYrReturn: 3.13,
        fiveYrReturn: 4.36
      },

      {
        name: "Shriram Hybrid Equity Fund",
        assetClass: "Hybrid",
        risk: "High",
        nav: 25.61,
        minSipAmount: 1000,
        fundSize: 49,
        oneYrReturn: 7.78,
        threeYrReturn: 17.60,
        fiveYrReturn: 9.22
      },

      {
        name: "Trust Short Term Fund",
        assetClass: "Debt",
        risk: "Moderate",
        nav: 1084.11,
        minSipAmount: 1000,
        fundSize: 94,
        oneYrReturn: 1.14,
        threeYrReturn: 4.07,
        fiveYrReturn: 6.18
      },

      {
        name: "Tata Small Cap Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 26.80,
        minSipAmount: 150,
        fundSize: 3512,
        oneYrReturn: 21.43,
        threeYrReturn: 46.27,
        fiveYrReturn: 24.64
      },

      {
        name: "Tata Nifty 50 Index Fund",
        assetClass: "Equity",
        risk: "High",
        nav: 119.13,
        minSipAmount: 150,
        fundSize: 385,
        oneYrReturn: 10.58,
        threeYrReturn: 26.20,
        fiveYrReturn: 12.47
      },

      {
        name: "Tata Ethical Growth Fund",
        assetClass: "Hybrid",
        risk: "Moderately Low",
        nav: 312.64,
        minSipAmount: 150,
        fundSize: 1526,
        oneYrReturn: 6.26,
        threeYrReturn: 6.58,
        fiveYrReturn: 9.98
      },

      {
        name: "Tata Housing Opportunities Fund",
        assetClass: "Equity",
        risk: "Moderately High",
        nav: 10.71,
        minSipAmount: 150,
        fundSize: 363,
        oneYrReturn: 7.04,
        threeYrReturn: 10.60,
        fiveYrReturn: 15.39
      },

      {
        name: "Tata Large & Mid Cap Fund",
        assetClass: "Equity",
        risk: "High",
        nav: 403.76,
        minSipAmount: 150,
        fundSize: 3797,
        oneYrReturn: 17.90,
        threeYrReturn: 28.66,
        fiveYrReturn: 14.15
      },

      {
        name: "UTI Dynamic Bond Fund",
        assetClass: "Debt",
        risk: "Moderate",
        nav: 28.21,
        minSipAmount: 500,
        fundSize: 363,
        oneYrReturn: -1.91,
        threeYrReturn: 10.25,
        fiveYrReturn: 6.40
      },

      {
        name: "Union Flexi Cap Fund",
        assetClass: "Equity",
        risk: "Very High",
        nav: 36.63,
        minSipAmount: 1000,
        fundSize: 1339,
        oneYrReturn: -5.81,
        threeYrReturn: 27.30,
        fiveYrReturn: 13.39
      }
      
    ];
  
    // Define a variable to keep track of the current row number
    var currentRowNumber = 11;
  
    // Define a function to generate a random mutual fund object from the mutualFunds array
    function getRandomMutualFund() {
      var index = Math.floor(Math.random() * mutualFunds.length);
      return mutualFunds[index];
    }
  
    // Define a function to generate a new table row with mutual fund data
    function generateTableRow(mutualFund) {
        var row = "<tr>";
        row += "<td>" + currentRowNumber + "</td>";
        currentRowNumber++;
        row += "<td>" + mutualFund.name + "</td>";
        row += "<td>" + mutualFund.assetClass + "</td>";
        row += "<td>" + mutualFund.risk + "</td>";
        row += "<td>" + mutualFund.nav.toFixed(2) + "</td>";
        row += "<td>" + mutualFund.minSipAmount + "</td>";
        row += "<td>" + mutualFund.fundSize + "</td>";
        row += "<td style='color: " + (mutualFund.oneYrReturn >= 0 ? "green" : "red") + "'>" + (mutualFund.oneYrReturn >= 0 ? "+" : "-") + Math.abs(mutualFund.oneYrReturn).toFixed(2) + "</td>";
        row += "<td style='color: " + (mutualFund.threeYrReturn >= 0 ? "green" : "red") + "'>" + (mutualFund.threeYrReturn >= 0 ? "+" : "-") + Math.abs(mutualFund.threeYrReturn).toFixed(2) + "</td>";
        row += "<td style='color: " + (mutualFund.fiveYrReturn >= 0 ? "green" : "red") + "'>" + (mutualFund.fiveYrReturn >= 0 ? "+" : "-") + Math.abs(mutualFund.fiveYrReturn).toFixed(2) + "</td>";
        row += "</tr>";
        return row;
    }      
      
  
    // Define a function to append a new table row to the table
    function appendTableRow() {
      var mutualFund = getRandomMutualFund();
      var row = generateTableRow(mutualFund);
      $("#stock-table1 tbody").append(row);
    }
  
    // Add an event listener to the "View More" button
    $("#view-more-btn").click(function() {
      // Generate and append 10 new table rows
      for (var i = 0; i < 10; i++) {
        appendTableRow();
      }
    });
  
  });
  