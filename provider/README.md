# Provider Pattern
- The basic idea behind react is the development of a Component Tree (the App component is composed of some coponents, which those components may call other components etc...)
- In order to pass along information, we can easilly achive a classic problem called **prop drilling**, by passing accross multiple components props that techincally speaking they don't use, they simply pass them down to other components in the react component tree
- The Provider pattern is an alternative architecture, which allows us to access/modify information at any level of the react component tree, without the usage of prop/props drilling
