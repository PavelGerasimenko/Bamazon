//require inquirer & mysql
var mysql = require("mysql");
var inquirer = require("inquirer");

//connect to database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // my username
  user: "root",

  // my password
  password: "H492ea39!1",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

//start function

//user inquirer to prompt user

// 1) id of product to buy

// 2) ask how many unit to buy

// query database, list the items available to buy

// inquirer to prompt the items they want to buy

//ask how many they'd like

//after taking in amount, verify if we have enough quantity

//products on hand, if not say Insufficient quantity

//If i have i should update MySQL

//mysql shows final over_head_costs

//multiplication needed
