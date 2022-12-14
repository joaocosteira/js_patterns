

//function to create users object:
const createUser = ({ firstName, lastName, email }) => ({
    firstName,
    lastName,
    email,
    fullname(){ return `${this.firstName} ${this.lastName}` }
})


//now we can create some instances:
const user1 = createUser({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@email.com'
})

const user2 = createUser({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@email.com'
})


console.log(user1)
console.log(user2)
console.log(user1.fullname())
console.log(user2.fullname())


//also we can create a system to dynamically define keys/values
const createObjectFromArray = ([key,value]) => ({
    [key] : value
})

console.log(createObjectFromArray(['name', 'john cena']))


/**
 * 
 * Create objects with classes
 */

class User{

    constructor(firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    fullname(){
        return `${this.firstName} ${this.lastName}`
    }
}

//Defining instances

const user3 = new User('John','Doe','johndoe@email.com')
const user4 = new User('Jane','Doe','janedoe@email.com')

console.log(user3.fullname())
console.log(user4.fullname())