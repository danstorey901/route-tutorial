import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  objs: any[] = [
    {id: 1, title: "ABC", count: 56},
    {id: 2, title: "DEF", count: 3},
    {id: 3, title: "ghi", count: 6},
    {id: 4, title: "JKL", count: 9},
    {id: 5, title: "MNO", count: 7},
    {id: 6, title: "pqr", count: 11},
    {id: 7, title: "stu", count: 55}  
  ];
  search: string = "";
  aBool: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
