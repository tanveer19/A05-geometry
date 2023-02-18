//1. triangle area calculate
document.getElementById("btn-triangle").addEventListener("click", function () {
  // get triangle fields
  const triangleB = document.getElementById("triangle-b");
  const triangleBValue = triangleB.value;
  const triangleH = document.getElementById("triangle-h");
  const triangleHValue = triangleH.value;
  const triangleArea = 0.5 * triangleBValue * triangleHValue;
  // where to add
  const showTriangle = document.getElementById("show-triangle");
  // what to be added
  const li = document.createElement("li");
  li.innerText = `1. Triangle   ` + triangleArea + `cm`;
  // add child
  showTriangle.appendChild(li);
});
//2. rectangle area calculate
document.getElementById("btn-rectangle").addEventListener("click", function () {
  // get triangle fields
  const rectangleB = document.getElementById("rectangle-b");
  const rectangleBValue = rectangleB.value;
  const rectangleH = document.getElementById("rectangle-h");
  const rectangleHValue = rectangleH.value;
  const rectangleArea = rectangleBValue * rectangleHValue;
  // where to add
  const showrectangle = document.getElementById("show-rectangle");
  // what to be added
  const li = document.createElement("li");
  li.innerText = `1. Rectangle   ` + rectangleArea + `cm`;
  // add child
  showrectangle.appendChild(li);
});

//3. parallelogram area calculate
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    // get triangle fields
    const parallelogramB = document.getElementById("parallelogram-b");
    const parallelogrambvalue = parallelogramB.value;
    const parallelogramh = document.getElementById("parallelogram-h");
    const parallelogramhvalue = parallelogramh.value;
    const parallelogramarea = 0.5 * parallelogrambvalue * parallelogramhvalue;
    // where to add
    const showTriangle = document.getElementById("show-parallelogram");
    // what to be added
    const li = document.createElement("li");
    li.innerText = `1. parallelogram   ` + parallelogramarea + `cm`;
    // add child
    showTriangle.appendChild(li);
  });
//4. rhombus area calculate
document.getElementById("btn-rhombus").addEventListener("click", function () {
  // get rhombus fields
  const rhombusb = document.getElementById("rhombus-b");
  const rhombusbvalue = rhombusb.value;
  const rhombush = document.getElementById("rhombus-h");
  const rhombushvalue = rhombush.value;
  const rhombusarea = 0.5 * rhombusbvalue * rhombushvalue;
  // where to add
  const showTriangle = document.getElementById("show-rhombus");
  // what to be added
  const li = document.createElement("li");
  li.innerText = `1. Rhombus   ` + rhombusarea + `cm`;
  // add child
  showTriangle.appendChild(li);
});
//5. pentagon area calculate
document.getElementById("btn-pentagon").addEventListener("click", function () {
  // get pentagon fields
  const pentagonB = document.getElementById("pentagon-b");
  const pentagonBValue = pentagonB.value;
  const pentagonH = document.getElementById("pentagon-h");
  const pentagonHValue = pentagonH.value;
  const pentagonArea = 0.5 * pentagonBValue * pentagonHValue;
  // where to add
  const showpentagon = document.getElementById("show-pentagon");
  // what to be added
  const li = document.createElement("li");
  li.innerText = `1. pentagon   ` + pentagonArea + `cm`;
  // add child
  showpentagon.appendChild(li);
});
//6. triangle area calculate
document.getElementById("btn-ellipse").addEventListener("click", function () {
  // get ellipse fields
  const ellipseB = document.getElementById("ellipse-b");
  const ellipseBValue = ellipseB.value;
  const ellipseH = document.getElementById("ellipse-h");
  const ellipseHValue = ellipseH.value;
  const ellipseArea = 3.14 * ellipseBValue * ellipseHValue;
  // where to add
  const showellipse = document.getElementById("show-ellipse");
  // what to be added
  const li = document.createElement("li");
  li.innerText = `1. ellipse   ` + ellipseArea + `cm`;
  // add child
  showellipse.appendChild(li);
});
