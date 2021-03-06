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

13. Define the functions that corresponds to the buttons - `employee.component.ts`
- reset function
- submit function
- apply form validations using `required` and styling `ng-dirty` and `ng-invalid`
- ... so that the input field is red when user has not provided an info
- Example:
<pre>
input.ng-valid.ng-dirty {
    border-bottom-color: red !important;
}
</pre>
- define the functions that is set to run the `(click)`, `(ngSubmit)` and `[disabled]` angular binding inside the `employee.component.ts`

14. To make the submit button work - CONSUME post request from backend (nodeJs folder)
- to do this:
- one: create function inside the `service`
- import it in employee.component.ts (dont forget to add this to the providers array 😳 so many steps... angular should optimize this! )
- inject it. 

15. IN the HTML define `(ngSubmit)="onSubmit(employeeForm)"` and define `onSubmit(employeeForm)` in component.ts
- the workflow for this step involves a few things:
- define the function variable inside the component class, and pass the parameter using angular import `ngForm`
<pre>
onSubmit=( form: ngForm )={

}
</pre>
- Next, in the EmployeeService class define the function that will consume the controller API to mongodb (get, put, post update, delete, save).  This function returns an `observable` and we will subscribe to it in the employee.component.ts
- Use the @angular core HttpClientModule and import it in `app.module.ts` so you can access `http` request object
<pre>
  getEmployeeList = (emp: Employee) => {
    return this.http.get(this.baseURL)
  }
</pre>
- back to the `employee.component.ts` define the `onSubmit` function and subscribe to it.
- inside subscribe we store data inside `res` (response for simplicity).
<pre>
 onSubmit = (form: NgForm) => {
    this.employeeService.postEmployee(form.value).subscribe(res => {
        //we can do stuff here
        -reset the form this.resetForm(form);
        -make a materialize `toast` etc... 
    }
 }
</pre>
- DO THIS FOR THE REST OF the API request to mongodb.
- Enable CORS or otherwise it will not consume data from mongodb.  








<br><hr>

<a href="https://www.youtube.com/watch?v=UYh6EvpQquw">...src</a>
