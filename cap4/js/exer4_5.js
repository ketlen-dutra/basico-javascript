const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const num = Number(frm.inNum.value)

    /*
    if(calculo num % 2 == 0) {
        resp.textContent = `O número ${num} é par!`
    }else {
        resp.textContent = `O número ${num} é ímpar!`
    }
    */

    const resultado = num % 2 ? "é ímpar" : "é par"

    resp.textContent = `${num} ${resultado}`
})