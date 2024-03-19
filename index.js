function outcome () {

    let num1 = Number(document.getElementById("num-one").value)
    let total = 0

    if (document.getElementById("box1").checked) {
        total = Math.sin(radianos(num1)).toFixed(4)
    }
    else if (document.getElementById("box2").checked) {
        total = Math.cos(radianos(num1)).toFixed(4)
    }
    else {
        if (num1 % 90 == 0) {
            if (num1 % 180 == 0) {
                total = Math.tan(radianos(num1)).toFixed(4)
            }
            else {
                total = "Tangente inexistente."
            }
        }
        else {
            total = Math.tan(radianos(num1)).toFixed(4)
        }
    }

    document.getElementById("resultArea").innerHTML = "Resultado: " + String(total)

}

function radianos (angulo) {
    return angulo = (angulo * Math.PI) / 180
}
