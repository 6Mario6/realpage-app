import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public data;
  public title = '';
  public description = '';

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.data = data;
    }

  ngOnInit() {
    if (this.data === 'delete') {
       this.title = 'Delete User';
       this.description = 'User has been deleted';
    } else if (this.data === 'add') {
      this.title = 'Add User';
      this.description = 'User has been added';
    } else if (this.data === 'update') {
      this.title = 'Update User';
      this.description = 'User has been updated';
    } else if (this.data === 'error') {
      this.title = 'Error';
      this.description = 'User not found';
    }
  }

  close() {
    this.dialogRef.close();
  }

}
