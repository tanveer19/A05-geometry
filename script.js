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
