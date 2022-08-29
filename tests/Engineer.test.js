const Engineer = require(`../lib/Engineer`);

const engineer = new Engineer(
  `Colin`,
  `12345`,
  `colinmichael89@gmail.com`,
  `colinmichael89`
);

test(`Return the values from the engineer object`, () => {
  expect(engineer.name).toBe(`Colin`);
  expect(engineer.id).toBe(`12345`);
  expect(engineer.email).toBe(`colinmichael89@gmail.com`);
});
test(`Return name from getName() method`, () => {
  expect(engineer.getName()).toBe(`Colin`);
});
test(`Return id from getid() method`, () => {
  expect(engineer.getId()).toBe(`12345`);
});
test(`Return email from getEmail() method`, () => {
  expect(engineer.getEmail()).toBe(`colinmichael89@gmail.com`);
});
test(`Return github from getGithub() method`, () => {
  expect(engineer.getGithub()).toBe(`colinmichael89`);
});
