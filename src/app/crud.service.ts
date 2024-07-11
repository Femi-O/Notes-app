import { catchError, tap } from 'rxjs/operators';
import { IComplexData, IData, IObservableData } from './pages/testing-page/data-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,  } from "@angular/core";
// import observable cuz backend returns assynchronous data
import { Observable } from 'rxjs';

@Injectable ({providedIn: 'root'})

export class CrudServices {
  // this below link is the link to the back end
  private baseUrl= 'api/data';
  private complexUrl= 'api/complexData';
  private observableUrl= 'api/observableData';

  constructor (private http: HttpClient){ //without "private" http would be localized in the constructor and unavailable to the class
    // this console logs the BackData instantly.
    http.get(this.baseUrl).subscribe(response => {console.log('baseUrl content:', response);});
}

private newItem(): IData {
  return {
    id: 0,
    serialNo: 0,
    parameter: 'null',
    type: 'null',
    description: 'null'
    //I used null in quotes for now, I'll have to find how Deborah did it as a value.
  };
}

// -READ (http.get)    get stuff
getData(): Observable<IData[]> {
  return this.http.get<IData[]>(this.baseUrl)
  .pipe(
    tap(response => console.log(JSON.stringify(response)) )
    )
  }
//get the specific data of the list by its id.  this.http.get<any>(`${}/${}`)  <- that's a 'template literal' which specifies the link to pass into the fn
getDataById(id: number): Observable<IData>{
  return this.http.get<any>(`${this.baseUrl}/${id}`)
  // .pipe(tap(data => console.log('Specific item:' + data)
  // ))
}

updateItem(updatedItem: IData) {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); //specifies that the content will be in json format
  return this.http.put<IData[]>(`${this.baseUrl}/${updatedItem.id}`, updatedItem, { headers }) // remember `${}/${}` cone,dollar braces/dollar braces.   Also remember headers has to be in braces {headers}
}

createItem(savedItem: IData) {
  const headers = new HttpHeaders ({'Content-Type' : 'application/json'});   //specifies that the content will be in json format
  return this.http.post<IData>(this.baseUrl, savedItem, { headers })
  .pipe(
    tap(() => console.log('updateItem: ' + savedItem.id)),
  );
}

deleteItemById(id: number): Observable<{}> {
  const headers = new HttpHeaders ({'Content-Type' : 'application/json'});     //specifies that the content will be in json format
  return this.http.delete<IData>(`${this.baseUrl}/${id}`, { headers })
}


//Complex Data Page's Code
getComplexData(): Observable<IComplexData[]> {
  return this.http.get<IComplexData[]>(this.complexUrl)
  .pipe(
    tap(response => console.log('complexUrl content:', response) )
    )
  }
  //get the specific data of the list by its id.  this.http.get<any>(`${}/${}`)  <- that's a 'template literal' which specifies the link to pass into the fn
getComplexDataById(id: number): Observable<IComplexData>{
  return this.http.get<IComplexData>(`${this.baseUrl}/${id}`)
}
createComplexItem(savedItem: IComplexData) {
  const headers = new HttpHeaders ({'Content-Type' : 'application/json'});   //specifies that the content will be in json format
  return this.http.post<IComplexData>(this.complexUrl, savedItem, { headers })
  .pipe(
    tap(() => console.log('updateItem: ' + savedItem.id)),
  );
}

getObservableLists( itemId: number ): Observable<IObservableData> {
  return this.http.get<IObservableData>(`${this.observableUrl}/${itemId}`).pipe(
    tap(response => {
      console.log('observable object:', response);
      return response; // Extract data from response
    }),
    catchError(error => {
      console.error('Error getting observable data:', error);
      return [];
    })
  )
  }

}
