let instance;
let counter = 0;

class Counter{
    constructor(){
        if(instance){
            throw new Error('You can only instantiate a singleton once!!!')
        }
        instance = this
    }

    getInstance(){
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

//freeze ensures that properties cannot be added/modified
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;