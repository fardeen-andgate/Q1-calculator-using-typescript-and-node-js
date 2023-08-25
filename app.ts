#! /usr/bin/env node
import inquirer from "inquirer";
import { sum } from "./operations/add.js";
import { sub } from "./operations/sub.js";
import { mul } from "./operations/multiply.js";
import { div } from "./operations/div.js";


let answer = await inquirer.prompt([{
    message:"enter your first number",
    type:"number",
    name:"num1"
},
{
    message:"enter your second number",
    type:"number",
    name:"num2"
},
{
    message:"select operator",
    type:"list",
    choices:["+","-","*","/"],
    name:"operator"
}
]
);

let result;

switch (answer.operator) {
    case "+":
      result = sum(answer.num1, answer.num2);
      break;
    case "-":
      result = sub(answer.num1, answer.num2);
      break;
    case "*":
      result = mul(answer.num1, answer.num2);
      break;
    case "/":
      if (answer.num2 === 0) {
        result = "Division by zero is not allowed";
      } else {
        result = div(answer.num1, answer.num2);
      }
      break;
  };
  
  console.log(result);

  
  
  
  
  
  
