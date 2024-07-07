import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef,GridApi, GridReadyEvent } from 'ag-grid-community'; // Column Definition Type Interface
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component 

@Component({
  selector: 'app-ag-grid-use',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid-use.component.html',
  styleUrl: './ag-grid-use.component.css'
})
export class AgGridUseComponent implements OnInit {


  userList:any []=[];
  public rowSelection: "single" | "multiple" = "multiple";
  // Column Definitions: Defines the columns to be displayed.
 colDefs: ColDef[] = [
  { field: "id",headerName: 'User Id',headerCheckboxSelection:true,checkboxSelection:true,
    cellRenderer:(item:any)=>{
      return "Emp-"+item.value
    }
   },
  { field: "name",headerName: 'Name',filter:true },
  { field: "username",headerName: 'User Name' },
  { field: "email",headerName: 'Email',editable: true }
];
defaultColDef = {
  flex:1,
  minWidth:100
}
private gridApi!: GridApi<any>;
  constructor(private httpClient:HttpClient){
  }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userList = res;
    })
  }
  onBtExport() {
    this.gridApi.exportDataAsCsv();
    }
    onGridReady(event: GridReadyEvent<any>) {
      this.gridApi=event.api;
      }
}
