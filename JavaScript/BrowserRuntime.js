// Executes immediately (Call Stack)
console.log("1. Hello World!");

// Timer callback goes to Web APIs
// After 1 second -> moved to Callback Queue
setTimeout(() => {
    console.log("2. Hello World!");
}, 1000);

// Timer callback goes to Web APIs
// After 5 seconds -> moved to Callback Queue
setTimeout(() => {
    console.log("3. Hello World!");
}, 5000);

// Promise callback goes to Microtask Queue
// Microtasks execute before Callback Queue tasks
Promise.resolve().then(() => {
    console.log("4. Promise");
});

// Executes immediately
console.log("5. Hello World!");

// setTimeout is handled by Web APIs.
// Promise.then() is handled by the Microtask Queue.
