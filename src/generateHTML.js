function generateHTML(answers) {
  return `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  </head>
  <body>
    <h1>Team Profile Builder</h1>
    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${getRole()}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${manager.name}</li>
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${
          manager.email
        }"</a></span></li>
        <li class="list-group-item">Office #: ${manager.officeNumber}</li>
      </ul>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${getRole()}</h5>
        <li class="list-group-item">Name: ${engineer.name}</li>
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${
          engineer.email
        }"</a></span></li>
        <li class="list-group-item">Github: <span id="github"><a href="http://github.com/${
          engineer.github
        }">${engineer.github}</a></span></li>
      </ul>
      </div>
    </div>
  </div>
  </div>
  <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${getRole()}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${intern.name}</li>
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${
          intern.email
        }"</a></span></li>
        <li class="list-group-item">School: ${intern.school}</li>
  </ul>
      </div>
    </div>
  </div>
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  </body>
</html>
    `;
}

module.exports = generateHTML;
