function createCounter() {
    let count = 0; // Local variable in the outer scope
    // This inner function is a Closure
    return function () {
        count++; // Accesses 'count' from the parent lexical environment
        console.log(count);
    };
}

// 'counter' now holds the inner function returned by createCounter
const counter = createCounter();
counter(); // Outputs: 1
counter(); // Outputs: 2
counter(); // Outputs: 3
