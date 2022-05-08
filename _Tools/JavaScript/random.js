export const random = new class {
    randrange(min = 0, max) {
        if (typeof(min) !== "number") return console.error("Minimal number is invalid.");
        if (typeof(max) !== "number") return console.error("Maximal number is invalid.");
        if (min > max) return console.error("Min > Max");

        return Math.floor(Math.random() * (max - min + 1) + min);
    }   

    
    float(min = 0, max) {
        if (typeof(min) !== "number") return console.error("Minimal number is invalid.");
        if (typeof(max) !== "number") return console.error("Maximal number is invalid.");
        if (min > max) return console.error("Min > Max");

        return Math.random() * (max - min + 1) + min;
    }


    choise([...array]) {
        if (typeof(array) !== "object" || array.length === 0) return console.error("Invalid Array");

        return array[this.randrange(0, array.length - 1)];
    }


    shuffle([...array]) {
        if (typeof(array) !== "object" || array.length === 0) return console.error("Invalid Array");

        return array.sort(() => Math.random() - 0.5);;
    }


    sample([...array], amount) {
        if (typeof(array) !== "object" || array.length === 0) return console.error("Invalid Array");
        if (typeof(amount) !== "number" || amount <= 0) return console.error("Invalid amount");
        if (amount > array.length) return console.error("Amount > Array");
        if (array.length === 1) return array;

        array = this.shuffle(array);

        while (array.length > amount) array.pop();

        return array;
    }
}
