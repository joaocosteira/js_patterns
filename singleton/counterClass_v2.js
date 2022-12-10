let instance
let counter = 0

class Counter {


    constructor(){
        if(instance){
            throw new Error("This class was already instantiated. This is a singleton")
        }
        instance = this
    }

    getIntance(){
        return this
    }

    getCount(){
        return counter
    }

    increment(){
        return ++counter
    } 

    decrement(){
        return --counter
    }
}


const counter1 = new Counter();
const counter2 = new Counter();
