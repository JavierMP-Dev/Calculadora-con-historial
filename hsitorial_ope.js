let operationHistory = [];

function appendNumber(number) {
    const resultField = document.getElementById('result');
    resultField.value += number;
}

function calculate() {
    const resultField = document.getElementById('result');
    const result = eval(resultField.value);
    resultField.value = result;

    // Guardar operación en el historial
    operationHistory.push(resultField.value);
    displayHistory();
}

function displayHistory() {
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = '';

    operationHistory.forEach((operation, index) => {
        const operationItem = document.createElement('div');
        operationItem.textContent = `Operación ${index + 1}: ${operation}`;
        historyElement.appendChild(operationItem);
    });
}
