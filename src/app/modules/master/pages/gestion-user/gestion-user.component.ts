import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/modules/model/auth';
import { AuthService } from 'src/app/modules/services/auth.service';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css'],
})
export class GestionUserComponent {
  visible!: boolean;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  listUsers: User[] = [];
  dataSource = new MatTableDataSource(this.listUsers);
  displayedColumns: string[] = [
    'name',
    'lastname',
    'email',
    'role',
    'acciones',
  ];

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private readonly _liveAnnouncer = inject(LiveAnnouncer);
  private readonly authSvc = inject(AuthService);

  showDialog() {
    this.visible = true;
  }

  ngOnInit(): void {
    this.authSvc.getUsers().subscribe((resOk) => {
      this.dataSource.data = resOk;
      console.log(resOk);
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(id?: string) {}
  onUpdate(id?: string) {}
}