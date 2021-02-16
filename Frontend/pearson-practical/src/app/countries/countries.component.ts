import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InfoComponentComponent } from '../info-component/info-component.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openInfo() {
    this.dialog.open(InfoComponentComponent);
  }
}
