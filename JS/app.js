



"use strict";


var username = prompt("Enter your name:");

var gender = prompt("Enter your gender (Male/Female):");

if (gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female" ) {

  alert("Invalid input!");
}


var age = prompt("Enter your age:");

if (age <= 0 ) {

  alert(" Your age is not valid!");
}


let message = confirm("Do you want to skip the welcoming message? ");

if(message === false){

    if (gender.toLowerCase() === "female") {
    alert("Welcome, Ms."  +username+" !");
}else if(gender.toLowerCase() =="male"){
    alert("Welcome, Mr. " +username+" !");
}else{
    alert("Welcome, " + username + "!");
}

}

// lab 6




var questionOne = prompt("Are you an employee ? (Yes/No)");
var questionTwo = prompt("Have you used a to-do list website before? (Yes/No)");
var questionThree = prompt("Do you find it helpful? (Yes/No)");

var arr =[];

validation(questionOne, arr);
console.log(arr[0]);
validation(questionTwo, arr);

validation(questionThree, arr);




for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}






function validation( question , array1 ){

  if (question ==="" && question.toLowerCase() !== "yes" && question.toLowerCase() !== "no"  ) {

    array1.push("invalid");
  }else{
   array1.push(question);
  }

}