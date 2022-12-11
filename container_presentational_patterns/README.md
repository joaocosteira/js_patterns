# Presentational Pattern

- Enforce a separation, the idea is to separate the logic from the presentational layer.
- **Presentational Components**
    * Receives the data via props and simply displays it

- **Container Components**
    * This components are the ones who pass the data down to the presentational components. 
    * Usually this components simply don't even have styling

- Pros/Cons
    * This separations allows easy testing, working with teams etc.
    * The Downside is this can complicate the design, also we can replace container components with custom hooks