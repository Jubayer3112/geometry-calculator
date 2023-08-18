// Triangle Calculation
function calculateTriangleArea() {
  const base = getInputValue("baseIput");
  const height = getInputValue("heightInput");
  if (isNaN(base) || isNaN(height)) {
    alert("please insert a number");
    return;
  }

  const area = (0.5 * base * height).toFixed(2);
  setValue("triangleResult", area);
  setFinal("Triangle", area);
}

// Rectangle Calculation
function calculateRectangleArea() {
  const width = getInputValue("rectWidth");
  const length = getInputValue("rectLength");
  if (isNaN(width) || isNaN(length)) {
    alert("please insert a number");
    return;
  }

  const area = (width * length).toFixed(2);
  setValue("setRectArea", area);
  setFinal("Ractangle", area);
}

// Parallelogram Area Calculation
function calculateParallelogramArea() {
  const base = getInputValue("paraBase");
  const height = getInputValue("paraHeight");

  if (isNaN(base) || isNaN(height)) {
    alert("please insert a number");
    return;
  }

  const area = base * height;
  setValue("setParaArea", area);
  setFinal("Parallelogram", area);
}

// Rhombus Area Calculation
function calculateRhombusArea() {
  const d1 = getInputValue("RhombusD1");
  const d2 = getInputValue("RhombusD2");

  if (isNaN(d1) || isNaN(d2)) {
    alert("please insert a number");
    return;
  }
  const area = (0.5 * d1 * d2).toFixed(2);
  setValue("setRhombusArea", area);
  setFinal("Rhoumbus", area);
}
// Pentagon Area Calculation
function calculatePentagonArea() {
  const arm = getInputValue("arm");
  const area = (1.72 * Math.pow(arm, 2)).toFixed(2);

  if (isNaN(arm)) {
    alert("please insert a number");
    return;
  }
  setValue("setPentagonArea", area);
  setFinal("Pentagon", area);
}
// Ellipse Are Calculation
function calculateEllipseArea() {
  const smallValue = getInputValue("smallLength");
  const largeValue = getInputValue("largeLength");
  const area = (Math.PI * smallValue * largeValue).toFixed(2);

  if (isNaN(smallValue) || isNaN(largeValue)) {
    alert("please insert a number");
    return;
  }
  setValue("setEllipseArea", area);
  setFinal("Ellipse", area);
}
