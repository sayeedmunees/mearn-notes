function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const bmiValue = document.getElementById("bmiValue");
  const bmiCategory = document.getElementById("bmiCategory");

  if (!height || !weight || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight values.");
    return;
  }

  let heightInMeters = height / 100;
  let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  bmiValue.textContent = bmi;

  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  bmiCategory.textContent = category;
}

function resetForm() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("bmiValue").textContent = "-";
  document.getElementById("bmiCategory").textContent = "";
}
