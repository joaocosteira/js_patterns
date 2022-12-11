# Prototype

- Allows to share properties among objects with the same type
- All properties defined in the constructor are instantly added to the class prototype
- All instances have access to the prototype
- When they can't find a property, they go up and search it on the prototype
- That's why adding stuff to the proto can be very useful to share a property or add a new property to an object