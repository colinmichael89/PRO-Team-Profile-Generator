const Manager = require(`../lib/Manager`);

const manager = new Manager(`Colin`, `12345`, `colinmichael89@gmail.com`, `3`);

describe(`Manager`, () => {
  describe(`Initialization`, () => {
    test(`Return the values from the Manager object`, () => {
      expect(manager.name).toBe(`Colin`);
      expect(manager.id).toBe(`12345`);
      expect(manager.email).toBe(`colinmichael89@gmail.com`);
    });
  });
});
describe(`getName`, () => {
  test(`Return name from getName() method`, () => {
    expect(manager.getName()).toBe(`Colin`);
  });
});
describe(`getId`, () => {
  test(`Return id from getid() method`, () => {
    expect(manager.getId()).toBe(`12345`);
  });
});
describe(`getEmail`, () => {
  test(`Return email from getEmail() method`, () => {
    expect(manager.getEmail()).toBe(`colinmichael89@gmail.com`);
  });
});
describe(`getOfficeNumber`, () => {
  test(`Return officeNumber from getOfficeNumber() method`, () => {
    expect(manager.getOfficeNumber()).toBe(`3`);
  });
});
