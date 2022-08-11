import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../../pages/home/master-data/user/user.service';
import { first } from 'rxjs/operators';
import { DateValidator } from 'src/app/shared/date.validator';


interface Status {
  name: string,
  field: boolean,
}
@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  items!: Status[];
  user!: User;
  constructor(
    private _userService: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { this.items = [{ name: 'Active', field: true }, { name: 'Inactive', field: false }]; }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this._userService.getById(this.id).subscribe((data: User)=>{
      this.user = data;
    })
    this.isAddMode = !this.id;

    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      userRole: ['Editable1'],
      email: ['', [Validators.required, Validators.email]],
      employeeID: ['',],
      department: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      displayName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      workingTime: ['', Validators.compose([Validators.required, DateValidator.dateValidator])],
      status: [true],
      password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
    });

    if (!this.isAddMode) {
      this._userService.getById(this.id)
        .pipe(first())
        .subscribe(x => this.form.patchValue(x));
    }
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
  }
  this.loading = true;
  if (this.isAddMode) {
      this.createUser();
  } else {
      this.updateUser();
  }
}
private createUser() {
    this._userService.createNewUser(this.form.value)
        .pipe(first())
        .subscribe(() => {
          console.log(this.form.value);
          this.router.navigate(['../'], { relativeTo: this.route });
        })
        .add(() => this.loading = false);
}

private updateUser() {
    this._userService.editUser(this.id, this.form.value)
        .pipe(first())
        .subscribe(() => {
          console.log(this.form.value);
          this.router.navigate(['../../'], { relativeTo: this.route });
        })
        .add(() => this.loading = false);
}
}
