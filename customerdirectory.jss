console.log('testing, testing')

console.log(location)

const customer = customers[0]

const customersDiv = document.getElementById('customers')

for (let customer of customers) {
    let firstName = customer.name.first
    let lastName = customer.name.last
    console.log(firstName + ' ' + lastName)


const h2El = document.createElement('h2')
console.log(h2El)

const h2Text = document.createTextNode(firstName + ' ' + lastName)
h2El.appendChild(h2Text)
customersDiv.appendChild(h2El)
}