let instance;
let counter = 0;

class Counter {

    constructor(){
        if(instance){
            throw new Error('You can only instantiate a singleton once!!!')
        }

        instance = this;
        this.counter = counter;
    }

    getInstance(){
        return this;
    }

    getCount(){
        return counter;
    }

    increment(){
        return ++counter;
    }

    decrement(){
        return --counter;
    }
}

const singleton = Object.freeze(new Counter())
export default singleton;