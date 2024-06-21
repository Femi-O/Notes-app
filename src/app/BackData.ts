// import InMemoryDbService so that I can implement my class on InMemoryDbService, also to access the createDb method.
import { InMemoryDbService } from 'angular-in-memory-web-api';
// I use this interface as a type for strong typing data
import { IComplexData, IData, IObservableData } from './pages/testing-page/data-interface';

export class BackData implements InMemoryDbService {
// id is a required field in InMemoryDbService. It gets data by id.
// All changes to this data is retained in memory.
  createDb(): { data: IData[], complexData: IComplexData[], observableData: IObservableData[]}{
    //first collection of data
    let data: IData[] = [
      {
        id: 1 ,
        serialNo: 2779,
        parameter:'Dollars',
        type:'Money',
        description: 'this is the unit of measuring weight',
      },
      {
        id: 2 ,
        serialNo: 8390,
        parameter:'Chioma',
        type:'Alien',
        description: 'this is of the alien species',
      },
      {
        id: 3 ,
        serialNo: 4256,
        parameter:'Pounds',
        type:'Money',
        description: 'this amount is probably enough',
      },
      {
        id: 4 ,
        serialNo: 2543,
        parameter:"Clava la Espada",
        type:'Song',
        description: 'this is a spanish song by Shiro Sagisu',
      },
      {
        id: 5 ,
        serialNo: 4276,
        parameter:'dataFromBack',
        type:'dataFromBack',
        description: 'uhn',
      },
      {
        id: 6 ,
        serialNo: 3689,
        parameter:'dataFromBack',
        type:'dataFromBack',
        description: 'ahn',
      },
      {
        id: 7 ,
        serialNo: 9001,
        parameter:'dataFromBack',
        type:'dataFromBack',
        description: 'ohn',
      },
      {
        id: 8 ,
        serialNo: 8881,
        parameter:'The Rumbling',
        type:'Song',
        description: "Bewaaaaaaaaare! It's coming for youuuuu.",
      },
    ];
    //second collection of data
    let complexData: IComplexData[] = [
      {
        id: 1 ,
        serialNo: 2779,
        title:'Dollars',
        type:'Money',
        description: 'this is the unit of measuring weight',
        rating: 3,
        tags: [],
      },
      {
        id: 2 ,
        serialNo: 8390,
        title:'Chioma',
        type:'Alien',
        description: 'this is of the alien species',
        rating: 2,
        tags: [],
      },
      {
        id: 3 ,
        serialNo: 4256,
        title:'Pounds',
        type:'Money',
        description: 'this amount is probably enough',
        rating: 4,
        tags: [],
      },
      {
        id: 4 ,
        serialNo: 2543,
        title:"Clava la Espada",
        type:'Song',
        description: 'this is a spanish song by Shiro Sagisu',
        rating: 2,
        tags: [],
      },
      {
        id: 5 ,
        serialNo: 4276,
        title:'complexBackStuff',
        type:'dataFromBack',
        description: 'uhn',
        rating: 5,
        tags: [],
      },
      {
        id: 6 ,
        serialNo: 3689,
        title:'complexBackStuff',
        type:'dataFromBack',
        description: 'ahn',
        rating: 5,
        tags: [],
      },
      {
        id: 7 ,
        serialNo: 9001,
        title:'complexBackStuff',
        type:'dataFromBack',
        description: 'ohn',
        rating: 1,
        tags: [],
      },
      {
        id: 8 ,
        serialNo: 8881,
        title:'The Rumbling',
        type:'Song',
        description: "Bewaaaaaaaaare! It's coming for youuuuu.",
        rating: 4.5,
        tags: [],
      },
    ];
    //third collection of data
    let observableData: IObservableData[] = [
      {
        id: 1 ,
        serialNo: 2779,
        title:'Dollars',
        type:'Money',
        description: 'this is the unit of measuring weight',
        rating: 3,
        status: true,
        tags: [],
      },
      {
        id: 2 ,
        serialNo: 8390,
        title:'Chioma',
        type:'Alien',
        description: 'this is of the alien species',
        rating: 2,
        status: true,
        tags: [],
      },
      {
        id: 3 ,
        serialNo: 4256,
        title:'Pounds',
        type:'Money',
        description: 'this amount is probably enough',
        rating: 4,
        status: false,
        tags: [],
      },
      {
        id: 4 ,
        serialNo: 2543,
        title:"Clava la Espada",
        type:'Song',
        description: 'this is a spanish song by Shiro Sagisu',
        rating: 2,
        status: true,
        tags: [],
      },
      {
        id: 5 ,
        serialNo: 4276,
        title:'complexBackStuff',
        type:'dataFromBack',
        description: 'uhn',
        rating: 5,
        status: false,
        tags: [],
      },
      {
        id: 6 ,
        serialNo: 3689,
        title:'complexBackStuff',
        type:'dataFromBack',
        description: 'ahn',
        rating: 5,
        status: false,
        tags: [],
      },
      {
        id: 7 ,
        serialNo: 9001,
        title:'complexBackStuff',
        type:'dataFromBack',
        description: 'ohn',
        rating: 1,
        status: false,
        tags: [],
      },
      {
        id: 8 ,
        serialNo: 8881,
        title:'The Rumbling',
        type:'Song',
        description: "Bewaaaaaaaaare! It's coming for youuuuu.",
        rating: 4.5,
        status: true,
        tags: [],
      },
    ];
    return { data, complexData, observableData };
  }
}
