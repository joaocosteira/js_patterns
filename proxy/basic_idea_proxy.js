//we define an object
const person = {
    name: "John Doe",
    age: 42,
    nationality: "American"
}

//now we can define a proxy
const personProxy = new Proxy(person,{
    get: (obj,prop) => {

        //now we can define some kind of validation:
        if(!obj[prop]){
            console.log(`The prop ${prop} is not available`)
        }else{
            console.log(`The value of ${prop} is ${obj[prop]}`)
        }
    },
    set: (obj,prop,value) => {

        //Now we can add validation to test the input (value)
        if(prop === 'age' && typeof value !== 'number'){
            console.log('You must provide a numeric value')
        }else if(prop === 'name' && value.length < 2){
            console.log('provide a valid username')
        }else{
            console.log(`Changing ${prop} from ${obj[prop]} to ${value}`);
            obj[prop] = value
        }
    }
})

//Now we can manipula the object via the proxy
//and we get those pretty print indicating what we're doing
personProxy.name
personProxy.age = 43
personProxy.age = "hello"
personProxy.arroz


const personReflexProxy = new Proxy(person,{
    get: (obj,prop) => {
        console.log(`The value of ${prop} is ${Reflect.get(obj,prop)}`)
    },
    set: (obj,prop,value) => {
        console.log(`Changing ${prop} from ${obj[prop]} to ${value}`);
        return Reflect.set(obj,prop,value)
    
    }
})

personReflexProxy.name
personReflexProxy.age = 43
personReflexProxy.age = "hello"
personReflexProxy.arroz
personReflexProxy.age