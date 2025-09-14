const form = document.getElementById("userForm")
const nameInput = document.getElementById("name")
const familyInput = document.getElementById("family")
const emailInput = document.getElementById("email")
const jobInput = document.getElementById("job")
const phoneInput = document.getElementById("phone")
const genderSelect = document.getElementById("gender")
const modal = document.getElementById("modal")
const overlay = document.getElementById("overlay")
const showModal = document.getElementById("showModal")
const findByEmail = document.getElementById("findByEmail")
const checkIfAllHaveJob = document.getElementById("checkIfAllHaveJob")
const checkIfAnyIsMale = document.getElementById("checkIfAnyIsMale")


let people = []

// افزودن کاربر جدید به لیست
form.addEventListener("submit", function (e) {
    e.preventDefault()

    const newPerson = {
        name: nameInput.value.trim(),
        family: familyInput.value.trim(),
        email: emailInput.value.trim(),
        job: jobInput.value.trim(),
        phone: phoneInput.value.trim(),
        gender: genderSelect.value
    }

    people.push(newPerson)
    form.reset()
})

// نمایش همه کاربران
showModal.addEventListener("click", ()=> {
    if (people.length === 0){
        modal.innerHTML = `<h3>No People</h3>`
    }else{
        modal.innerHTML = `<h3>Peoples:</h3>`
        const list = document.createElement("ol")

        people.forEach((person)=> {
            const li = document.createElement("li")
            const {name, family, email, job, phone, gender} = person

            li.innerHTML = `<p>${name} ${family}</p>
            <p>Email: ${email}</p>
            <p>Job: ${job || "---"}</p>
            <p>Number: ${phone || "---"}</p>
            <p>Gender: ${gender || "---"}</p>`
            list.appendChild(li)
        })
        modal.appendChild(list)
    }
    overlay.style.display = "block"
    modal.style.display = "block"
})

// بستن مودال با کلیک بر روی پس زمینه
overlay.addEventListener("click", ()=> {
    overlay.style.display = "none"
    modal.style.display = "none"
    })

// پیدا کردن با ایمیل
findByEmail.addEventListener("click", ()=> {
    const emailToFind = prompt("please Enter Your Email")
    const person = people.filter(p => p.email === emailToFind.trim())
    const list = document.createElement("ol")
    
    if (person.length > 0){
        modal.innerHTML = `<h3>yaft shod form</h3>`
        person.forEach((p)=> {
            const li = document.createElement("li")
            const {name, family, job, phone, gender} = p

            li.innerHTML = `
            <p>Name: ${name}</p>
            <p>family: ${family}</p>
            <p>phone: ${phone || "---"}</p>
            <p>job: ${job || "---"}</p>
            <p>gender: ${gender || "---"}</p>`
            list.appendChild(li)
        })
        modal.appendChild(list)
    }else{
        modal.innerHTML= `<h3>yaft nashod form</h3>`
    }
    overlay.style.display = "block"
    modal.style.display = "block"
})

// ایا همه شاغلند
checkIfAllHaveJob.addEventListener("click", ()=> {
    const allHaveJob = people.every(p => p.job.trim() != "")
    modal.innerHTML = allHaveJob
    ? `<p>all have job</p>`
    : `<p>all dont have job</p>`

    overlay.style.display = "block"
    modal.style.display = "block"
})

// aya hadagal yek mard hast
checkIfAnyIsMale.addEventListener("click", ()=> {
    const HasMale = people.some(p => p.gender === "مرد")
    modal.innerHTML = HasMale
    ?"yes"
    :"no"

    overlay.style.display = "block"
    modal.style.display = "block"
})