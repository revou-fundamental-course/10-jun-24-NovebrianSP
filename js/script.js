document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const resultBox = document.getElementById("resultBox");
  const convertButton = document.getElementById("convertButton");
  const resetButton = document.getElementById("resetButton");
  const reverseButton = document.getElementById("reverseButton");
  const calBox = document.getElementById("calculationBox");
  const s1Val = document.getElementById("S1Value");
  const s2Val = document.getElementById("S2Value");
  const S1Desc = document.getElementById("S1Desc");
  const S2Desc = document.getElementById("S2Desc");
  const FormulaDesc = document.getElementById("tempFormulaDesc");
  const Formula = document.getElementById("FormulaShown")

  let isCelsiusToFahrenheit = true;

  function convertTemperature() {
    if (isCelsiusToFahrenheit) {
      let value = parseInt(input.value);
      if (!isNaN(value)) {
        const fahrenheit = value * (9 / 5) + 32;
        resultBox.textContent = `${fahrenheit.toFixed(2)} °F`;
        calBox.textContent = `(${value} °C * 9/5) + 32 = ${fahrenheit.toFixed(
          2
        )} °F`;
        s1Val.textContent = `${value}`;
        s2Val.textContent = `${fahrenheit.toFixed(0)}`;
        S1Desc.textContent = "Celsius (°C)";
        S2Desc.textContent = "Fahrenheit (°F)";
        FormulaDesc.textContent = "dikali 9/5 ditambah 32";
        Formula.textContent = "S(°F) = (S(°C) × 9/5) + 32"
      }
    } else {
      let value = parseInt(input.value.trim());
      if (!isNaN(value)) {
        const celsius = ((value - 32) * 5) / 9;
        resultBox.textContent = `${celsius.toFixed(2)} °C`;
        calBox.textContent = `(${value} - 32) °F * 5/9 = ${celsius.toFixed(
          2
        )} °C`;
        s1Val.textContent = `${value}`;
        s2Val.textContent = `${celsius.toFixed(0)}`;
        S1Desc.textContent = "Fahrenheit (°F)";
        S2Desc.textContent = "Celsius (°C)";
        FormulaDesc.textContent = "dikurangi 32 dikali 5/9";
      }
    }
  }

  function resetForm() {
    input.value = "";
    input.value = "";
    resultBox.textContent = "";
    calBox.textContent = "";
    s1Val.textContent = "S1";
    s2Val.textContent = "S2";
    S1Desc.textContent = "T1";
    S2Desc.textContent = "T2";
    FormulaDesc.textContent = "F";
  }

  function reverseConversion() {
    isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
    input.value = "";
    input.value = "";
    resultBox.textContent = "";
    calBox.textContent = "";
    s1Val.textContent = "S1";
    s2Val.textContent = "S2";
    S1Desc.textContent = "T1";
    S2Desc.textContent = "T2";
    FormulaDesc.textContent = "F";

    if (isCelsiusToFahrenheit) {
      document.querySelector(".container header h4").textContent =
        "Celcius (°C):";
      document.querySelector(
        "main section:nth-child(2) header h4"
      ).textContent = "Fahrenheit (°F):";
    } else {
      input.setAttribute("hidden", "true");
      input.removeAttribute("hidden");
      document.querySelector(".container header h4").textContent =
        "Fahrenheit (°F):";
      document.querySelector(
        "main section:nth-child(2) header h4"
      ).textContent = "Celcius (°C):";
    }
  }

  convertButton.addEventListener("click", convertTemperature);
  resetButton.addEventListener("click", resetForm);
  reverseButton.addEventListener("click", reverseConversion);
});
