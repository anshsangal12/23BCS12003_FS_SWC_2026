// Synchronous statement -> executes immediately
console.log("1. Hello World!");

async function abc() {

    // Executes immediately when abc() is called
    console.log("6. abc");

    // await pauses the async function until the Promise resolves
    const x = await (function getUser() {

        // Returns a Promise object
        return new Promise((resolve, reject) => {

            // setTimeout moves this callback to Web APIs
            // It will execute after ~2 seconds
            setTimeout(() => {

                // Executes after timer completion
                console.log("4. Promise");

                // Promise gets resolved with this object
                resolve({
                    id: 2,
                    username: "Aaditya"
                });

            }, 2000);
        });

    })(); // IIFE (Immediately Invoked Function Expression)

    // These lines execute only after await finishes
    console.log("7. abc");
    console.log("8. abc");

    // Prints resolved Promise value
    console.log(x);
}

// Calling async function
abc();

// These synchronous statements execute
// while async operation is waiting
console.log("2.b");
console.log("3.c");
console.log("5.d");
