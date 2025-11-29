const textBox = document.getElementById("textBox");

const ktc = document.getElementById("ktc");
const ktf = document.getElementById("ktf");
const ctf = document.getElementById("ctf");
const ctk = document.getElementById("ctk");
const ftc = document.getElementById("ftc");
const ftk = document.getElementById("ftk");



function convertirTemp() {
    let tempOption = document.querySelector('input[type="radio"]:checked');
    let temperature;
    let valor = Number(textBox.value);

    if (isNaN(textBox.value)) {
        alert("Debes introducir un número.")
        return;
    };
    switch (tempOption) {
        case ktc: {
            temperature = valor - 273.15;
            result.textContent = temperature.toFixed(2) + "°C";
            break;
        }
        case ktf: {
            temperature = (valor - 273.15) * 9/5 + 32;
            result.textContent = temperature.toFixed(2) + "°F";
            break;
        }
        case ctf: {
            temperature = (valor * 9/5) + 32;
            result.textContent = temperature.toFixed(2) + "°F";
            break;
        }
        case ctk: {
            temperature = valor + 273.15;
            result.textContent = temperature.toFixed(2) + "K";
            break;
        }
        case ftc: {
            temperature = (valor - 32) * 5/9;
            result.textContent = temperature.toFixed(2) + "°C";
            break;
        }
        case ftk: {
            temperature = (valor - 32) * 5/9 + 273.15;
            result.textContent = temperature.toFixed(2) + "K";
            break;
        }
        default: {
            alert("¡Conversión no válida!");
        }
    }

}
