import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"; // HttpModule vs HttpClientModule 👉🏼 https://stackoverflow.com/questions/45405593/whats-the-difference-between-httpmodule-and-httpclientmodule-in-angular2#tab-top

import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employee/employee.component";

@NgModule({
  // a class decorator 👉🏼 https://angular.io/guide/ngmodules
  declarations: [AppComponent, EmployeeComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
