const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const results = document.querySelector('#Results');
    const message = document.querySelector('#Message');
    if ((height === '') || (height < 0) || (isNaN(height))) {
        //NaN !== NaN
        results.innerHTML = "Por favor informe uma altura valida...";
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Por favor informe um peso valido...";
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Display the results
        results.innerHTML = `<span>${bmi}</span>`
        // Display End Message
        if (bmi < 18.6) {
            message.innerHTML = "você está acima do peso ideal";
        } else if (bmi > 18.6 && bmi < 24.9) {
            message.innerHTML = "Normal!"
        } else if (bmi > 24.9) {
            message.innerHTML = "Você está abaixo do peso ideal!"
        }
    }
});