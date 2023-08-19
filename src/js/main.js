document.getElementById("btn-triangle").addEventListener("click", function () {
  const base = getInputById("base-triangle");
  const height = getInputById("height-triangle");
  const isValid = validateInput(base, height);
  if (!isValid) {
    alert("Invalid input");
    return;
  }
  const area = 0.5 * base * height;
  getIdSetArea("area-triangle", area);
  addToEntry("Triangle", area);
});
document.getElementById("btn-rectangle").addEventListener("click", function () {
  const width = getInputById("width-rectangle");
  const length = getInputById("length-rectangle");
  const isValid = validateInput(width, length);
  if (!isValid) {
    alert("Invalid input");
    return;
  }
  const area = width * length;
  getIdSetArea("area-rectangle", area);
  addToEntry("Rectangle", area);
});
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const area = calcArea(10, 12);
    alert(area + " cm\u00b2");
  });
document.getElementById("btn-rhombus").addEventListener("click", function () {
  const area = calcArea(16, 8) * 0.5;
  alert(area + " cm\u00b2");
});
document.getElementById("btn-pentagon").addEventListener("click", function () {
  const area = calcArea(16, 8) * 0.5;
  alert(area + " cm\u00b2");
});
document.getElementById("btn-ellipse").addEventListener("click", function () {
  const area = calcArea(10, 4) * Math.PI;
  alert(area + " cm\u00b2");
});
