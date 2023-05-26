import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { UserService } from './user.service';
import {Reservation} from '../models/reservation';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
  private BASE_URL_DELETE = 'http://localhost:8080/SpringMVC/api/reservation/deleteRentalContract';
  private BASE_URL_REVENU_BY_OFFRE = 'http://localhost:8080/SpringMVC/api/reservation/revenueoffer'
  private BASE_URL_IS_VALID = 'http://localhost:8080/SpringMVC/api/reservation/ContractIsValidd';
  private BASE_URL_GET_BY_ID='http://localhost:8080/SpringMVC/api/reservation/getRentalContract';
  private BASE_URL_ADD = 'http://localhost:8080/SpringMVC/api/reservation/addReservation/';
  constructor(
    private http: HttpClient, private userService: UserService
  ) { }

  getRentalContrat(){
    return this.http.get('http://localhost:8080/SpringMVC/api/reservation/GetAllReservations');
  }
  getContratById(id: any){
    console.log('gg' , id);
    return this.http.get('http://localhost:8080/SpringMVC/api/reservation/getReservation/'+id)
  }
  getUsersFinContrat(){
    return this.http.get('http://localhost:8080/SpringMVC/api/reservation/GetUsersFinContrat')
  }

  addReservation(reservation: Reservation, vehiculeId: number, userId: number): Observable<Reservation> {
    return this.http.post(`${this.BASE_URL_ADD}${vehiculeId}/${userId}`, reservation).pipe(
        map((response: any) => response as Reservation)
    );
  }
  deleteContrat(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL_DELETE}/${id}`, { responseType: 'text' });

  }

  contratIsValid(startdate : any,enddate:any): any {
    return this.http.get(`${this.BASE_URL_IS_VALID}/${startdate}/${enddate}`);
  }
  calculRevenu(id: number): Observable<number> {
    return this.http.get<number>(`${this.BASE_URL_REVENU_BY_OFFRE}/${id}`);
  }


}
