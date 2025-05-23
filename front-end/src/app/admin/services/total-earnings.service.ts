import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../../pages/auth/auth-services/auth-service.service';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalEarningsService {

  private patientUrl = `${environment.api}/Bookings/total-earnings`;
  constructor(private http: HttpClient , private authService :AuthServiceService) {}

  getTotalEarnings(): Observable<number> {
    const headers = this.authService.getHeaders();  
    return this.http.get<any>(this.patientUrl, { headers }).pipe(
      map(response => response.data) 
    );
  }

}
