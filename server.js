var express = require("express");
var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const addNumbers = (number1, number2) => {
  let num1 = parseInt(number1);
  let num2 = parseInt(number2);
  let result = num1 + num2;
  return result;
};

app.get("/addTwoNumbers", (req, res) => {
  let number1 = req.query.number1;
  let number2 = req.query.number2;
  let result = addNumbers(number1, number2);
  res.json({ statusCode: 200, data: result, message: "Success" });
});

app.listen(port, () => {
  console.log("App listening to: " + port);
});
