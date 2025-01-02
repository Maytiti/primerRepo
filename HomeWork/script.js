//  for (let i= 0; i<payment; i++)
// Before each exercise, make sure you think about the 4 steps of a function.
/*Funcion es conjunto de instrucciones de codigo que realizan tarea o regresan un valor */

// 1. Understand the purpose of the function.
// 2. Define the data that comes into the function from the caller (in the form of parameters)!
// 3. Define what data variables are needed inside the function to accomplish its goal.
// 4. Decide the set of steps that the program will use to accomplish this goal (the algorithm).
// Start coding up your answer once you have completed step 4.

// Exercise #1
// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?

//function costoTotal(transaction=20){
    //const fee = 3; //declaro y pongo valor 
    //const interestFee = 0.001;
    //return (transaction* fee) + (transaction*interestFee) 
  //  console.log (costoTotal(transaction));  
//}
//costoTotal (transaction);


// Return the value of what she should be paying.

// Exercise #2
// Part 1
// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.
//declaro mi funcion para saludar a mis amigos
//function greetingFriends (name1, name2, name3) {
// return (`Welcome, ${name1}, ${name2}, ${name3}`);
//}
//llamo a mi funcion
//const gretting = greetingFriends("Sof", "Jonas", "Andy");
//console.log (gretting); //Imprime


// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.

// i.e. 1990 returns 30
//lo declaro const porque la fecha de nacimiento es un dato que no cambia
//dob es parametro para las fechas de nacimiento
//const calculateAge = (dob) =>{
    //  const birthDate = new Date(dob).getFullYear();
    //const actuallYear= new Date().getFullYear();
     
    //return actuallYear - birthDate;
//}
//const dateOfBirth = "1998-06-29";
//console.log("Age", calculateAge(dateOfBirth));

// Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.

//declaro mi funcion para saludar a mis amigos
//function greetingFriends (name1, name2, name3) {
  //  return (`Welcome, ${name1} you have:` {age1}, ${name2}, ${name3}``);
 //}
 /*llamo a mi funcion*/
 //const gretting = greetingFriends("Sof", "Jonas", "Andy");
 //let age1 = 27;
 //let age2 = 24;
 //let age3 = 26;
 
 //console.log (gretting); //Imprime

// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.  A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8. A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.
function score()
{
let score = prompt("ingresa tu calificacion:");
if (score <= 5){
    return "true";
}
else if (score<=8){
     return "excellent";
}
else if (score<=11){
    return "Perfect";
}
else{
  return "false"; 
}
}


//else if { (score <8)
  //  return Excellent;
//}


// Part 3
// 

//else if{ (score <11)
  //  return Perfect;
//}
//else{
  //  return false 
