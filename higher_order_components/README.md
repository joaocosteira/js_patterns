# Higher Order Components

- Used to reuse the same logic within different components
- A higher order component is a component that receives another component as a prop.
- **Problem**
    * The goal of a higher order component is to define some kind of logic, and them within the higher order component we call/render the component received as an argument/prop. Which allows us to reuse the logic defined within the higher component on these "children" components
    * Obviously with the introduction of hooks, speacilly custom hooks, we can simply define our hooks and inject them whenever we want, making the usage of HOC kinda redundant.