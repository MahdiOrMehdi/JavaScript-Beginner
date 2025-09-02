var weight = prompt("Please Enter Your Weight In Kilograms, (FOR EXAMPLE: 80): ")
var height = prompt("Please Enter Your height In Centimeters, (FOR EXAMPLE: 180): ")


if(weight == Number(weight) && height == Number(height)){
    var gender = prompt("Please Enter Your Gender: (Male OR Female)")

}else if(weight != Number(weight) || height != Number(height)){
    alert("You Must Enter Numbers To Get The Correct Weight Checking.")
}
if(gender && gender != "Male" && gender !="Female"){
        alert("You Must Enter MALE OR FEMALE To Get The Correct Weight Checking.")

}

var Uweight = Number(weight);
var Uheight = Number(height) / 100;

var BMI = Uweight / Uheight**2
// alert(BMI)

if(gender == "Male"){
    if (BMI >= 18 && BMI <25){
        alert("Your Weight Is Normal")
    }else if(BMI < 18){
        alert("Your Weight Is Low")
    }else{
        alert("You Are Overweight")
    }
}else if(gender == "Female"){
    if (BMI >= 20 && BMI <28){
        alert("Your Weight Is Normal")
    }else if(BMI < 20){
        alert("Your Weight Is Low")
    }else{
        alert("You Are Overweight")
    }
}