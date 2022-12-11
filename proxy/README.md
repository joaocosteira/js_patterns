# Proxy Pattern
- We get more control over certain interactions with the object
- We can determine the behaviour when we interact with an object
- The basic idea is instead of directly interacting with the object, we interact with the proxy
- **Proxy(A,B)**
    * In **A**, we indicate who we are going to proxy
    * In **B**, in a certain way we define the interface, the point of interactions (ex: getters setters etc)
- Another advantage is since now we have some kind of middleman between the object and the interactions, within the getters and setters defined within the Proxy, we can **add some kind of validations**

- Main proxy usecases:
    * validation, 
    * formatting,
    * notifications,
    * or debugging

- Downsides:
    * userusing proxies/heavy operations can affect the performance
    * It is recommended to **not use proxies for performance critical code**