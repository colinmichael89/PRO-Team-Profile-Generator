const Employee = require(`../lib/Employee`);

const employee = new Employee(`Colin`, `12345`, `colinmichael89@gmail.com`);

describe(`Employee`, () => {
  describe(`Initialization`, () => {
    test(`Return the values from the Employee object`, () => {
      expect(employee.name).toBe(`Colin`);
      expect(employee.id).toBe(`12345`);
      expect(employee.email).toBe(`colinmichael89@gmail.com`);
    });
  });
});
describe(`getName`, () => {
  test(`Return name from getName() method`, () => {
    expect(employee.getName()).toBe(`Colin`);
  });
});
describe(`getId`, () => {
  test(`Return id from getid() method`, () => {
    expect(employee.getId()).toBe(`12345`);
  });
});
describe(`getEmail`, () => {
  test(`Return email from getEmail() method`, () => {
    expect(employee.getEmail()).toBe(`colinmichael89@gmail.com`);
  });
});
