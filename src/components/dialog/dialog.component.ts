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
    if(this.data === 'delete') {
       this.title = 'User Delete';
       this.description = 'User has been deleted';
    } else if (this.data === 'add') {
      this.title = 'User Delete';
      this.description = 'User has been deleted';
    }
  }

  close() {
    this.dialogRef.close();
  }

}
