import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl:'./temp.component.html',
  styleUrl: './temp.component.css'
})

export class TempComponent {
  httpClient=inject(HttpClient);
  data:any=[];
  ngOnInit():void{
    this.fatchData();
  }

  fatchData(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/comments').subscribe((data:any) => {
      this.data=data;
    });
  }
}
