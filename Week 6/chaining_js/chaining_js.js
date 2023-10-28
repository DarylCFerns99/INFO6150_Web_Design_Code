class Chaining {
    firstFunction() {
        console.log("This is first");
        return this;
    }

    secondFunction() {
        console.log("This is second");
        return this;
    }

    thirdFunction() {
        console.log("This is third");
        return this;
    }
}

const chaining = new Chaining();
chaining.firstFunction().secondFunction().thirdFunction();