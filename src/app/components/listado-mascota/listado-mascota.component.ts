import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interface/mascota';


const ELEMENT_DATA: Mascota[] = [
  { id: 1, name: 'Ciro', age: 3, breed: "Perro", color: "Red", weight: 10 },
  { id: 2, name: 'Rufo', age: 3, breed: "Perro", color: "Red", weight: 10 },
  { id: 3, name: 'Tigro', age: 3, breed: "Gato", color: "Red", weight: 10 },
  { id: 4, name: 'Kaiser', age: 3, breed: "Perro", color: "Red", weight: 10 },
  { id: 5, name: 'Oso', age: 3, breed: "Perro", color: "Red", weight: 10 },
  { id: 6, name: 'Capitán', age: 3, breed: "Perro", color: "Red", weight: 10 },
  { id: 7, name: 'Ranger', age: 3, breed: "Perro", color: "Red", weight: 10 },
  { id: 8, name: 'Pancho', age: 3, breed: "Perro", color: "Red", weight: 10 },
  { id: 9, name: 'Laika', age: 3, breed: "Perro", color: "Red", weight: 10 },
  { id: 10, name: 'Leono', age: 3, breed: "Perro", color: "Red", weight: 10 },


];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'breed', 'color', 'weight', 'actions'];
  dataSource = new MatTableDataSource<Mascota>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event?.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


  }
}


