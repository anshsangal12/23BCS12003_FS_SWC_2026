function createCounter() {
    let count = 0;

    function abc() {
        let a = 10;
        const b = 20;
        var c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    }

    return function () {
        abc();
        count++;
        console.log(count);
    }
}

const counter = createCounter();
counter();
counter();
