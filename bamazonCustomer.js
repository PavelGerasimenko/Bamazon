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

start function
var findAndBuy = functioon() {
    connection.query('SELECT * FROM products', function(err, res) {
      var table = new Table ({
          head: ['item_id', 'product_name', 'department_name', 'price', 'stock_quantity']
      });

      // Display all items
      console.log("Display all available items for sale");
      console.log("-----");
      for (var i = 0; i < res.length; i++) {
        table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price.toFixed(2), res[i].stock_quantity]);
      }
      console.log("-----");

// inquirer to prompt the items they want to buy
// 1) id of product to buy
inquirer
  .prompt([{
    name: "itemId",
    type: "input",
    message: "Please input item ID would you like to buy?",
    validate: function(value) {
        if (isNaN(value) == false) {
            return true;
        } else {
            return false;
        }
    }
  },
// 2) ask how many unit to buy
  {
    name: "Quantity",
    type: "input",
    message: "How many of this item would you like to buy?",
    validate: function(value) {
        if (isNaN(value) == false) {
            return true;
          } else {
              return false;
          }
        }
  }])
// query database, list the items available to buy
  .then(function(answer) {
    var chosenID = answer.itemId - 1
    var chosenProduct = res[chosedID]
    var chosenQuantity = answer.quantity
    //after taking in amount, verify if we have enough quantity
    if (chosenQuantity < res[chosenID].stock_quantity) {
      //If i have i should update MySQL
      connection.query("UPDATE products SET ? WHERE ?", [{
        //mysql shows final over_head_costs
        stock_quantity: res[chosenID].stock_quantity - chosenQuantity
      }, {
        item_id: res[chosenID].item_id
      }], function(err, res) {
        findAndBuy();
      });
    } else {
      console.log("Insufficient quantity for the item")
      findAndBuy();
    }
  })
  })
}
findAndBuy();
