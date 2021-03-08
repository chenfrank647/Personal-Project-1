import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Adam Taylor", "1234", "at@abc.net"]
  info2: string[] = ["John Smith", "1235", "js@abc.net"]
  info3: string[] = ["Joe Joel", "1236", "jj@abc.net"]

  getdata1(): string[]{
    return this.info1;
  }
  getdata2(): string[]{
    return this.info2;
  }
  getdata3(): string[]{
    return this.info3;
  }
  addInfo(info:any){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }
  constructor() { }
}
