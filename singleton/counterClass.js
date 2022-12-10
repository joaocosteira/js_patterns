let counter = 0

class Counter {

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

//This is actually not a singleton,
//since we can actually instantiate 
//multiple counters

const counter1 = new Counter();
const counter2 = new Counter();

//false
console.log(counter1.getIntance() === counter2.getIntance())