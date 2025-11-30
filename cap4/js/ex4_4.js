const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const horaBr = Number(frm.inHoraBr.value)

    let horaFr = horaBr + 5
    if (horaFr > 24) {
        horaFr = horaFr - 24
    }
    resp.textContent = `Hora na França: ${horaFr.toFixed(2)}`
})