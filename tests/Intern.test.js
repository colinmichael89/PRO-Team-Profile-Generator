const Intern = require(`../lib/Intern`);

const intern = new Intern(
  `Colin`,
  `12345`,
  `colinmichael89@gmail.com`,
  `University of Denver`
);

test(`Return the values from the Intern object`, () => {
  expect(intern.name).toBe(`Colin`);
  expect(intern.id).toBe(`12345`);
  expect(intern.email).toBe(`colinmichael89@gmail.com`);
});
test(`Return name from getName() method`, () => {
  expect(intern.getName()).toBe(`Colin`);
});
test(`Return id from getid() method`, () => {
  expect(intern.getId()).toBe(`12345`);
});
test(`Return email from getEmail() method`, () => {
  expect(intern.getEmail()).toBe(`colinmichael89@gmail.com`);
});
test(`Return school from getSchool() method`, () => {
  expect(intern.getSchool()).toBe(`University of Denver`);
});
