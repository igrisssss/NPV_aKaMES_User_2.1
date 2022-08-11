import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  checked: boolean = true;
  users: User[] = [];
  user!: User;
  cols!: any[];
  _selectedColumns!: any[];
  first = 0;
  _title: string = "USER";
  public items!: MenuItem[];
  constructor
    (
      private _userService: UserService,
      private _messageService: MessageService,
      private confirmationService: ConfirmationService,
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getAllUser();
    this.cols = [
      { field: 'employeeID', header: 'Employee ID' },
      { field: 'displayName', header: 'Display Name' },
      { field: 'userRole', header: 'User Role' },
      { field: 'department', header: 'Department' },
      { field: 'jobTitle', header: 'Job Title' },
      { field: 'email', header: 'Email' },
      { field: 'phoneNumber', header: 'Phone Number' },
      { field: 'workingTime', header: 'Working Time' }
    ];
    this._selectedColumns = this.cols;

    this.items =
      [
        {
          label: 'HOME',
          routerLink: '/home'
        },
        {
          label: 'MASTER DATA',
          routerLink: '/home/master-data'
        },
        {
          label: 'USER',
          routerLink: '/home/master-data/user'
        }
      ]
  }

  getAllUser() {
    this._userService.getAllUser().subscribe((res: any) => {
      this.users = res
    })
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.users);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "users");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(
        data,
        fileName + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }
  //delete user
  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.userName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._userService.deleteUser(user.employeeID!)
          .subscribe(data =>
            console.log(data));
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
        this.users = this.users.filter(val => val.employeeID !== user.employeeID);
        this.user = {};
      }
    }
    )
  }

  changeStatus(user: User) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to change status of ' + user.userName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._userService.editUser(user.employeeID!, user)
        .subscribe(data =>
          console.log(data));
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Status Changed', life: 3000 });
      },
      reject: () => {
        this.getAllUser();
      }
    }
    )
  }

  isCheck(val: boolean) {
    if (val == false) {
      this.users = this.users.filter(val => val.status !== false);
      this.first = 0;
    }
    else {
      this.getAllUser();
      this.first = 0;
    }
  }
}
