var Number1 = prompt("Please Enter The First Number You Want")
var Number2 = prompt("Please Enter The Second Number You Want")


if(Number1 == Number(Number1) && Number2 == Number(Number2)){
    var Arithmetic = prompt("What Calculation Do You Want To Perform? (+ or - or / or *)")

}else{
    alert("Please Enter Numbers To Make The Calculator Work. (IF YOU WANT TO TRY AGAIN REFRESH THE PAGE)")
    
}

if (Arithmetic == "+"){
    Addition = Number(Number1) + Number(Number2)
    alert("The Sum Of The Numbers Is Equal To: " + Addition)

}else if(Arithmetic == "-"){
    Subtraction = Number1 - Number2
    alert("Subtraction Of The Numbers Is Equal To: " + Subtraction)

}else if(Arithmetic == "*"){
    alert("Multiplication Of The Numbers Is Equal To: " + Number1 * Number2)

}else if(Arithmetic == "/" && Number2 == "0"){
    alert("Division By Zero Is Not Possible. (REFRESH THE PAGE TO TRY AGAIN)")

}else if(Arithmetic == "/"){
    alert("Division Of The Numbers Is Equal To: " + Number1 / Number2)

}else if(Arithmetic && Number2 != "0"){
    alert("You Must Enter + or - or / or *. (REFRESH THE PAGE TO TRY AGAIN)")

}