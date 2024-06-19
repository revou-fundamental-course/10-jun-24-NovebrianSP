document.addEventListener("DOMContentLoaded", function () {
  const desc = document.getElementById("desc");
  const turn = document.getElementById("turn");
  const head = document.getElementById("formula-head");
  const input = document.getElementById("input");
  const resultBox = document.getElementById("resultBox");
  const convertButton = document.getElementById("convertButton");
  const resetButton = document.getElementById("resetButton");
  const reverseButton = document.getElementById("reverseButton");
  const calBox = document.getElementById("calculationBox");
  const formula = document.getElementById("formula");

  let isCelsiusToFahrenheit = true;

  function convertTemperature() {
    let value = parseFloat(input.value.trim());
    if (isNaN(value)) {
      resultBox.textContent = "Input tidak valid.";
      calBox.textContent = "";
      formula.innerHTML = "";
      return;
    }

    if (isCelsiusToFahrenheit) {
      const fahrenheit = value * (9 / 5) + 32;
      resultBox.textContent = `${fahrenheit.toFixed(1)} °F`;
      calBox.textContent = `(${value.toFixed(1)} °C * 9/5) + 32 = ${fahrenheit.toFixed(1)} °F`;
      formula.innerHTML = `<p>
          Suhu ${value.toFixed(1)} dalam derajat Celcius (&deg;C) sama dengan suhu
          ${fahrenheit.toFixed(1)} dalam derajat Fahrenheit (&deg;F) dikalikan 9/5 ditambah 32.
        </p>
        <p>
          ${fahrenheit.toFixed(1)}<sub>(&deg;F)</sub> = (${value.toFixed(1)}<sub>(&deg;C) </sub>× 9/5) + 32
        </p>
        <span><sub>atau</sub></span>
        <p>
          ${fahrenheit.toFixed(1)}<sub>(&deg;F)</sub> = (${value.toFixed(1)}<sub>(&deg;C) </sub> × 1.8) + 32
        </p>`;
    } else {
      const celsius = (value - 32) * (5 / 9);
      resultBox.textContent = `${celsius.toFixed(1)} °C`;
      calBox.textContent = `(${value.toFixed(1)} - 32) °F * 5/9 = ${celsius.toFixed(1)} °C`;
      formula.innerHTML = `<p>
          Suhu ${value.toFixed(1)} dalam derajat Fahrenheit (&deg;F) sama dengan suhu
          ${celsius.toFixed(1)} dalam derajat Celcius (&deg;C) dikalikan 5/9 dikurangi 32.
        </p>
        <p>
          ${celsius.toFixed(1)}<sub>(&deg;C)</sub> = (${value.toFixed(1)}<sub>(&deg;F) </sub> - 32) × 5/9
        </p>
        <span><sub>atau</sub></span>
        <p>
          ${celsius.toFixed(1)}<sub>(&deg;C)</sub> = (${value.toFixed(1)}<sub>(&deg;F) </sub> - 32) × 0.5
        </p>`;
    }
  }

  function resetForm() {
    input.value = "";
    resultBox.textContent = "";
    calBox.textContent = "";
    formula.innerHTML = "";
  }

  function reverseConversion() {
    isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
    resetForm();

    if (isCelsiusToFahrenheit) {
      document.querySelector(".container header h4").textContent = "Celcius (°C):";
      document.querySelector("main section:nth-child(2) header h4").textContent = "Fahrenheit (°F):";
      turn.textContent = "Celcius ke Fahrenheit";
      desc.innerHTML = `Masukkan suhu derajat Celcius (&deg;C) ke form dibawah ini, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (&deg;F).`;
      head.innerHTML = "Cara Konversi dari Celcius (&deg;C) ke Fahrenheit (&deg;F)";
      formula.innerHTML = `<p>
          Suhu <i>S</i> dalam derajat Fahrenheit (&deg;F) sama dengan suhu
          <i>S</i> dalam derajat Celcius (&deg;C) dikalikan 9/5 ditambah 32.
        </p>
        <p>
          <i>S</i><sub>(&deg;F)</sub> = (<i>S</i><sub>(&deg;C) </sub>× 9/5) + 32
        </p>
        <span><sub>atau</sub></span>
        <p>
          <i>S</i><sub>(&deg;F)</sub> = (<i>S</i><sub>(&deg;C) </sub> × 1.8) + 32
        </p>`;
    } else {
      document.querySelector(".container header h4").textContent = "Fahrenheit (°F):";
      document.querySelector("main section:nth-child(2) header h4").textContent = "Celcius (°C):";
      turn.textContent = "Fahrenheit ke Celcius";
      desc.innerHTML = `Masukkan suhu derajat Fahrenheit (&deg;F) ke form dibawah ini, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Celcius (&deg;C).`;
      head.innerHTML = "Cara Konversi dari Fahrenheit (&deg;F) ke Celcius (&deg;C)";
      formula.innerHTML = `<p>
          Suhu <i>S</i> dalam derajat Celcius (&deg;C) sama dengan suhu
          <i>S</i> dalam derajat Fahrenheit (&deg;F) dikurangi 32 dikalikan 5/9.
        </p>
        <p>
          <i>S</i><sub>(&deg;C)</sub> = (<i>S</i><sub>(&deg;F)</sub> - 32) × 5/9
        </p>
        <span><sub>atau</sub></span>
        <p>
          <i>S</i><sub>(&deg;C)</sub> = (<i>S</i><sub>(&deg;F)</sub> - 32) × 0.5556
        </p>`;
    }
  }

  convertButton.addEventListener("click", convertTemperature);
  resetButton.addEventListener("click", resetForm);
  reverseButton.addEventListener("click", reverseConversion);
});