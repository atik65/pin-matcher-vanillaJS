// pin generation process

function pinGenerate() {
  let pin = Math.round(Math.random() * 10000);
  if ((pin + "").length === 4) {
    return pin;
  } else {
    return pinGenerate();
  }
}

document
  .getElementById("generate-pin-button")
  .addEventListener("click", function () {
    const pin = pinGenerate();
    document.getElementById("generate-pin-box").value = pin;
  });

// pin type function

document.getElementById("calc").addEventListener("click", function (e) {
  const typedPin = e.target.innerText;
  if (!isNaN(typedPin)) {
    let inputPin = document.getElementById("inputPin");
    let previousNumber = inputPin.value;
    let newNumber = previousNumber + typedPin;
    inputPin.value = newNumber;
  }
});

// pin mathced parameter set
document.getElementById("matched-true").style.display = "none";
document.getElementById("matched-false").style.display = "none";
let chance = 3;

// submit functionality
document.getElementById("submit").addEventListener("click", function () {
  const mainPin = parseInt(document.getElementById("generate-pin-box").value);
  const inputPin = parseInt(document.getElementById("inputPin").value);
  let pinMatched = document.getElementById("matched-true");
  let pinNotMatched = document.getElementById("matched-false");
  let pinChance = document.getElementById("chance");
  if (chance > 0) {
    if (mainPin === inputPin) {
      pinMatched.style.display = "block";
      pinNotMatched.style.display = "none";
      document.getElementById("generate-pin-box").value = "";
      document.getElementById("inputPin").value = "";
      chance = 3;
      pinChance.innerText = chance;
    } else {
      chance--;
      pinChance.innerText = chance;
      pinMatched.style.display = "none";
      pinNotMatched.style.display = "block";
      document.getElementById("inputPin").value = "";
    }
  } else {
    document.getElementById("submit").setAttribute("disabled", true);
  }
});
