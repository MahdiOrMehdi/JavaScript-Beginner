const Table = document.getElementById("T")
const Name = document.getElementById("name")
const Email = document.getElementById("phone")
const Phone = document.getElementById("email")
const Address = document.getElementById("address")

 async function List() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) throw new Error(`khata vakeshi: ${res.status}`)
        const data = await res.json()

        document.getElementById("THead").style.opacity = "1"
        Table.innerHTML = ``
        data.forEach(user => {
            Table.innerHTML += `<tr id="user-${user.id}">
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
            <td>${user.address.city} , ${user.address.street}</td>
            <td><button onclick="Delete(${user.id})">Delete</button>
            <button class="update" onclick="EditUser(${user.id}, '${user.name}', '${user.email}')">Update</button></td>
            </tr>`

})
    }catch (error){
        alert("khata: " + error.message)
    }
}

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
        if (!res.ok) throw new Error(`khata vakeshi: ${res.status}`)
        const user = await res.json()

        Table.innerHTML += `<tr id="user-${user.id}">
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
            <td>${user.address}</td>
            <td><button onclick="Delete(${user.id})">Delete</button>
            <button onclick="EditUser(${user.id}, '${user.name}', '${user.email}', '${user.phone}', '${user.address}')">Update</button></td>
            </tr>`

            Name.value = ""
            Email.value = ""
            Phone.value = ""
            Address.value = ""

    }catch (error){
        alert("khata: " + error.message)
    }
}

async function Delete(id) {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
        })
        if (!res.ok) throw new Error(`khata vakeshi: ${res.status}`)
        alert("hazf shod")
        List()

    }catch (error){
        alert("khata: " + error.message)
    }
}

async function EditUser(id, OldName, OldEmail, OldPhone, OldAddress) {
    const NewName = prompt("Name:", OldName)
    const NewEmail = prompt("Email:", OldEmail)
    const NewPhone = prompt("Phone:", OldPhone)
    const NewAddress = prompt("Address:", OldAddress)

    if(!NewName || !NewEmail || !NewPhone || !NewAddress) {
        alert("no no no")
        return;
    }

    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "PATCH",
            body: JSON.stringify({name: NewName, email: NewEmail, phone: NewPhone, address: NewAddress}),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
        if (!res.ok) throw new Error(`khata vakeshi: ${res.status}`)
        const updated = await res.json()
        const row = document.getElementById(`user-${id}`);
        row.children[1].textContent = updated.name
        row.children[2].textContent = updated.phone
        row.children[3].textContent = updated.email
        row.children[4].textContent = updated.address
    }catch (error){
        alert("khata: " + error.message)
    }
}