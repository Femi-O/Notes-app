import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudServices } from 'src/app/crud.service';
import { IComplexData, IData } from '../testing-page/data-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-complexity-page',
  templateUrl: './complexity-page.component.html',
  styleUrls: ['./complexity-page.component.css']
})
export class ComplexityPageComponent implements OnInit {

  warrantForm: FormGroup;
  listData: IComplexData[] = [];
  listData$: Observable<IComplexData[]> = this.service.getComplexData();
  item: IComplexData;
  filteredData: IComplexData[] = [];
  complextDataForm: FormGroup;
  @ViewChild('closeModalDelete') closeModalDelete: any;
  @ViewChild('closeDeleteModalDelete') closeDeleteModalDelete: any;
  @ViewChild('closeModalView') closeModalView: any;
  @ViewChild('closeEditModalDelete') closeEditModalDelete: any;
  viewItem: IComplexData;
  editItem: IData;


  @ViewChild('testbtn') Test: ElementRef;
  itemId: number;
  // title: string;
  // serialNo: number;
  // description: string;
  // type: string;

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

//define fomArray 'tags' as a get so that the duplicate fn can identify what to push to.
  get tags(): FormArray{
    return <FormArray>this.complextDataForm.get('tags')
  }

  ngOnInit() {
    //this ngOnInit defined the form model


    //reseting the form
    this.resetForm();
    // Getting the List Data
    // this.getComplexData();

    //for create modal
    this.complextDataForm = this.fb.group({
      // here are the form controls and their validation rules
      serialNo: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]], //why's it ignoring the validations except required? Because the input was NOT set to text. Validators.pattern("^[0-9]*$") validator ensures it's a number from 0-9.
      title:['', [Validators.required, Validators.minLength(1), Validators.maxLength(21)]],
      type:['', Validators.required],
      description: ['', Validators.required],
      rating: ['', [Validators.required, Validators.pattern("^[1-5]*$"), Validators.maxLength(1)]], //Validators.pattern("^[1-5]*$") ensures its a number from 1-5
      tags: this.fb.array([ this.generateEntryInstance() ]),
    })
    }


//Testing Clicking a Button By Code
  ngAfterViewInit(){
    this.Test.nativeElement.click();
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
    this.ngOnInit();
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

    getComplexData(){
      this.service.getComplexData().subscribe(
        { next: res => {
          this.listData = res;
          this.filteredData = this.listData;
          console.log("array to display: " , this.filteredData);
        },}
        );
        ;
    }
    resetForm(){
      this.complextDataForm = this.fb.group({
        serialNo: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]], //why's it ignoring the validations except required? Because the input was NOT set to text. Validators.pattern("^[0-9]*$") validator ensures it's a number.
        title:['', [Validators.required, Validators.minLength(1), Validators.maxLength(21)]],
        type:['', Validators.required],
        description: ['', Validators.required],
        rating: ['', [Validators.required, Validators.pattern("^[1-5]*$"), Validators.maxLength(1)]],
        tags: this.fb.array([ this.generateEntryInstance() ]),
        })
    }
    generateEntryInstance(): FormGroup {
      return this.fb.group({
        eachTag: '',
      })
    }
    duplicateFn() {
      this.tags.push(this.generateEntryInstance());
    }
    saveFn(){
      const I = {...this.item, ...this.complextDataForm.value} //copies complextDataForm's value over item and puts the result inside I. NB: ('item' is an empty data object of the same type as the data expected)
      this.service.createComplexItem(I)
        .subscribe({
          next: () => this.onSaveComplete()
        })  }
    onSaveComplete(): void {
      this.closeModalDelete.nativeElement.click(); //closes modal
      this.getComplexData();
      this.resetForm();
    }

    //DELETE modal
    setId(id: number) {
      this.itemId = id;
    }
    deleteItem() {
      this.service.deleteItemById(this.itemId).subscribe(
         (response) => {
               this.closeDeleteModalDelete.nativeElement.click(); //closes modal
               this.getComplexData();
         },
      );
    }
    //! DELETE modal ENDS

    //VIEW modal
    getComplexItemForViewingById(id: number): void {
      //set the id against delete fn
      this.itemId = id;
      //gets data
      this.service.getComplexDataById(id)
       .subscribe(
         (res) => {
          this.viewItem = res;
          //setting each item to remove undefined property error
          // this.title = res.title;
          // this.serialNo = res.serialNo;
          // this.description = res.description;
          // this.type = res.type
        }
      );
    }
    //! VIEW modal ENDS

    //EDIT modal
    editModalSaveFn(): void{
      const I = {...this.editItem, ...this.complextDataForm.value} //copies listDataForm's value over item and puts the result inside I
      this.service.updateItem(I)
        .subscribe({
          next: () => this.onSaveEditComplete()
        })
    }
    editModalDeleteFn() {
      this.service.deleteItemById(this.item.id)
      .subscribe({
        next: () => this.onSaveEditComplete(),
      })
    }
    onSaveEditComplete(): void {
      this.closeEditModal(); //closes modal
      this.getComplexData();
      this.resetForm();
    }
    closeEditModal(){
      this.closeEditModalDelete.nativeElement.click(); //closes modal
    }

    getItemForEditingById(id: number): void {
      this.service.getDataById(id)
      .subscribe({
        next: (res: IData) => this.displayItems(res) //running display items fn passing in the res
      });
    }
    displayItems(itemsForDisplay: IData) {
      this.editItem = itemsForDisplay; //this sends all the items meant to be displayed (that came from the observable in the getDataById method) into the object called 'editItem'
      // make data appear on form: uses the item's properties to set the values for each of the form controls. The data then appears on the form.
      this.complextDataForm.patchValue({
        number: this.editItem.serialNo,
        parameter: this.editItem.parameter,
        type: this.editItem.type,
        description: this.editItem.description,
      });
    }
    //! EDIT modal ENDS


}
