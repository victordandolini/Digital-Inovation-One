const pets = [
    {
        nome:"lux",
        tipo:"gato",
        cor:"branca",
        idade: 5
    },
    {
        nome:"zed",
        tipo:"gato",
        cor:"cinza",
        idade: 4
    },
    {
        nome:"zig",
        tipo:"gato",
        cor:"branca",
        idade: 6
        
    },
    {
        nome:"thor",
        tipo:"cachorro",
        cor:"bege",
        idade: 15
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

//Outra forma:
// const newPets = pets.filter((pet) => filtroCor(pet.cor))


//Filter aplicado da forma mais limpa com o 3 atributos a serem filtrados
const newPets = pets.filter(({tipo, cor, idade}) => filtroTipo(tipo) && filtroCor(cor) && filtroIdade(idade))


console.log(newPets)
