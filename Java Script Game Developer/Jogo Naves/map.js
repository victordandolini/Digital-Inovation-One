const pets = [
    {
        nome:"lux",
        tipo:"gato",
        cor:"branca",
        idade: 7
    },
    {
        nome:"zed",
        tipo:"gato",
        cor:"cinza",
        idade: 6
    },
    {
        nome:"zig",
        tipo:"gato",
        cor:"branca",
        idade: 3
    },
    {
        nome:"thor",
        tipo:"cachorro",
        cor:"branco",
        idade: 15
    },
    {
        nome:"momo",
        tipo:"gato",
        cor:"bege",
        idade: 4
    },
    
]
//Variavel com a função que sera aplicada ao Filtro
const filtroTipo = (propiedade) => {
    return propiedade === "gato"
}
const filtroCor = (propiedade) => {
    return propiedade === "branca"
}
const filtroIdade = (propiedade) => {
    return propiedade <= 5
}

const nome = (pet) =>{
    return pet.nome
}
//Outra forma FILTER:
// const newPets = pets.filter((pet) => filtroCor(pet.cor))


//Filter aplicado da forma mais limpa com o 2 atributos a serem filtrados, Reduzendo o Array a 2 objetos
const newPets = pets.filter(({tipo, cor}) => filtroTipo(tipo) && filtroCor(cor))
// console.log(newPets)

// MAP aplicado após o resultado do Filter, devolvendo um novo Array apenas com o valor do objeto
const petNames = newPets.map((pet)=> nome(pet))

//Outra forma de MAP:
// const petNames = newPets.map((pet)=> {
//     return pet.nome
// })

// forEach com push se parece com o map
const forEachPetNames = []
pets.forEach((pet) => {
    forEachPetNames.push(pet.nome)
})

// REDUCE
// const totalIdade = pets.reduce((total, pet)=> {
//     return total + pet.idade
// }, 0)

// Aqui o Reduce faz o papel do filter e do Map juntos
const totalIdade = pets.reduce((total, pet)=> {
    if(pet.tipo !== "gato") return total
    return total + pet.idade
}, 0)

// console.log(pets)
// console.log(petNames)
// console.log(forEachPetNames)
console.log(totalIdade)

// Outro exemplo de reduce só que com um push para um Array
const numbers = [-5, 6, 2, 0,];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    accumulator.push(doubled);
  }
  return accumulator;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]

// Encadeamento
const gatosidade = pets
// .filter(({tipo}) => filtroTipo(tipo))
.filter((pet) => {
    return pet.tipo === "gato"
})
.reduce((total, pet) => {
    return total + pet.idade
}, 0)
console.log(gatosidade)