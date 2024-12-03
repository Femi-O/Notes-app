import { CrudServices } from '../../crud.service';
import { IData } from './data-interface';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

// I was trying to get the data by importing this to gain access to "const data",
// but really how to get the data is to call the get method, which brings "const data", sub to the observable, then do whatever I want with "const data" now that I have it
import { BackData } from 'src/app/BackData'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testing-page',
  templateUrl: './testing-page.component.html',
  styleUrls: ['./testing-page.component.css']
})
export class TestingPageComponent implements OnInit {

  warrantForm: FormGroup;
  listData: IData[] = [];
  testObservableListData$: Observable<IData[]> = this.service.getData();   //this.service.getData() returns an observable of IData so it can enter this variable that's defined as observable IData.
  item: IData;
  filteredData: IData[] = [];

  @ViewChild('testbtn') Test: ElementRef;
  // OldHardcoded: I took this out and put a fake backend
  // list: Data[] =[
  //   {
  //     "id": 1 ,
  //     "parameter":'Issue date',
  //     "detail":'20/4/2011'
  //   },
  //   {
  //     "id": 2 ,
  //     "parameter":'Value date',
  //     "detail":'12/4/2011'
  //   },
  //   {
  //     "id": 3 ,
  //     "parameter":'Amount',
  //     "detail":'100'
  //   },
  //   {
  //     "id": 4 ,
  //     "parameter":"Index holder's name",
  //     "detail":'Onna'
  //   },
  //   {
  //     "id": 1 ,
  //     "parameter":'ngRepeatDummy',
  //     "detail":'ngRepeatDummy'
  //   },
  //   {
  //     "id": 1 ,
  //     "parameter":'ngRepeatDummy',
  //     "detail":'ngRepeatDummy'
  //   },
  //   {
  //     "id": 1 ,
  //     "parameter":'ngRepeatDummy',
  //     "detail":'ngRepeatDummy'
  //   },
  //   {
  //     "id": 1 ,
  //     "parameter":'ngRepeatDummy',
  //     "detail":'ngRepeatDummy'
  //   },
  // ]

  // private fb: FormBuilder is needed in the constructor for form builder to work!
  constructor(private fb: FormBuilder,
              private service: CrudServices,
              private router: Router,) { }

  ngOnInit() {
    // The Form Model.   (this form has been removed)
    this.warrantForm = this.fb.group({
      Amount: ['',[Validators.required, Validators.maxLength(6)]],
      HolderName: ['',[Validators.required, ]],
      HolderId: ['',[Validators.required, ]],
      ReceivingAgent: ['',[Validators.required, ]],
      IssuingAgent: ['',[Validators.required, ]],
      BranchLocation: '',
      WarrantType: 'MarketWarrant',
    })
// Getting the List Data
    this.service.getData().subscribe(
      { next: data => { this.listData = data;
        this.filteredData = this.listData},}
      );
      ;

      this.testObservableListData$.subscribe(
        (res) => {console.log("observable test", res)}
      );
    }
//Testing Clicking a Button By Code
  ngAfterViewInit(){
    this.Test.nativeElement.click();
    console.log(this.testObservableListData$)

  }
  testFn(){
    alert('test clicked')
  }
  // call data and log customer form value using this
  onSubmit(): void {
    // console.log(this.warrantForm.value);
    this.service.getData().subscribe(response => {console.log(response)});
  }

  deleteFn(id: number): void {
    this.service.deleteItemById(id)
    .subscribe({
      next: () => this.onDeleteComplete(),
    })
  }

  onDeleteComplete(): void {
    alert('Deleted!')
    // this.ngOnInit();
  }

    object: IData[];

    filterfn(type: string){
      if (type == 'All') {
        this.filteredData = this.listData
      }
      else {
        this.filteredData  = this.listData.filter(passIf => passIf.type == type);
      }
    }

}
