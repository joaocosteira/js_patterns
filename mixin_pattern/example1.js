
// class with just a name property
class Dog{
    constructor(name){
        this.name = name;
    }
}


//now we are going to define a mixin
//which can be used to add a new set
// of properties:

const animalFunctionalities = {
    walk: () => console.log('Walking my way downtown'),
    sleep:  () => console.log('Im sleeping...')

}

const dogFunctionalities = {
    bark: () => console.log(`Wooff!!!`),
    wagTail: () => console.log(`Wagging my tail!!!`),
    play: () => console.log(`Now I'm Playing`),
    walk(){
        super.walk()
    },
    sleep(){
        super.sleep()
    }
}


/** 
 * Basically we're saying that dogFunctionalities
 * are a subclass of  animalFunctionalities
 */
Object.assign(dogFunctionalities,animalFunctionalities)
Object.assign(Dog.prototype,dogFunctionalities)

const pet = new Dog('zico')
pet.bark()
pet.wagTail()
pet.play()
pet.walk()
pet.sleep()