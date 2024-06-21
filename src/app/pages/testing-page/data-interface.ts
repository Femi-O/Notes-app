export interface IData {
  id: number;
  serialNo: number;
  parameter: string;
  type: string;
  description: string;
}

export interface IComplexData {
  id: number;
  serialNo: number;
  title: string;
  type: string;
  description: string;
  rating: number;
  tags: [];
}
export interface IObservableData {
  id: number;
  serialNo: number;
  title: string;
  type: string;
  description: string;
  rating: number;
  status: boolean;
  tags: [];
}
