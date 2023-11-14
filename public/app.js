const btn = document.querySelector('#btn')
const createPet = document.querySelector('#petForm')

// Create Pet Form 
createPet.addEventListener('submit', async function(event){
    event.preventDefault();
    const formData = {
        name: document.querySelector('#name').value,
        kind: document.querySelector('#kind').value,
        age: document.querySelector('#age').value,
        ownerid: document.querySelector('#ownerid').value
    }
    try {
        const res = await fetch('http://localhost:3050/api/pets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(formData)
        })
        if (res.ok) {
            alert('Pet created successfully!')
        } else {
            alert('Error creating pet:', response.status)
        }
    } catch (error) {
        console.error('Network error: ', error)
    }
})

// Owners Button
ownerBtn.addEventListener('click', getOwners)

async function getOwners() {
    const result = await fetch('http://localhost:3050/api/owners')
    const data = await result.json()
    console.log(data.rows);
    displayOwners(data.rows)
}

// Display Owners
function displayOwners(arr){ 
    const div = document.createElement('div')

    arr.forEach(elem => {
        const p = document.createElement('p')
        const fullName = `${elem.firstname} ${elem.lastname}`
        p.textContent = `ID: ${elem.id} Name: ${fullName}`
        p.style.paddingLeft = '2em'
        p.style.marginBottom = '2em'
        p.style.borderBottom = '.2em solid navy'
        div.appendChild(p)
    })
    document.body.appendChild(div)
}

// Pets Button
btn.addEventListener('click', getPets)

async function getPets() {
    const result = await fetch('http://localhost:3050/api/pets')
    const data = await result.json()

    displayPets(data.rows)
}

// Display Pets Data Function 
function displayPets(arr) {
    const div = document.querySelector('#displayArea')
    const nbsp = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    
    arr.forEach(elem => {
        const p = document.createElement('p');

        p.innerHTML = `ID: <b>${elem.id}</b>${nbsp}Name: <b>${elem.name}</b>${nbsp}Type: <b>${elem.kind}</b>${nbsp}Owner's ID: <b>${elem.ownerid}</b>`

        p.style.paddingLeft = '2 rem'
        p.style.marginBottom = '5px'
        p.style.borderBottom = '.2rem solid navy'
        div.appendChild(p)
    });
    
}

// FORM TO CREATE PET
form.addEventListener('submit', async function(event){
    event.preventDefault();
    const formData = {
        name: document.querySelector('#name').value,
        kind: document.querySelector('#kind').value,
        age: document.querySelector('#age').value,
        ownerid: document.querySelector('#ownerid').value
    }
    try {
        const res = await fetch('http://localhost:3050/api/pets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(formData)
        })
        if (res.ok) {
            alert('Pet created successfully!')
        } else {
            alert('Error creating pet:', response.status)
        }
    } catch (error) {
        console.error('Network error: ', error)
    }
})

// Delete function


