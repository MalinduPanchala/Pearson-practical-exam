import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


import { CountryService } from '../../shared/country.service';

export interface Country {
  id: string;
  name: string;
}

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  constructor(
    public service: CountryService,
    private http: HttpClient,
    public dialogRef: MatDialogRef<CountryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Country,
    private _snackBar: MatSnackBar
  ) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {}

  onSubmit() {
    // this.http.post("http://localhost:8080/api/v2/countries/",this.service.form.value)
    if (!this.service.form.get('id').value) {
      this.service
        .insertCountry(this.service.form.value)
        .subscribe();
      this.onClose();
      this._snackBar.open('Record Added', 'Dismiss', {
        duration: 1200,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['green-snackbar']
      });
    } else {
      this.service
        .updateCountry(this.service.form.value)
        .subscribe();
      this.onClose();
      this._snackBar.open('Record updated', 'Dismiss', {
        duration: 1200,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['red-snackbar']
      });
    }
  }

  onClose() {
    this.service.form.reset();
    this.dialogRef.close();
  }
}
