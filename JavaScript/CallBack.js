// Executes immediately (synchronous code)
console.log("1. Hello World!");

function abc(callback) {

    // setTimeout sends this function to Web APIs
    // It will execute after ~2 seconds
    setTimeout(() => {

        // Executes after timer completion
        console.log("2. Aaditya");

        // Callback function is called with user object
        callback({
            id: 1,
            username: "aaditya_30"
        });

    }, 2000);
}

// Function call
abc((user) => {

    // Receives data from callback
    console.log(user);

});

// Executes immediately without waiting for setTimeout
console.log("3. abc");
