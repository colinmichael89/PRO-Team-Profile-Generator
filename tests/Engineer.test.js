const Engineer = require(`../lib/Engineer`);

const engineer = new Engineer(
  `Colin`,
  `12345`,
  `colinmichael89@gmail.com`,
  `colinmichael89`
);

describe(`Engineer`, () => {
  describe(`Initialization`, () => {
    test(`Return the values from the engineer object`, () => {
      expect(engineer.name).toBe(`Colin`);
      expect(engineer.id).toBe(`12345`);
      expect(engineer.email).toBe(`colinmichael89@gmail.com`);
    });
  });
});
describe(`getName`, () => {
  test(`Return name from getName() method`, () => {
    expect(engineer.getName()).toBe(`Colin`);
  });
});
describe(`getId`, () => {
  test(`Return id from getid() method`, () => {
    expect(engineer.getId()).toBe(`12345`);
  });
});
describe(`getEmail`, () => {
  test(`Return email from getEmail() method`, () => {
    expect(engineer.getEmail()).toBe(`colinmichael89@gmail.com`);
  });
});
describe(`getGithub`, () => {
  test(`Return github from getGithub() method`, () => {
    expect(engineer.getGithub()).toBe(`colinmichael89`);
  });
});
