const TBody = document.getElementById("TBody")
const Name = document.getElementById("name")
const Email = document.getElementById("phone")
const Phone = document.getElementById("email")
const Address = document.getElementById("address")

// Load Users
async function List() {
    const THead = document.getElementById("THead")
    THead.style.opacity = "1"
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) throw new Error(`Error Fetching Users: ${res.status}`)
        const data = await res.json()
        THead.style.opacity = "1"
        TBody.innerHTML = ``

        data.forEach(user => {
            TBody.innerHTML +=`<tr id="user-${user.id}">
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
            <td>${user.address.city} ${user.address.street}</td>
            <td><button onclick="Delete(${user.id})">Delete</button>
            <button class="update" onclick="Update(${user.id}, '${user.name}', '${user.email}', '${user.phone}', '${user.address}')">Update</button></td></tr>`
        })
    }catch (error){
        alert("Error: " + error.message)
    }
}

// Add Users
async function AddUser() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST",
            body: JSON.stringify({name, email, phone, address}),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
        if (!res.ok) throw new Error(`Error Fetching Users: ${res.status}`)
        const user = await res.json()

        TBody.innerHTML += `<tr id="user-${user.id}">
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
            <td>${user.address}</td>
            <td><button onclick="Delete(${user.id})">Delete</button>
            <button class="update" onclick="Update(${user.id}, '${user.name}', '${user.email}', '${user.phone}', '${user.address}')">Update</button></td></tr>`

            Name.value = ""
            Email.value = ""
            Phone.value = ""
            Address.value = ""

    }catch (error){
        alert("Error: " + error.message)
    }
}

// Remove Users
async function Delete(id) {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
        })
        if (!res.ok) throw new Error(`Error Fetching Users: ${res.status}`)
        
        alert('Deleted')
        List()

    }catch (error){
        alert("Error: " + error.message)
    }
}

// Edit Users
async function Update(id, OldName, OldEmail, OldPhone, OldAddress) {
    const NewName = prompt("Name:", OldName)
    const NewEmail = prompt("Email:", OldEmail)
    const NewPhone = prompt("Phonee:", OldPhone)
    const NewAddress = prompt("Address:", OldAddress)

    if(!NewName || !NewEmail || !NewPhone || !NewAddress) {
        alert('Please Enter Everything Completely')
        return;
    }

    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "PATCH",
            body: JSON.stringify({name: NewName, email: NewEmail, phone: NewPhone, address: NewAddress}),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
        if (!res.ok) throw new Error(`Error Fetching Users: ${res.status}`)
        const updated = await res.json()
        const row = document.getElementById(`user-${id}`)
        row.children[1].textContent = updated.name
        row.children[2].textContent = updated.email
        row.children[3].textContent = updated.phone
        row.children[4].textContent = updated.address

    }catch (error){
        alert("Error: " + error.message)
    }
}