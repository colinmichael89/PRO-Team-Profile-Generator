const Employee = require(`../lib/Employee`);

const employee = new Employee(`Colin`, `12345`, `colinmichael89@gmail.com`);

test(`Return the values from the Employee object`, () => {
  expect(employee.name).toBe(`Colin`);
  expect(employee.id).toBe(`12345`);
  expect(employee.email).toBe(`colinmichael89@gmail.com`);
});
test(`Return name from getName() method`, () => {
  expect(employee.getName()).toBe(`Colin`);
});
test(`Return id from getid() method`, () => {
  expect(employee.getId()).toBe(`12345`);
});
test(`Return email from getEmail() method`, () => {
  expect(employee.getEmail()).toBe(`colinmichael89@gmail.com`);
});
