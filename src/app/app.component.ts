import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  arr;
constructor(public appService:AppService){

}

ngOnInit(){
  // this.appService.getData().subscribe(data=>this.arr=data);
  this.appService.getData().subscribe(data=>{
    this.arr=data.body;
    console.log(data);
  }
    );
}
}
