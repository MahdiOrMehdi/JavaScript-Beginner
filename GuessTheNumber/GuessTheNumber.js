const MagicNumber = Math.ceil(Math.random() * 10)
attempt = 0
while (attempt < 5){
    attempt++
    let guess = Number(prompt("Please guess the MagicNumber Between 0 And 10."))

    if (guess == Number(guess)){
        if (guess === 0){
        alert("You Gave Up")
        break
    }

    if (guess < 0){
        alert("You Can't Enter A Negetive Number.")
        continue
    }

    if(guess === MagicNumber){
        alert("Congratulations, You Were Right.")
        break
    }else{
        alert("OHHHHH Noo, You Entered The Wrong Number.")
    }

    attempt === 5 && alert(`MagicNumber Is ${MagicNumber}.`)
    }else{
        alert("Please Enter Numbers(Otherwise, One Of Your Chances Will Be Gone!!)")
    }
}