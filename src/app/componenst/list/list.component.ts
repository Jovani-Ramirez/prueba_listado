import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IApiData } from 'src/app/interfaces/api.interface';
import { GetApiService } from 'src/app/services/get-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public listado: IApiData[];
  public dataSource: any;
  public displayedColumns: string[] = ['id', 'ciclo', 'fecha'];

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    public listService: GetApiService
  ) {
    this.listado = [];
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.listService.getList().subscribe(d => {
      this.listado = d.results;
      this.dataSource = new MatTableDataSource<IApiData>(d.results);
      this.dataSource.paginator = this.paginator;
    })
  }

}
