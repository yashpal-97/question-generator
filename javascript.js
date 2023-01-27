var questions1 = [
    
    "Take 4 numbers as input and print out their sum?",
    "take a number as input if number is greater than 2023 print WINNER else LOSER ",
    "take array as input print out the array",
    "print max of two number",
    "print yes if num is even or odd",
    "given price given total purse print number of items you can buy.",
   
 ];

 var questions2 = [
    "Take array input and print out their sum?", 
    "take input elements in array and return count of distinct elements in it.?",
    "given a binary string if its divisible by two print yes else no",
    "Take 2 strings as input and print its concatenation ",
    "Take 2 strings as input print out the larger string",
    "given a string print yes if its start with consonant",
    
   
 ];

 var questions3 = [
    "take input array and return number even and odd elemment?", 
    "take input array print largest  element?",
    "Take 2 number a input print yes if anyone divides the other else no",
    "count the number of digits in the number",
    "given a number print yes if its a perfect square",
    "check if the number is power of two or not",
    
   
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