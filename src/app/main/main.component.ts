import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from "@angular/animations";

import { user } from "../models/entity";
import { DetailsComponent } from './../details/details.component';
import { MatExpansionModule } from '@angular/material/expansion';
// import { ELEMENT_DATA } from '../services/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class MainComponent implements OnInit {
  mapColumns: any[] = [{ name: 'action', display: '' }
                      , { name: 'fname', display: 'First Name' }
                      , { name: 'lname', display: 'Last Name' }
                      , { name: 'phone', display: 'Phone' }
                      , { name: 'email', display: 'Email' }];

  // dataSource = ELEMENT_DATA;
  dataSource: any
  columnsToDisplay: any[] = this.mapColumns.map(col => col.name)
  //columnsToDisplay = ['name', 'weight', 'symbol', 'position'];

  expandedElement: user = { id:0,fname:'',lname:'',phone:'',email:'',isActive:false,created:new Date() }
  users: user[] = []

  constructor(private dialog: MatDialog,
              private usrSVC: UserService) { }

  ngOnInit() {
    this.fetchUser()
  }

  fetchUser() {
    this.usrSVC.getAllUsers().subscribe(response => {
        this.users = response
        this.dataSource = this.users
    })
  }

  Delete(id: number): void {
    console.log(`Delete(): id = ${id}`)
    this.usrSVC.deleteUser(id).subscribe(result => {
      if (result > 0) {
        this.fetchUser()
      }
    })
  }
  Add(): void {
    const dialogRef = this.dialog.open(DetailsComponent, {
      // width: '560px',
      // data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.fetchUser()
        // console.log(`main() result = ${result}`)
        // this.usrSVC.getUserById(result).subscribe(res => {
        //   this.users.push(res)
        //   this.dataSource = this.users
        //   console.log('UPDATE IN MAIN')
        //   console.log(this.users)
        // })
      }
    })
  }
}

