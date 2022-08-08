import { Injectable } from '@angular/core';
import {  HttpClient , HttpHeaders , HttpErrorResponse} from '@angular/common/http'
import { User } from '../model/user.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  private instanceApi = "http://localhost:8778/skr-ctrl"
  private httpOption = {
     headers: new HttpHeaders({
      'content-type':'application/json'
     })
  }

  constructor(private http :HttpClient) {}

  /* ***********get user data from api *************/ 
  getAllUser(): Observable<User[]>{
    return this.http.get<User[]>(`${this.instanceApi}/get-all-user`,this.httpOption);
  }

  getUserBy(option:string,value:string){
    return this.http.get(`${this.instanceApi}/get-user-by?option=${option}&value=${value}`,this.httpOption)
  }

  getUserById(id:number){
    return this.http.get(`${this.instanceApi}/get-user-by-id?id=${id}`,this.httpOption)
  }
  /* *********** end get user data from api *************/ 
  /* ***********inser edit user data from api *************/ 
  insertUser(user:User){
    return this.http.post(`${this.instanceApi}/insert-user`,user,this.httpOption)
  }

  editUser(user:User){
    return this.http.post(`${this.instanceApi}/edit-user`,user,this.httpOption)
  }
  /* *********** end inser edit user data from api *************/ 

  /* ***********delete user data from api *************/ 
  deleteUserById(id:number){
    return this.http.delete(`${this.instanceApi}/delete-user?id=${id}`,{responseType: 'text'})
  }




}
