import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  property = "true";
  isAvailable ="true";
  users=[
    {name :"anu", age :10},
    {name :"anil", age :21},
    {name :"usha", age :32},
    {name :"siri", age :43}
  ]
  onclick(){
    document.getElementById("click").innerHTML="You Clicked Me!";
  }
  
    values = 'Nothing';
    
      onKey(event: any) { // without type info
        this.values = event.target.value;
      }
  
}
