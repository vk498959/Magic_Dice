const container = document.getElementById("contain")
container.innerText = "Dice"
function rand() {
    return (Math.floor(Math.random() * 6) + 1)
}
function playSound() {
    const sound = new Audio("dice.mp3");
    sound.play();
}
let intervall;
const timee = 2000
function fun(x) {
    intervall = setInterval(() => {
        container.innerText = rand()
    }, 200);

    if (x == "one") {
        playSound()
        setTimeout(() => {
            clearInterval(intervall)
            container.innerText = "1"
        }, timee);
    }
    else if (x == "two") {
        playSound()
        setTimeout(() => {
            clearInterval(intervall)
            container.innerText = "2"
        }, timee);
    }
    else if (x == "three") {
        playSound()
        setTimeout(() => {
            clearInterval(intervall)
            container.innerText = "3"
        }, timee);
    }
    else if (x == "four") {
        playSound()
        setTimeout(() => {
            clearInterval(intervall)
            container.innerText = "4"
        }, timee);
    }
    else if (x == "five") {
        playSound()
        setTimeout(() => {
            clearInterval(intervall)
            container.innerText = "5"
        }, timee);
    }
    else if (x == "six") {
        playSound()
        setTimeout(() => {
            clearInterval(intervall)
            container.innerText = "6"
        }, timee);
    }
    else if (x == "randd") {
        playSound()
        setTimeout(() => {
            clearInterval(intervall)
            container.innerText = rand()
        }, timee);
    }
}