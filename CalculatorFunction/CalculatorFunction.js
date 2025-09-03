var Number1 = prompt("Please Enter The First Number You Want")

if(Number1 == Number(Number1)){
    var Arithmetic = prompt("What Calculation Do You Want To Perform? (+ or - or / or *)")

}else{
    alert("Please Enter Numbers To Make The Calculator Work. (REFRESH THE PAGE TO TRY AGAIN)")
}

if(Arithmetic == "+" || Arithmetic == "-" || Arithmetic == "/" || Arithmetic == "*"){
    var Number2 = prompt("Please Enter The Second Number You Want")
}else if(Arithmetic){
    alert("You Must Enter + or - or / or *. (REFRESH THE PAGE TO TRY AGAIN)")
}

if(Number2 && Number2 != Number(Number2)){
    alert("Please Enter Numbers To Make The Calculator Work. (REFRESH THE PAGE TO TRY AGAIN)")
}

if (Arithmetic == "+" && Number2 == Number(Number2)){
    function AdditionNumbers(Number1 , Number2) {
        Addition = Number(Number1) + Number(Number2)
        alert("The Addition Of The Numbers Is Equal To: " + Addition)
    }
    AdditionNumbers(Number1 , Number2)

}else if(Arithmetic == "-" && Number2 == Number(Number2)){
    function SubtractionNumbers(Number1 , Number2) {
        Subtraction = Number1 - Number2
        alert("Subtraction Of The Numbers Is Equal To: " + Subtraction)
    }
    SubtractionNumbers(Number1 , Number2)

}else if(Arithmetic == "*" && Number2 == Number(Number2)){
    function Multiplication(Number1 , Number2) {
        alert("Multiplying Of The Numbers Is Equal To: " + Number1 * Number2)
    }
    Multiplication(Number1 , Number2)

}else if(Arithmetic == "/" && Number2 == "0"){
    alert("Division By Zero Is Not Possible. (REFRESH THE PAGE TO TRY AGAIN)")

}else if(Arithmetic == "/" && Number2 == Number(Number2)){
    function Division(Number1 , Number2) {
        alert("Division Of The Numbers Is Equal To: " + Number1 / Number2)
    }
    Division(Number1 , Number2)
}