const Employee = require(`../lib/Employee`);

const employee = new Employee(`Colin`, `12345`, `colinmichael89@gmail.com`);

test(`Return the values from the Employee object`, () => {
  expect(employee.name).toBe(`Colin`);
});
