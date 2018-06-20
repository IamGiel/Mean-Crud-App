# Mean-Crud-App

Implement CRUD Operations in a MEAN Stack Application from Scratch. Here, tech stack inlcude MongoDB, Express,Node.JS and Angular 5 for the application development.

🖌 up on Angular

WorkFlow:

1.  Start the server environment,
2.  Set-up the back-end database environment MongoDB
3.  Define the routes that queries the Database (baseurl = /employees)
    <br>
    `localhost:3000/Employees` 👈🏼 baseURL
    <br>
    `localhost:3000/Employees/list` 👈🏼 accesses the GET route from controller

4.  Initialize Angular App using Angular CLI

- check for latest version and update <a href="https://stackoverflow.com/questions/44525746/global-angular-cli-version-greater-than-local-version">...src</a>
- add `Materializecss` and `Google fonts` CDN

5.  Create a new component

- `ng g c` which stands for angular-generate-component
- `ng g c employee` 👈🏼 in the CLI, which creates scaffold of folder inside app folder.

6.  Generate a `model` in Angular using a class -`ng g class employee --type=model`

- add this inside a folder under source, here we call the folder `shared`
7. Generate a `service class` in the `shared` folder
- `ng g s employee`
8. Create a model in `employee.model.ts` following the mongodb properties (key,value pair)

9. Create a service under `employee.service.ts`
- add imports on top of the file
- add `HttpClient` imports  <a href="https://angular.io/guide/http">...src</a>
- add `Observable` imports  <a href="https://developer.telerik.com/topics/web-development/introduction-observables-angular-developers/">...src</a>

10. Change the app.component.html so it renders the component employee's `employee.component.html` instead. 
- copy the selector from `employee.component.ts` and place its name in a open and closing tag such as:
- <app-employee></app-employee>

11. Create the HTML skeleton using materialize form template.
- create the css as well inside `style.css`

12. Import the forms module 
- 

<br><hr>

<a href="https://www.youtube.com/watch?v=UYh6EvpQquw">...src</a>
