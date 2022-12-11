//object create allows to create an object, by explicitly passing the prototype

const dog = {
    bark(){
        console.log('Woof!')
    }
}


const pet1 = Object.create(dog);

pet1.bark()
console.log(`Direct properties on pet1:`,Object.keys(pet1))
console.log("Properties on pet1's prototype:")
console.log(Object.keys(pet1.__proto__))