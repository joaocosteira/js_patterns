class Obserable {

    constructor(){
        this.observers = []
    }

    subscribe(f){
        this.observers.push(f)
    }


    unsubscribe(f){
        this.observers = this.observers.filter(s => s !== f)
    }

    notify(data){
        this.observers.forEach(obs => obs(data))
    }   
}

export default new Obserable()