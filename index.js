const btnEl = document.getElementById("btn");

const bmiInputEl = document.getElementById("bmi-result");

const weightConditionEl = document.getElementById("weight-condition");

function claculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;
  const bmivalue = weightValue / (heightValue * heightValue);
  bmiInputEl.value = bmivalue;
  if (bmivalue < 18.5) {
    weightConditionEl.innerText = "Under weight";
  } else if (bmivalue >= 18.5 && bmivalue <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmivalue >= 25 && bmivalue <= 29.9) {
    weightConditionEl.innerText = " Overweight";
  } else if (bmivalue >= 30) {
    weightConditionEl.innerText = "Obesity";
  }
}

btnEl.addEventListener("click", claculateBMI);
