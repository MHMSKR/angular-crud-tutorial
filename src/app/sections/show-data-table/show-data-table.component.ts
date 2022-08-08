import { Component, OnInit } from '@angular/core';

import { CallApiService } from '../../serveice/call-api.service'
import { User } from '../../model/user.model'

@Component({
  selector: 'app-show-data-table',
  templateUrl: './show-data-table.component.html',
  styleUrls: ['./show-data-table.component.css']
})
export class ShowDataTableComponent implements OnInit {

  public userData:User[] = [] ;
  displayedColumns: string[] = ['index', 'userId', 'name', 'birthdate','age','gender','createdDate','createdBy','edit'];
  constructor(private restApi:CallApiService) { }

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData(){
    this.restApi.getAllUser().subscribe((response)=>{
      this.userData = response.map((data,index)=>{
        data.index = index + 1;
        return data;
      })
      console.log(response,typeof(response))
      console.log('user',this.userData)
    },
    (error)=>{
      console.log(error)
    },()=>{
      console.log('complete')
    })
  }


  deleteUser(userId:number){
    this.restApi.deleteUserById(userId).subscribe((response)=>{
      // location.reload();
      console.log(response)
    },
    (error)=>{
      console.log(error)
    },()=>{
      console.log('delete complete')
      this.userData = this.userData.filter((data)=>{
        return data.userId !== userId;
      })
    })
    
  }



}
