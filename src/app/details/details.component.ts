import { Component, OnInit, Inject, ViewChild  } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { user } from "../models/entity";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userData: user

  @ViewChild('btnSubmit') btnSubmit!: MatButton
  @ViewChild('btnCancel') btnCancel!: MatButton

  userForm = this.fb.group({
    id: [0],
    fname: ['', [Validators.required, Validators.maxLength(999999999999)]],
    lname: ['',[Validators.required, Validators.maxLength(999999999999)]],
    phone: ['',[Validators.required, Validators.maxLength(999999999999)]],
    email: ['',[Validators.nullValidator, Validators.maxLength(999999999999)]],
    isActive: [false],
    created: [new Date(),[Validators.nullValidator]]
  });

  constructor(public fb: FormBuilder
            , public dialogRef: MatDialogRef<user>
            , @Inject(MAT_DIALOG_DATA) public mData: user
            , private api: UserService) {
    this.userData = new user()
  }

  ngOnInit() {}
  ngAfterViewInit() { this.btnSubmit.focus(); }

  onClose(): void { this.dialogRef.close(); }
  onSave(): void {
    this.onSubmit()
  }
  onSubmit(): void {
    var data = this.userForm.value
    console.log(data)
    if (data != null){
      this.api.createUser(this.userForm.value as user)
        .subscribe((ret: number) => {
          if (ret > 0) {
            this.dialogRef.close(ret)
          }
        })
    }


    // this.userData = new user(
    //   data.fname,
    //   data.lname,
    //   this.userForm.get('lname').value,
    //   this.userForm.get('phone').value,
    //   this.userForm.get('email')?.value
    // )
    // this.userData.fname = this.userForm.get('fname')?.value



  }
}
