const cardTypes = document.querySelectorAll(".cardType")
const calculateBtn = document.querySelector(".calculate")
const resultSpan = document.querySelector(".result")
const input = document.querySelector("input")
let type = "Серебро"

cardTypes.forEach(cardType => {
    cardType.onclick = () => {
        cardTypes.forEach(type => {
            type.classList.remove("active")
        })
        type = cardType.innerText
        cardType.classList.add("active")
    }

})

calculateBtn.onclick = () => {
    let result = 0
    switch (type) {
        case "Серебро":
            result = Number(input.value) * 0.02
            break;
        case "Золото":
            result = Number(input.value) * 0.025
            break;
        case "Платина":
            result = Number(input.value) * 0.03
            break;
        default:
            break;
    }
    resultSpan.innerText = result.toFixed(2)
}

