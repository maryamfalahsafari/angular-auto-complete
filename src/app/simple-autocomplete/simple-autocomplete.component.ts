import { Component, OnInit,AfterViewInit } from '@angular/core';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import {fromEvent} from 'rxjs';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-autocomplete',
  templateUrl: './simple-autocomplete.component.html',
  styleUrls: ['./simple-autocomplete.component.css']
})
export class SimpleAutocompleteComponent implements OnInit, AfterViewInit {


  searchMoviesCtrl = new FormControl();
  filteredMovies: any;
  isLoading = false;
  errorMsg: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.searchMoviesCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = '';
          this.filteredMovies = [];
          this.isLoading = true;
        }),
        switchMap(value => this.http.post('http://localhost:3000/getData',
          {
            pageSize: 10,
            pageIndex: 1,
            searchTerm: value
          })
          .pipe(
            finalize(() => {
              this.isLoading = false;
            }),
          )
        )
      )
      .subscribe(data => {
        // tslint:disable-next-line: no-string-literal
        if (!data['result']) {
          this.errorMsg = 'Error';
          this.filteredMovies = [];
        } else {
          this.errorMsg = '';
          // tslint:disable-next-line: no-string-literal
          this.filteredMovies = data['result'];
        }

        console.log(this.filteredMovies);
      });
  }


  ngAfterViewInit(): void {

    // const content = document.getElementsByTagName('mat-autocomplete');
    // const scroll$ = fromEvent(content, 'scroll').pipe(map(() => content));

    // scroll$.subscribe(element => {
    //   console.log('HI !!!!!!!!!!!!!!!!!!!');
    // });
  }

}
