interface LabelledValue {
  label: string;
}

// printLabel requires a parameter that has a property called label
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

let myObj = { size: 10, label: "Size 10 Object" }
printLabel(myObj)
