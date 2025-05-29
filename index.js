// Write your solution in this file!

// Define an employee object
let employee = {
  name: "John Doe",
  streetAddress: "123 Main St",
}

//updateEmployee With Key Value
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

//mutates the original employee object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {	
  delete employee[key];
  return employee;
}