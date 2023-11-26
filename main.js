// BMI Calculator with JS file
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);
    const bmi = weight / (height * height);
    
    if (bmi <= 18.5) {
        resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}.You're UNDERWEIGHT.`;
    } else if (bmi > 18.5 && bmi <= 24.9 ) {
        resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}.You're NORMAL.`;
    } else if (bmi >= 25 && bmi <= 29.9 ) {
        resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}.You're OVERWEIGHT.`;
    } else if (bmi >= 30 && bmi <= 3) {
        resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}.You're OBESE.`;
    } else if (bmi > 35) {
        resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}.You're EXTREMLY OBESE.`;
    }
//   resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
});
