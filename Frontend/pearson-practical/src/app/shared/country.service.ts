import { Injectable } from '@angular/core';
import { FormGroup, FormControl,Validators } from "@angular/forms"
import { Observable,Subject } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { tap } from "rxjs/operators"

export interface Country {
  id: any,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  private _refreshNeeded = new Subject<void>();

  get refreshNeeded() {
    return this._refreshNeeded;
  }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required)
  });

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/api/v2/countries/")
  }

  insertCountry(data): Observable<any> {
    return this.http.post("http://localhost:8080/api/v2/countries/",data)
    .pipe(
      tap(()=> {
        this._refreshNeeded.next();
      })
    )
  }

  updateCountry(data): Observable<any> {
    return this.http.put("http://localhost:8080/api/v2/countries/" + data.id,data)
    .pipe(
      tap(()=> {
        this._refreshNeeded.next();
      })
    )
  }

  deleteCountry(data) {
    this.http.delete("http://localhost:8080/api/v2/countries/" + data.id)
    .pipe(
      tap(()=> {
        this._refreshNeeded.next();
      })
    ).subscribe()
  }

  initializeForm() {
    this.form.setValue({
      id: null,
      name: ""
    })
  }

  populateForm(Country) {
    this.form.setValue(Country)
    
  }
}
