/**
 * we have an online food delivery platform. Users can place, track, and cancel orders.
 */

class OrderManager{
    constructor(){
        this.orders = []
    }

    placeOrder(order,id){
        this.orders.push({ id, order })
        return `You have successfully ordered ${order} (${id})`
    }

    trackOrder(id){
        return `Your order ${id} will arrive in 20 minutes`
    }

    cancelOrder(id){
        this.orders = this.orders.filter(order => order.id !== id)
        return `You have canceled your order ${id}`
    }
}


const manager = new OrderManager();
console.log(manager.placeOrder("arroz","1234"))
console.log(manager.trackOrder("1234"))
console.log(manager.cancelOrder("1234"))

console.log(manager.orders)



/**
 * Problems with this implementation:
 * It's going to be very tricky to rename methods and update everything
 * 
 * Imagine this class is some critical component in some super large codebase
 * If all of the suden we want to rename this method or something like that 
 * it means that we may have to replace/update every single piece of code
 * were that method is called... which obviously thats a receipe for disaster
 * 
 * 
 * The idea is to abstract everything, and simply create a generic method
 * called execute, which is going to allows us to perform any operation
 * over the class. By doing so we can add, update, rename or whatever 
 * our codebase very easilly
 */