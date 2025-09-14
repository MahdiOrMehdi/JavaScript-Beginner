const form = document.getElementById("userForm")
const nameInput = document.getElementById("name")
const lastNameInput = document.getElementById("lastName")
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

// Add A New User To The List
form.addEventListener("submit", function (e) {
    e.preventDefault()

    const NewPerson = {
        Name: nameInput.value.trim(),
        lastName: lastNameInput.value.trim(),
        email: emailInput.value.trim(),
        job: jobInput.value.trim(),
        phone: phoneInput.value.trim(),
        gender: genderSelect.value
    }

    people.push(NewPerson)
    form.reset()
})

// Show All Users
showModal.addEventListener("click", ()=> {
    if(people.length === 0){
        modal.innerHTML = "<h3>No One Has Registered Yet.</h3>"
    }else{
        modal.innerHTML = "<h3>List Of Users:</h3>"
        const list = document.createElement("ol")

        people.forEach((person)=> {
            const li = document.createElement("li")
            const {Name, lastName, email, job, phone, gender} = person

            li.innerHTML = `<p>${Name} ${lastName}</p>
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

// Close Modal By Clicking On Background
overlay.addEventListener("click", ()=> {
    overlay.style.display = "none"
    modal.style.display = "none"
})

// Find By Email
findByEmail.addEventListener("click", ()=> {
    const FindEmail = prompt("Please Enter Your Desired Email:")
    const person = people.filter(p => p.email === FindEmail.trim())
    const list = document.createElement("ol")

    if(person.length > 0){
        modal.innerHTML = "<h3>✅Found:</h3>"
        person.forEach((p)=> {
            const li = document.createElement("li")
            const {Name, lastName, email, job, phone, gender} = p

            li.innerHTML = `<p>${Name} ${lastName}</p>
            <p>Email: ${email}</p>
            <p>Job: ${job || "---"}</p>
            <p>Number: ${phone || "---"}</p>
            <p>Gender: ${gender || "---"}</p>`
            list.appendChild(li)
        })
        modal.appendChild(list)
    }else{
        modal.innerHTML = "<h3>❌Not Found.</h3>"
    }

    overlay.style.display = "block"
    modal.style.display = "block"
})

// Is Everyone Employed
checkIfAllHaveJob.addEventListener("click", ()=> {
    const AllHaveJob = people.every(p => p.job.trim() !== "")
    if(people.length > 0){
    modal.innerHTML = AllHaveJob
    ? "✅Yes, Everyone Has A Job."
    : "❌No, Everyone Hasn't A Job."
    }else{
        modal.innerHTML = "<h3>No One Has Registered Yet.</h3>"
    }
    overlay.style.display = "block"
    modal.style.display = "block"
})

// Is There At Least One Man
checkIfAnyIsMale.addEventListener("click", ()=> {
    const IsMale = people.some(p => p.gender === "Male")
    if(people.length > 0){
    modal.innerHTML = IsMale
    ? "✅Yes, There Is At Least One Man."
    : "❌No, At Least Not A Man."
    }else{
        modal.innerHTML = "<h3>No One Has Registered Yet.</h3>"
    }
    overlay.style.display = "block"
    modal.style.display = "block"
})