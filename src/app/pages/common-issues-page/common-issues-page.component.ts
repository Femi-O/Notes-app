import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-issues-page',
  templateUrl: './common-issues-page.component.html',
  styleUrls: ['./common-issues-page.component.css']
})
export class CommonIssuesPageComponent implements OnInit {
  toSet: string[] = [];
  collapsed = false;
  active1: boolean = false;
  active2: boolean = false;
  active3: boolean = false;
  active4: boolean = false;
  active5: boolean = false;
  active6: boolean = false;
  active7: boolean = false;
  active8: boolean = false;
  active9: boolean = false;
  active10: boolean = false;

  constructor() {
    this.findActiveProperties(this); //"this" in the bracket refers to "this component class"
   }

  ngOnInit(): void {
  }

  backToTop(){
    window.scroll(0,0)
  }
  toggleCollapse(){
    this.toggleBooleanValue(this);
  }
  findActiveProperties(obj: any) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && typeof obj[key] === 'boolean' && key.toLowerCase().includes('active')) {
        this.toSet.push(key);
      }
    }
  }

  toggleBooleanValue(obj: any) {
    let allFalse = true; // Initialize a flag to check if all properties are false
    for (const key of this.toSet) {
      if (obj[key]) {
        allFalse = false; // If any property is true, set the flag to false
        break; // No need to check further if one is true
      }
    }

    for (const key of this.toSet) {
      obj[key] = allFalse ? true : false; // Toggle all properties based on the flag
    }

    this.collapsed = allFalse ? true : false; // Toggle the collapsed property based on the flag
    }


  toggleAccordion1(): void {
    this.active1 = !this.active1;
  }
  toggleAccordion2(): void {
    this.active2 = !this.active2;
  }
  toggleAccordion3(): void {
    this.active3 = !this.active3;
  }
  toggleAccordion4(): void {
    this.active4 = !this.active4;
  }
  toggleAccordion5(): void {
    this.active5 = !this.active5;
  }
  toggleAccordion6(): void {
    this.active6 = !this.active6;
  }
  toggleAccordion7(): void {
    this.active7 = !this.active7;
  }
  toggleAccordion8(): void {
    this.active8 = !this.active8;
  }
  toggleAccordion9(): void {
    this.active9 = !this.active9;
  }
  toggleAccordion10(): void {
    this.active10 = !this.active10;
  }


}
