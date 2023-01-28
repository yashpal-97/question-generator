var questions1 = [
    
    "Take 4 numbers as input and print out their sum?",
    "Take a number as input, and if number is greater than 2023 print WINNER else LOSER ",
    "Take array of integers as input and print out the array",
    "Take two numbers as input and print First if the first number is larger or Second if the second one is larger ",
    "Print Even if given number is even or Odd if it's odd ",
    "Print number of commodities you can buy if the price of one item is given and total purse you have",
   
 ];

 var questions2 = [
    "Take array of integers as input and print out their sum", 
    "Take an array of integers as input and print the number of distinct elements in it.",
    "Given a number in binary form print yes if it is divisble by 2 else no",
    "Take 2 strings as input and print the concatenated string ",
    "Take two strings as input and print First if the first string is larger in size or Second if the second one is larger ",
    "Given a string of english alphabets print Yes if it starts with consonant",
    
   
 ];

 var questions3 = [
    "Take array of integers and return number of even and odd elemments in it", 
    "Take array of integers as input, print largest element?",
    "Take 2 numbers as input print Yes if anyone divides the other else No",
    "Print the number of digits in the given number",
    "Given a number print yes if its a perfect square else No",
    "Check if the number is power of two or not, if yes than print Yes else No.",
    
   
 ];
function newQuestion1() {
    var randomNumber = Math.floor(Math.random() * (questions1.length));
    document.getElementById('questionDisplay').innerHTML = questions1[randomNumber];
}
function newQuestion2() {
    var randomNumber = Math.floor(Math.random() * (questions2.length));
    document.getElementById('questionDisplay').innerHTML = questions2[randomNumber];
}

function newQuestion3() {
    var randomNumber = Math.floor(Math.random() * (questions3.length));
    document.getElementById('questionDisplay').innerHTML = questions3[randomNumber];
}
