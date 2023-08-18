// Collect value from input
function getInputValue(inputId) {
  const getValue = document.getElementById(inputId);
  const stringValue = getValue.value;
  const convertNumber = parseFloat(stringValue);
  getValue.value = "";
  return convertNumber;
}

// Value set into inner text
function setValue(elementId, area) {
  const targetElement = document.getElementById(elementId);
  targetElement.innerText = area;
}
// set value into list
function setFinal(geoMetryName, area) {
  const setValueFinal = document.getElementById("newElementAdd");
  const count = setValueFinal.childElementCount;
  const tr = document.createElement("tr");
  setValueFinal.appendChild(tr);
  tr.innerHTML = `
                        
                        <td>${count + 1}.</td>
                        <td>${geoMetryName}</td>
                        <td>${area} cm<sup>2</sup></td>
                        <td><button class="btn">Convert</button></td>
                      
  `;
}
