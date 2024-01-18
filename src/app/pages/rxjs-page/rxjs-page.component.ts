import { Component, OnInit } from '@angular/core';
import { of, from, tap, map } from 'rxjs';

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
  styleUrls: ['./rxjs-page.component.css']
})
export class RxjsPageComponent implements OnInit {
  items = ['item1', 'item2', 'item3', 'item4', 'item5']
  numbers = [1, 2, 3, 4, 5]

  constructor() { }

  ngOnInit() {
    of(2, 4, 6, 8).subscribe(
      (res) => console.log(res)
      );

    from([2, 4, 6, 8]).subscribe(
      // (res) => console.log(res)         syntax1
      // {next: (res) => console.log("resulting stuff: " , res)}            syntax2
      {next: (res) => console.log(`resulting stuff ${res}`),
       error: (err) => console.log(err)
        }
      );


      of(this.items).pipe(
        ).subscribe(
          (res) => console.log(res)
          );
      of(... this.items).pipe(
        // tap(each => alert(each))    works but I don't wanna alert anything for now
      ).subscribe(
        (res) => console.log(res)
        );


      of(... this.numbers).pipe( //the ... spread operator makes it output each of the numbers in the array one by one.
        map(output => output + 5),
        // tap(nextOutput => alert(nextOutput)),
      ).subscribe(
        (res) => console.log("processed no: " , res)
        );
  }

  backToTop(){
    window.scroll(0,0)
  }
}
