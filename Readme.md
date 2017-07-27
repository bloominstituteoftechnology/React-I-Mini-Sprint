# React Mini I

## Topics

* Class vs Function components
* State
* this.setState
* Props

## Lesson Plan

### Recursion

All loops can be written recursively.  
Functions overview (HOF, callbacks, anonymous functions, assigned to variables, added to arrays, and they can call themselves!).  
Call stack  
Base case  
Iterate towards base case  
Iteration is usually better than recursion but recursion can be simpler to write at times  

Factorial example:
```
const nFactorial = (n) => {
  if (n === 1) return 1; // base case
  return n * (n - 1); // the n - 1 ensures we iterate towards the base case and avoid an infinite loop
};
```

