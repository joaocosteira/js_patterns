class OrderManager{

    constructor(){
        this.orders = []
    }

    execute(command, ...args){
        return command.execute(this.orders,...args)
    }
}

class Command{
    constructor(execute){
        this.execute = execute;
    }
}


//Now we're going to create 3 instances of Command, 
//the operations that we want our application to support

function PlaceOrderCommand(order,id){
    return new Command(orders => {
        orders.push({ id, order })
        return `You have successfully ordered ${order} (${id})`
    })
}



function CancelOrderCommand(id){
    return new Command(orders => {
        orders = orders.filter(order => order.id !== id)
        return `You have canceled your order ${id}`
    })
}


function TrackOrderCommand(id){
    return new Command(() => `You have canceled your order ${id}`)
}


const manager = new OrderManager();

console.log(manager.execute(new PlaceOrderCommand("arroz","1234")) )
console.log(manager.execute(new TrackOrderCommand("1234")) )
console.log(manager.execute(new CancelOrderCommand("1234")) )

console.log(manager.orders)