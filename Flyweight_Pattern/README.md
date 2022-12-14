# Flyweight Pattern

- Pattern developed to preser/save memory
- The idea is in some applications (ex library) we may have multiple instances of the same object (a library usually has multiple copies of the same book)
- Continuing with the book example, if an isbn already exists (pretty much the primary key of a book), we don't want to create a new instance of that object.
- Usefull to save memory in cases where we have to create a ton of instances
- But in js, the combination of prototype inharitance with nowadays computers with Gbs of RAM, makes this solution/problem less relevant