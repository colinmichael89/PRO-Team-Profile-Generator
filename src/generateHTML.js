const generateHTML = (team) => {
  const html = [];

  const generateManager = (manager) => {
    let managerHtml = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${manager.name}</li>
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
        <li class="list-group-item">Office #: ${manager.officeNumber}</li>
      </ul>
      </div>
    </div>`;
    html.push(managerHtml);
  };

  const generateEngineer = (engineer) => {
    let engineerHtml = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${engineer.name}</li>
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
        <li class="list-group-item">Github: <span id="github"><a href="http://github.com/${engineer.github}">${engineer.github}</a></span></li>
      </ul>
      </div>
    </div>`;
    html.push(engineerHtml);
  };

  const generateIntern = (intern) => {
    let internHtml = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${intern.name}</li>
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
        <li class="list-group-item">School: ${intern.school}</li>
  </ul>
      </div>
  </div>`;
    html.push(internHtml);
  };

  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
      generateEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
      generateIntern(team[i]);
    }
  }

  // join htmls
  return html.join(``);
};

//export function to generate page
module.exports = (team) => {
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Team Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
      <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
    <header>
      <h1>My Team Profile</h1>
      </header>

      <main> ${generateHTML(team)} </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  </body>
</html>`;
};
