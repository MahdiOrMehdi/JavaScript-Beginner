const Orderlist = document.getElementById("ordersUI")
const Drinktext = document.getElementById("DrinkText")
const ErrorBox = document.getElementById("error")
const Drink = document.getElementById("DrinkSelect")
let CustomerName = document.getElementById("NameInput")
let Additives = document.getElementById("Additives")

function Sumbit() {
    let CustomerNameValue = CustomerName.value.trim();
    let Custumer = CustomerNameValue || "Unkhown Customer"
    const DrinkValue = Drink.value;
    let AdditivesValue = Additives.value
    let additives = AdditivesValue ? AdditivesValue.split(",") : []
    let Message = `
    Your Order Has Been Registered✅
    (☞ﾟヮﾟ)☞
    Customer: 😎${Custumer}
    Drink: ${DrinkValue}
    Additives: 🧩`
    if(additives.length > 0){
        Message += "\n- " + additives.join("\n- ")
    }else{
        Message += "No Additives"
    }

    if (!DrinkValue) {
        ErrorBox.innerText = "Please Select A Drink";
    } else {
        Drinktext.innerText = `Your Choice: ${DrinkValue}`;
        ErrorBox.innerText = "";

        const NewOrder = document.createElement("li")
        NewOrder.innerText = `${Message}`
        Orderlist.appendChild(NewOrder)

        CustomerName.value = ""
        Drink.value = ""
        Additives.value = ""
    }
}

function ChangeTheme() {
    const card = document.getElementById("DrinkCard")
    card.classList.toggle("toggle")
}

function Reset() {
    Orderlist.replaceChildren()
}