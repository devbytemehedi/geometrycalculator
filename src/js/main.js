document.getElementById("btn-triangle").addEventListener("click", function () {
  const base = getInputById("base-triangle");
  const height = getInputById("height-triangle");
  const isValid = validateInput(base, height);
  if (!isValid) {
    alert("Invalid input");
    return;
  }
  const area = calcArea(base, height) * 0.5;
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
  const area = calcArea(width, length);
  getIdSetArea("area-rectangle", area);
  addToEntry("Rectangle", area);
});
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const base = getInputById("base-parallelogram");
    const height = getInputById("height-parallelogram");
    const isValid = validateInput(base, height);
    if (!isValid) {
      alert("Invalid input");
      return;
    }
    const area = calcArea(base, height);
    getIdSetArea("area-parallelogram", area);
    addToEntry("Parallelogram", area);
  });
document.getElementById("btn-rhombus").addEventListener("click", function () {
  const d1 = getInputById("d1-rhombus");
  const d2 = getInputById("d2-rhombus");
  const isValid = validateInput(d1, d2);
  if (!isValid) {
    alert("Invalid input");
    return;
  }
  const area = calcArea(d1, d2) * 0.5;
  getIdSetArea("area-rhombus", area);
  addToEntry("Rhombus", area);
});
document.getElementById("btn-pentagon").addEventListener("click", function () {
  const perimeter = getInputById("perimeter ");
  const apothem = getInputById("apothem ");
  const isValid = validateInput(perimeter, apothem);
  if (!isValid) {
    alert("Invalid input");
    return;
  }
  const area = calcArea(perimeter, apothem) * 0.5;
  getIdSetArea("area-pentagon", area);
  addToEntry("Pentagon", area);
});
document.getElementById("btn-ellipse").addEventListener("click", function () {
  const axis_a = getInputById("a-ellipse");
  const axis_b = getInputById("b-ellipse");
  const isValid = validateInput(axis_a, axis_b);
  if (!isValid) {
    alert("Invalid input");
    return;
  }
  const area = calcArea(axis_a, axis_b) * Math.PI;
  getIdSetArea("area-ellipse", area.toFixed(2));
  addToEntry("Ellipse", area.toFixed(2));
});
