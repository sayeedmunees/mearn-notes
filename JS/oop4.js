const baleno = {
    name : 'Baleno',
    model : 'Hatchback',
    price : '8 Lakhs'
}

const glanza = {
    name : 'Glanza',
    price : '10 Lakhs'
}

glanza.__proto__ = baleno
console.log(glanza.model);
