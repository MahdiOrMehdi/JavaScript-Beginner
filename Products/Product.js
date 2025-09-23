const GamingPhone = document.getElementById("Gaming-Phone")
const cartItems = document.getElementById("cart-items")
const totalPrice = document.getElementById("total-price")
const SamsungPhone = document.getElementById("Samsung-Phone")
const ApplePhone = document.getElementById("Apple-Phone")
const XiaomiPhone = document.getElementById("Xiaomi-Phone")


let deleteB = []
let Sum = []

let GamingSum = []
let SumNGaming = []
GamingPhone.addEventListener("click", ()=> {
    Sum.push(800)
    GamingSum.push(800)
    SumNGaming.push(1)

    const TotalSum = Sum.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TSGaming = GamingSum.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TSNGaming = SumNGaming.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TotalDelete = deleteB.reduce((sum, num)=> {
        return sum + num
    }, 0)
    totalPrice.innerHTML = `${(TotalSum - TotalDelete).toLocaleString('en-US')}$`
    const Newli = document.getElementById('GamingLi')
        Newli.style.display = "flex"
        Newli.innerHTML = ``
        Newli.innerHTML = `<p>Gaming-Phone x ${TSNGaming}</p><span>Price: ${TSGaming.toLocaleString('en-US')}$</span><button onclick="DeleteGamingP()">Delete</button>`
        if (!cartItems.appendChild(Newli)){
            cartItems.appendChild(Newli)
        }
} 
)


let SamsungSum = []
let SumNSamsung = []
SamsungPhone.addEventListener("click", ()=> {
    Sum.push(850)
    SamsungSum.push(850)
    SumNSamsung.push(1)

    const TotalSum = Sum.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TSSamsung = SamsungSum.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TSNSamsung = SumNSamsung.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TotalDelete = deleteB.reduce((sum, num)=> {
        return sum + num
    }, 0)
    totalPrice.innerHTML = `${(TotalSum - TotalDelete).toLocaleString('en-US')}$`
    const Newli = document.getElementById('SamsungLi')
        Newli.style.display = "flex"
        Newli.innerHTML = ``
        Newli.innerHTML = `<p>Samsung-Phone x ${TSNSamsung}</p><span>Price: ${TSSamsung.toLocaleString('en-US')}$</span><button onclick="DeleteSamsung()">Delete</button>`
        if (!cartItems.appendChild(Newli)){
            cartItems.appendChild(Newli)
        }
} 
)


let SumApple = []
let SumNApple = []
ApplePhone.addEventListener("click", ()=> {
    Sum.push(800)
    SumApple.push(800)
    SumNApple.push(1)

    const TotalSum = Sum.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TSApple = SumApple.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TSNApple = SumNApple.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TotalDelete = deleteB.reduce((sum, num)=> {
        return sum + num
    }, 0)
    totalPrice.innerHTML = `${(TotalSum - TotalDelete).toLocaleString('en-US')}$`
        const Newli = document.getElementById('AppleLi')
        Newli.style.display = "flex"
        Newli.innerHTML = ``
        Newli.innerHTML = `<p>Apple-Phone x ${TSNApple}</p><span>Price: ${TSApple.toLocaleString('en-US')}$</span><button onclick="DeleteApple()">Delete</button>`
        if (!cartItems.appendChild(Newli)){
            cartItems.appendChild(Newli)
        }
} 
)


let SumXiaomi = []
let SumNXiaomi = []
XiaomiPhone.addEventListener("click", ()=> {
    Sum.push(350)
    SumXiaomi.push(350)
    SumNXiaomi.push(1)


    const TotalSum = Sum.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TSXiaomi = SumXiaomi.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TSNXiaomi = SumNXiaomi.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TotalDelete = deleteB.reduce((sum, num)=> {
        return sum + num
    }, 0)
    totalPrice.innerHTML = `${(TotalSum - TotalDelete).toLocaleString('en-US')}$`
    const Newli = document.getElementById('XiaomiLi')
        Newli.style.display = "flex"
        Newli.innerHTML = `<p>Xiaomi-Phone x ${TSNXiaomi}</p><span>Price: ${TSXiaomi.toLocaleString('en-US')}$</span><button onclick="DeleteXiaomi()">Delete</button>`
        if (!cartItems.appendChild(Newli)){
            cartItems.appendChild(Newli)
        }
    
    } 
)



function DeleteXiaomi() {
    const Newli = document.getElementById('XiaomiLi')
    deleteB.push(350)
    SumXiaomi.pop()
    const TSXiaomi = SumXiaomi.reduce((sum, num)=> {
        return sum + num
    }, 0)
    SumNXiaomi.pop()
    const TSNXiaomi = SumNXiaomi.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TotalSum = Sum.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TotalDelete = deleteB.reduce((sum, num)=> {
        return sum + num
    }, 0)

    if (TSXiaomi == 0){
        Newli.innerHTML = ``
        Newli.style.display = "none"
    }else{
        Newli.innerHTML = `<p>Xiaomi-Phone x ${TSNXiaomi}</p><span>Price: ${TSXiaomi.toLocaleString('en-US')}$</span><button onclick="DeleteXiaomi()">Delete</button>`
    }
    totalPrice.innerHTML = `${(TotalSum - TotalDelete).toLocaleString('en-US')}$`
}


function DeleteApple() {
    const Newli = document.getElementById('AppleLi')
    deleteB.push(800)
    SumApple.pop()
    const TSApple = SumApple.reduce((sum, num)=> {
        return sum + num
    }, 0)
    SumNApple.pop()
    const TSNApple = SumNApple.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TotalSum = Sum.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TotalDelete = deleteB.reduce((sum, num)=> {
        return sum + num
    }, 0)

    if (TSApple == 0){
        Newli.innerHTML = ``
        Newli.style.display = "none"
    }else{
        Newli.innerHTML = `<p>Apple-Phone x ${TSNApple}</p><span>Price: ${TSApple.toLocaleString('en-US')}$</span><button onclick="DeleteApple()">Delete</button>`
    }
    totalPrice.innerHTML = `${(TotalSum - TotalDelete).toLocaleString('en-US')}$`
}


function DeleteSamsung() {
    const Newli = document.getElementById('SamsungLi')
    deleteB.push(850)
    SamsungSum.pop()
    const TSSamsung = SamsungSum.reduce((sum, num)=> {
        return sum + num
    }, 0)
    SumNSamsung.pop()
    const TSNSamsung = SumNSamsung.reduce((sum, num)=> {
        return sum + num
    }, 0)
    
    const TotalSum = Sum.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TotalDelete = deleteB.reduce((sum, num)=> {
        return sum + num
    }, 0) 
    if (TSSamsung == 0){
        Newli.innerHTML = ``
        Newli.style.display = "none"
    }else{
        Newli.innerHTML = `<p>Samsung-Phone x ${TSNSamsung}</p><span>Price: ${TSSamsung.toLocaleString('en-US')}$</span><button onclick="DeleteSamsung()">Delete</button>`
    }
    totalPrice.innerHTML = `${(TotalSum - TotalDelete).toLocaleString('en-US')}$`
}


function DeleteGamingP() {
    const Newli = document.getElementById('GamingLi')
    deleteB.push(800)
    GamingSum.pop()
    const TSGaming = GamingSum.reduce((sum, num)=> {
        return sum + num
    }, 0)
    SumNGaming.pop()
    const TSNGaming = SumNGaming.reduce((sum, num)=> {
        return sum + num
    }, 0)
    
    const TotalSum = Sum.reduce((sum, num)=> {
        return sum + num
    }, 0)
    const TotalDelete = deleteB.reduce((sum, num)=> {
        return sum + num
    }, 0) 
    if (TSGaming == 0){
        Newli.innerHTML = ``
        Newli.style.display = "none"
    }else{
        Newli.innerHTML = `<p>Gaming-Phone x ${TSNGaming}</p><span>Price: ${TSGaming.toLocaleString('en-US')}$</span><button onclick="DeleteGamingP()">Delete</button>`
    }
    totalPrice.innerHTML = `${(TotalSum - TotalDelete).toLocaleString('en-US')}$`
}
