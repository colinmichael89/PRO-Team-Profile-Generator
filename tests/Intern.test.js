const Intern = require(`../lib/Intern`);

const intern = new Intern(
  `Colin`,
  `12345`,
  `colinmichael89@gmail.com`,
  `University of Denver`
);
describe(`Intern`, () => {
  describe(`Initialization`, () => {
    it(`Should return the values from the Intern object`, () => {
      expect(intern.name).toBe(`Colin`);
      expect(intern.id).toBe(`12345`);
      expect(intern.email).toBe(`colinmichael89@gmail.com`);
    });
  });
});
describe(`getName`, () => {
  it(`Should return name from getName() method`, () => {
    expect(intern.getName()).toBe(`Colin`);
  });
});
describe(`getId`, () => {
  it(`Return id from getid() method`, () => {
    expect(intern.getId()).toBe(`12345`);
  });
});
describe(`getEmail`, () => {
  it(`Return email from getEmail() method`, () => {
    expect(intern.getEmail()).toBe(`colinmichael89@gmail.com`);
  });
});
describe(`getSchool`, () => {
  it(`Return school from getSchool() method`, () => {
    expect(intern.getSchool()).toBe(`University of Denver`);
  });
});
