export const math = new class {
    divideInt(number) {
        if (typeof(number) !== "number" || number <= 0) return console.error("Invalid Number");

        let divs = [];

        for (let i = 0; i <= number; i++) if (Math.floor(number / i) * i === number) divs.push(i);

        return divs;
    }


    divideNum(number) {
        if (typeof(number) !== "number" || number <= 0) return console.error("Invalid Number");

        let divs = [];

        for (let i = number; i >= 1; i--) divs.push(number / i);

        return divs;
    }


    primeNumber(number) {
        if (typeof(number) !== number || number <= 0) return console.error("Invalid Number");
        
        let divs = this(this.divideInt(number));
        let total = 0;

        divs.foreach(num => {
            total += num;
        });
    
        return (total - number) === number;
    }
}
