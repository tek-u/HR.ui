import { Injectable } from '@angular/core';
import { Observable, throwError, of, Subscriber, merge } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams  } from "@angular/common/http";

import { user } from '../models/entity';
import { Api } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _headers: HttpHeaders

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders()
                  .append('Access-Control-Allow-Origin', '*')
                  .append('Content-Type', 'application/json')
                  .append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
  }

  version(): Observable<string> {
    return this.http.get<string>(Api.url + Api.VER)
  }

  public getAllUsers(): Observable<user[]> {
    const header = new HttpHeaders().set('Content-Type', 'application/json; charset=utf8');
    // let httpHeaders = this.buildHeader('')
    return this.http.get<user[]>(Api.url + Api.GET_U, { headers: header });
  }

  public getUserById(id: number): Observable<user> {
    const url = Api.url + Api.GET_Ubid
    const queryString = this.buildQueryString(id)
    console.log(`getUserById() => url: ${url}/${queryString}`)
    const http$ = this.http.get<user>(url, {params: queryString})
    return http$

    // return http$.pipe(
    //     map(response => {
    //         console.log(`getUserById() => ${response}`);
    //         return this.parseToOtheyrObj(response);
    //     }),
    //     catchError(this.handleError)
    // );
  }

  public createUser(usr: user): Observable<number> {
    let url = Api.url + Api.NEW_U
    let body = JSON.stringify(usr)
    // const httpOptions = { headers: this._headers }
    const httpOptions = { headers: this.buildHeader() }
    const header = new HttpHeaders().set('Content-Type', 'application/json; charset=utf8');

    console.info(`createUser: &> url: ${url}`);
    console.info(`createUser: &> body: ${body}`);

    const http$ = this.http.post<number>(url, usr, { headers: header })
    return http$
    // return this.http.post(url, body, options)
    //            .map((response: Response) => <user>response.json())
    //            .catch(this.handleError);
  }

  public deleteUser(id: number): Observable<number> {
    let url = Api.url + Api.DEL_U
    // const headers = this.buildHeader()
    const header = new HttpHeaders().set('Content-Type', 'application/json; charset=utf8');
    const queryString = this.buildQueryString(id)
    console.log(`deleteUser() => url: ${url}/${queryString}`)
    const http$ = this.http.delete<number>(url, { params: queryString})
    return http$
  }

  private buildHeader(token?: string): HttpHeaders {
    let headers = new HttpHeaders()
                .set('Content-Type', 'application/json')
                // .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
                .set('Accept', 'application/json')
                .set('Access-Control-Allow-Origin', '*')
                // .set('Authorization', 'Bearer ' + token)
    return headers
  }
  private buildQueryString(id: number, queryParams?: HttpParams): HttpParams {
    let queryString: HttpParams = new HttpParams();
    // HttpParams is now immutable, so must set the variable on each set.
    if (queryParams !== undefined) {
        queryString = queryParams;
    }
    if (!queryString.has('id')) {
        queryString = queryString.set('id', id);
    }
    return queryString;
}

  private handleError(error: any) {
    console.error(error);
    return ('error in user service [user.service.ts]');
  }
}
