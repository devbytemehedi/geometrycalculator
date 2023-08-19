function validateInput(inputFirst, inputSecond) {
  if (
    isNaN(inputFirst) ||
    isNaN(inputSecond) ||
    inputFirst <= 0 ||
    inputSecond <= 0
  ) {
    return false;
  }
  return true;
}

function getInputById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseInt(inputField.value);
  inputField.value = "";
  return inputValue;
}

function calcArea(x, y) {
  const area = x * y;
  return area;
}

function addToEntry(areaType, area) {
  const parentElement = document.getElementById("btn-area");
  const childElement = document.createElement("p");
  childElement.innerHTML = `Area (${areaType}) = ${area} cm\u00b2`;
  parentElement.appendChild(childElement);
}

function getIdSetArea(elementId, area) {
  document.getElementById(elementId).innerHTML = area + " cm\u00b2";
}
