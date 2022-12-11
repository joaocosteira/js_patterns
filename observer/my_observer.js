class Obserable {

    constructor(){
        this.observers = []
    }

    subscribe(func){
        this.observers.push(func)
    }


    unsubscribe(func){
        this.observers = this.observers.filter(obs => obs !== func)
    }

    notify(data){
        this.observers.forEach(obs => obs(data))
    }
    
}