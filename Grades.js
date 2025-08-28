var Practical = prompt("Please Enter Your Practical Score")
var Theory = prompt("Please Enter Your Theory Score")

if(Practical != Number(Practical) || Theory != Number(Theory)){
    alert("Please Enter Numbers To See Your Score (IF YOU WANT TO TRY AGAIN REFRESH THE PAGE)")

}
if(Practical >= 10 && Theory >= 10){
    alert("Congratulations, You Were ACCEPTED")

}else if(Practical == Number(Practical) && Theory == Number(Theory)){
    alert("OH NO, You Were NOT ACCEPTED")
    
}