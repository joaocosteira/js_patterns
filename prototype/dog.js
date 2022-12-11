class Dog{

    constructor(name){
        this.name = name
    }

    bark(){
        return `Woof!`;
    }
}

const dog1 = new Dog('Daisy')
const dog2 = new Dog('Max')
const dog3 = new Dog('Spot')

// console.log(Dog.prototype)
// console.log(dog1.__proto__)


Dog.prototype.play = () => console.log("Now Playing")

dog1.play()


class SuperDog extends Dog{
    constructor(name){
        super(name)
    }

    fly(){
        console.log("Flying!!!")
    }
}

const superDog = new SuperDog("Zico")
superDog.bark()
superDog.fly()