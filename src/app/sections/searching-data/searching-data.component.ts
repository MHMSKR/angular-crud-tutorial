import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searching-data',
  templateUrl: './searching-data.component.html',
  styleUrls: ['./searching-data.component.css']
})
export class SearchingDataComponent implements OnInit {

  public optionSelected: string | undefined;
  public optionValue: string | undefined;
  constructor() { }

  ngOnInit(): void {
    
  }

  // call services
  searchData():void {
    console.log(this.optionSelected,this.optionValue)
  }



}

