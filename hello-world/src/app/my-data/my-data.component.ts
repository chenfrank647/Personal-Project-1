import { Component, OnInit } from '@angular/core';
import { RecordsService } from "../records.service"
@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css'],
  providers: [RecordsService]
})
export class MyDataComponent implements OnInit {

  dataReceived1: string[] = [];
  dataReceived2: string[] = [];
  dataReceived3: string[] = [];

  getDataFromServiceClass1(){
    this.dataReceived1 = this.rservice.getdata1()
  }
  getDataFromServiceClass2(){
    this.dataReceived2 = this.rservice.getdata2()
  }
  getDataFromServiceClass3(){
    this.dataReceived3 = this.rservice.getdata3()
  }

  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }

  updateInfo(frm:any){
    this.rservice.addInfo(frm.value.location)
  }

}
