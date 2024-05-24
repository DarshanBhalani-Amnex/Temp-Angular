import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CircularCounterComponent } from '../circular-counter/circular-counter.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule,CircularCounterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  httpClient=inject(HttpClient);
  flag=false;
  data:any=[];
  ngOnInit():void{
    
  }

  fatchData(message:string){
    this.httpClient.get('https://jsonplaceholder.typicode.com/'+message).subscribe((data:any) => {
      this.data=data;
this.flag=true;
    });
  }
 
}
