import { Injectable } from '@angular/core';
import { Reimbursement } from '../reimbursement';
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReimbursementServiceService {
  private reimbursementUrl = 'http://localhost:8080/ticket';
  constructor(private http: HttpClient) {
  }

  getUserReimbursements(userId: number, success, fail) {
    let params = new HttpParams().set('userId', userId.toString());
    return this.http.get<Array<Reimbursement>>(this.reimbursementUrl, {params}).toPromise()
      .then((resp) => {
        localStorage.setItem('reimbursements', JSON.stringify(resp));
        console.log('Got user reimbursements');
        success();
      },
        (err) => {
        fail(err);
        });
  }

  getReimbursements(success, fail) {
    return this.http.get<Array<Reimbursement>>(this.reimbursementUrl).toPromise()
      .then((resp) => {
        localStorage.setItem('reimbursements', JSON.stringify(resp));
        console.log('Got all reimbursements');
        success();
      },
        (err) => {
        fail(err);
        });
  }

  getRecentReimbursements(userId: number, success, fail) {
    let params = new HttpParams().set('userId', userId.toString()).set('recent', 'true');
    return this.http.get<Array<Reimbursement>>(this.reimbursementUrl, {params}).toPromise()
      .then((resp) => {
        localStorage.setItem('reimbursements', JSON.stringify(resp));
        success();
      },
        (err) => {
        fail(err);
        });
  }

  getReimbursement(reimbursementId: number, success, fail) {
    let params = new HttpParams().set('reimbursementId', reimbursementId.toString());
    return this.http.get<Reimbursement>(this.reimbursementUrl, {params}).toPromise()
      .then((resp) => {
        localStorage.setItem('reimbursement', JSON.stringify(resp));
        success();
      },
        (err) => {
        fail(err);
        });
  }

  updateReimbursement(reimbursement: Reimbursement, success, fail) {
    return this.http.post(this.reimbursementUrl, JSON.stringify(reimbursement)).toPromise()
      .then((resp) => {
        success();
      },
        (err) => {
        fail(err);
        })
  }

  createReimbursement(reimbursement: Reimbursement, success, fail) {
    return this.http.post(this.reimbursementUrl, JSON.stringify(reimbursement)).toPromise()
      .then((resp)=>{
        success();
      },
        (err) => {
        fail(err);
        });
  }
}
