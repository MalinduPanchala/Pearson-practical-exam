import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from 'src/app/shared/country.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CountryComponent } from '../country/country.component';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  constructor(
    public service: CountryService,
    private http: HttpClient,
    private matDialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  listdata: MatTableDataSource<any>;
  displayedColumns: string[] = ['key', 'name', 'options'];
  footerColumn: string[] = ['loading'];
  footerColumnNoData: string[] = ['no-data'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  searchKey: string;
  data: any;
  array = [
    {
      id: 0,
      name: 'Hello',
    },
    {
      id: 1,
      name: 'World',
    },
  ];

  ngOnInit(): void {
    this.service.refreshNeeded.subscribe(() => {
      this.getAllCountries();
    });

    // this.http.get<any[]>("http://localhost:8080/api/v2/countries/")
    this.getAllCountries();
  }

  private getAllCountries() {
    this.service.getAllCountries().subscribe((result) => {
      this.listdata = new MatTableDataSource(result);
      this.listdata.sort = this.sort;
      this.listdata.paginator = this.paginator;
    });
  }

  onCreate() {
    this.service.initializeForm();
    const config = new MatDialogConfig();
    config.autoFocus = true;
    this.matDialog.open(CountryComponent, config);
  }

  onEdit(row) {
    this.service.populateForm(row);
    const config = new MatDialogConfig();
    config.autoFocus = true;
    this.matDialog.open(CountryComponent, config);
  }

  onDelete(row) {
    if (window.confirm('Do you want to delete ' + row.name)) {
      this.service.deleteCountry(row);
      this._snackBar.open('Record deleted', 'Dismiss', {
        duration: 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['red-snackbar'],
      });
    }
  }

  onSearchClear() {
    this.searchKey = '';
    this.filter();
  }

  filter() {
    this.listdata.filter = this.searchKey.trim().toLowerCase();
  }
}
