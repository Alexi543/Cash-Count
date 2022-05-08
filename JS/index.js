const buttons = document.querySelectorAll("button");
const counter = document.getElementById("counter");
const cash = document.getElementById("cash");
const salary = document.getElementById("salary");

const round = (value) => Math.round(value * 100) / 100

const startCount = (amount) => {
    let cashPerSec = (amount / 60) / 60;
    let sec = 0;
    let min = 0;
    let total = 0;
    let pause = false

    const timer = setInterval(() => {
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                if (button.id === "stop") clearInterval(timer);
                else if (button.id === "pause") {
                    pause =! pause;

                    if (pause === true) {
                        button.textContent = "Resume";
                    } else {
                        button.textContent = "Pause";
                    }
                }
            })
        })

        if (pause !== true) {
            sec++;
            
            if (sec === 60) {
                sec = 0
                min++;
            }
            
            total += cashPerSec;

            let displaySec;
            let displayMin;

            (sec < 10) ? displaySec = `0${sec}` : displaySec = sec;
            (min < 10) ? displayMin = `0${min}` : displayMin = min;

            counter.textContent = `${displayMin}:${displaySec}`;
            cash.textContent = `${round(total)} $`;
        }
    }, 1000)
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "start") {
            let salaryValue = parseInt(salary.value);
            if (salaryValue > 0) startCount(salaryValue)
        }
    })
})
