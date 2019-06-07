var mysql = require("mysql");
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
  });

  
  connection.connect(function(err) {
    if (err) throw err;
    readProducts()
  });

inquirer
  .prompt([
    {
        type: "input",
        name: "ask-item",
        filter: String,
        message: "Please provide the ID for the product that you'd like to purchase."
      }
  ])
  .then(answers => {
  });

  function readProducts() {
    connection.query("SELECT id, product_name FROM products", function(err, res) {
      if (err) throw err;
      console.table(res);
      connection.end();
    });
  }
